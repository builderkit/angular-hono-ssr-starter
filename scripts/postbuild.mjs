import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// resolve __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDir = path.resolve(
  __dirname,
  '../dist/angular-hono-ssr-starter/browser'
);
const csrFile = path.join(distDir, 'index.csr.html');

try {
  await fs.unlink(csrFile);
  console.log('✔ index.csr.html removed');
} catch (err) {
  if (err.code === 'ENOENT') {
    console.log('ℹ index.csr.html not found, skipping');
  } else {
    console.error('✖ Error removing index.csr.html:', err);
    process.exit(1);
  }
}
