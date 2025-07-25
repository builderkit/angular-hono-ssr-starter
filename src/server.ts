import { join } from 'node:path';
import { AngularAppEngine, createRequestHandler } from '@angular/ssr';
import { isMainModule } from '@angular/ssr/node';
import { serve } from '@hono/node-server';
import { serveStatic } from '@hono/node-server/serve-static';
import { Hono } from 'hono';
import { requestId } from 'hono/request-id';
import { secureHeaders } from 'hono/secure-headers';

/**
 * Initialize Hono and export the app instance
 */
export const app = new Hono({ strict: false })
  .use(requestId())
  .use(secureHeaders());

/**
 * Endpoints can be defined here
 */
app.get('/api/v1/health', async (c) => {
  return c.json({
    status: 'ok',
    message: 'Server is running',
    timestamp: new Date().toISOString(),
  });
});

/**
 * Serve static files
 */
app.use(
  '*',
  serveStatic({
    root: join(import.meta.dirname, '../browser'),
    onFound: (path, c) => {
      c.header('Cache-Control', `public, immutable, max-age=31536000`);
    },
    onNotFound: () => {
      // Optionally log or handle the case where a static file is not found
    },
  })
);

/**
 * Handle SSR for rest of the routes using Angular App Engine
 */
app.use('*', async (c, next) => {
  const angularApp = new AngularAppEngine();
  const response = await angularApp.handle(c.req.raw);
  if (response) {
    return response;
  }

  return next();
});

/**
 * Not found
 */
app.notFound((c) => {
  return c.text('404 - Not found', 404);
});

/**
 * Error handling
 */
app.onError((error, c) => {
  console.error(`${error}`);
  return c.text('Internal Server Error', 500);
});

/**
 * Start the server if this module is the main entry point.
 * The server listens on the port defined by the `PORT` environment
 * variable, or defaults to 4000.
 */
if (isMainModule(import.meta.url)) {
  const port = Number(process.env['PORT'] || 4000);
  serve(
    {
      fetch: app.fetch,
      port,
    },
    (info) => {
      console.log(`Hono server listening on http://localhost:${info.port}`);
    }
  );
}

/**
 * Request handler used by the Angular CLI (for dev-server and during build)
 * or Firebase Cloud Functions.
 */
export const reqHandler = createRequestHandler(app.fetch);
