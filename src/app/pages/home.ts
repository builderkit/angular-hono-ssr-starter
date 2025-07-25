import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  template: `
    <main class="mx-auto min-h-screen max-w-3xl px-6 py-10 text-gray-800">
      <h1 class="mb-4 text-4xl font-bold">Angular Hono SSR Starter</h1>
      <p class="mb-6 text-lg">
        This is a simple Angular + Hono SSR setup running on a modern JavaScript
        runtime. You're currently looking at the index page rendered on the
        server.
      </p>

      <nav class="mb-8 flex flex-col gap-2">
        <a
          routerLink="/"
          class="text-blue-600 hover:underline"
          >Home</a
        >
        <a
          routerLink="/about"
          class="text-blue-600 hover:underline"
          >About</a
        >
        <a
          routerLink="/contact"
          class="text-blue-600 hover:underline"
          >Contact</a
        >
      </nav>

      <section class="rounded-xl bg-gray-100 p-4 text-sm leading-relaxed">
        <p><strong>SSR framework:</strong> Hono</p>
        <p><strong>Frontend:</strong> Angular with standalone components</p>
        <p><strong>Styling:</strong> TailwindCSS</p>
        <p><strong>Deployment:</strong> Ready for Vercel</p>
      </section>
    </main>
  `,
})
export default class HomePage {}
