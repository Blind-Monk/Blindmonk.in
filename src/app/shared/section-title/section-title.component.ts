import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-title',
  standalone: true,
  template: `
    <div [class]="centered() ? 'text-center max-w-3xl mx-auto' : 'max-w-3xl'">
      @if (badge()) {
        <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-accent-light text-amber-700 mb-3">
          {{ badge() }}
        </span>
      }
      <h2 class="font-display text-3xl md:text-4xl font-bold text-primary tracking-tight">
        {{ title() }}
      </h2>
      @if (subtitle()) {
        <p class="mt-4 text-lg text-muted leading-relaxed">
          {{ subtitle() }}
        </p>
      }
    </div>
  `
})
export class SectionTitleComponent {
  title = input.required<string>();
  subtitle = input<string>();
  badge = input<string>();
  centered = input<boolean>(true);
}
