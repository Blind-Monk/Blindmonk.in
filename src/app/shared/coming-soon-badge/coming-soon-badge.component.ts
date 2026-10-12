import { Component, input } from '@angular/core';

@Component({
  selector: 'app-coming-soon-badge',
  standalone: true,
  template: `
    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-100 text-amber-800 border border-amber-200">
      <span class="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
      {{ label() }}
    </span>
  `
})
export class ComingSoonBadgeComponent {
  label = input<string>('Coming Soon');
}
