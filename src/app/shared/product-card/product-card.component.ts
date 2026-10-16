import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ComingSoonBadgeComponent } from '../coming-soon-badge/coming-soon-badge.component';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [RouterLink, ComingSoonBadgeComponent],
  template: `
    <div class="h-full group rounded-2xl border border-border bg-white p-7 shadow-sm hover:shadow-xl hover:border-accent/40 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div class="flex items-center justify-between mb-4">
          <div class="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-2xl group-hover:bg-amber-50 group-hover:scale-110 transition-all">
            {{ icon() }}
          </div>
          @if (comingSoon()) {
            <app-coming-soon-badge />
          }
        </div>
        <h3 class="font-display text-xl font-semibold text-primary group-hover:text-accent transition">
          {{ title() }}
        </h3>
        <p class="mt-2 text-muted leading-relaxed text-sm">
          {{ description() }}
        </p>

        @if (tags() && tags().length > 0) {
          <div class="flex flex-wrap gap-2 mt-4">
            @for (tag of tags(); track tag) {
              <span class="text-xs px-2.5 py-0.5 rounded-md bg-slate-100 text-slate-600 font-medium">
                {{ tag }}
              </span>
            }
          </div>
        }
      </div>

      <div class="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
        <a [routerLink]="link()" class="text-xs font-semibold text-primary group-hover:text-accent flex items-center gap-1">
          <span>Learn More</span>
          <span class="text-amber-500 group-hover:translate-x-1 transition-transform">→</span>
        </a>
      </div>
    </div>
  `
})
export class ProductCardComponent {
  title = input.required<string>();
  description = input.required<string>();
  icon = input.required<string>();
  link = input<string>('/contact');
  comingSoon = input<boolean>(false);
  tags = input<string[]>([]);
}
