import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-about',
  imports: [RouterLink],
  template: `
    <main class="mx-auto min-h-screen max-w-3xl px-6 py-10 text-gray-800">
      <h1 class="mb-4 text-3xl font-bold">About</h1>
      <p class="mb-6">
        This project was created to demonstrate Angular working with Hono for
        server-side rendering. It’s minimal by design, meant to be a clean
        starting point for real-world apps.
      </p>

      <a
        routerLink="/"
        class="text-blue-600 hover:underline"
        >← Back to Home</a
      >
    </main>
  `,
})
export default class AboutPage {}
