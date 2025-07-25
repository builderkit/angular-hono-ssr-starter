import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-contact',
  imports: [RouterLink],
  template: `
    <main class="mx-auto min-h-screen max-w-3xl px-6 py-10 text-gray-800">
      <h1 class="mb-4 text-3xl font-bold">Contact</h1>
      <p class="mb-6">
        This is just a placeholder contact page. You can extend it with a form,
        email integration, or whatever you need.
      </p>

      <a
        routerLink="/"
        class="text-blue-600 hover:underline"
        >← Back to Home</a
      >
    </main>
  `,
})
export default class ContactPage {}
