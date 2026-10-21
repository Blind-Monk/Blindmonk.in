import { Component, input } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  template: `
    <div class="h-full rounded-2xl border border-border bg-surface p-8 shadow-sm hover:border-accent/40 hover:shadow-md transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="w-12 h-12 rounded-xl bg-amber-100/70 text-primary flex items-center justify-center text-2xl mb-5">
          {{ icon() }}
        </div>
        <h3 class="font-display text-xl font-semibold text-primary mb-4">
          {{ title() }}
        </h3>
        @if (description()) {
          <p class="text-sm text-muted mb-4 leading-relaxed">
            {{ description() }}
          </p>
        }
        <ul class="space-y-3">
          @for (service of services(); track service) {
            <li class="flex items-start gap-3 text-sm text-slate-700">
              <span class="text-amber-500 font-bold mt-0.5">✦</span>
              <span>{{ service }}</span>
            </li>
          }
        </ul>
      </div>
    </div>
  `
})
export class ServiceCardComponent {
  title = input.required<string>();
  icon = input.required<string>();
  description = input<string>();
  services = input.required<string[]>();
}
