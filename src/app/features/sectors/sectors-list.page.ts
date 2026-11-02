import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SeoService } from '../../core/services/seo.service';
import { SECTORS_DATA } from '../../core/data/sectors-data';
import { SectorItem } from '../../core/models/sector.model';

@Component({
  selector: 'app-sectors-list-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    <!-- Hero Section -->
    <section class="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28 overflow-hidden">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          Universal Industry Architecture
        </div>

        <h1 class="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
          Industry Sectors & <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            Digital Transformation
          </span>
        </h1>

        <p class="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6 font-normal">
          Every industry sector operates under distinct regulatory, operational, and architectural physics. Explore how BlindMonk’s software, AI, infrastructure, and marketing capabilities solve mission-critical bottlenecks across all 17 major economic sectors.
        </p>

        <!-- Search / Filter Input -->
        <div class="max-w-md mx-auto mt-8">
          <input
            type="text"
            [value]="searchTerm()"
            (input)="onSearchInput($event)"
            placeholder="Search sector or sub-industry (e.g., Mining, Healthcare, Dairy)..."
            class="w-full px-5 py-3.5 rounded-full bg-slate-800/90 border border-slate-700 text-white placeholder-slate-400 text-sm focus:outline-none focus:border-amber-400 transition"
          />
        </div>
      </div>
    </section>

    <!-- Sectors Grid -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <div class="flex items-center justify-between mb-12">
        <div>
          <span class="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
            All 17 Major Divisions
          </span>
          <h2 class="font-display text-3xl font-bold text-primary mt-2">
            Explore Sector Blueprints
          </h2>
        </div>
        <span class="text-xs font-mono text-muted">
          Showing {{ filteredSectors().length }} of {{ sectors.length }} sectors
        </span>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (sector of filteredSectors(); track sector.id) {
          <div class="rounded-3xl border border-border bg-white p-7 shadow-sm hover:shadow-md hover:border-amber-400 transition flex flex-col justify-between group">
            <div>
              <div class="flex items-center justify-between mb-4">
                <span class="text-3xl p-2.5 rounded-2xl bg-amber-100/70 inline-block">{{ sector.icon }}</span>
                <span class="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700">
                  {{ sector.subsectors.length }} Subsectors
                </span>
              </div>

              <h3 class="font-display text-xl font-bold text-primary group-hover:text-amber-600 transition">
                {{ sector.title }}
              </h3>

              <p class="text-xs font-semibold text-accent mt-1 mb-3">
                {{ sector.badge }}
              </p>

              <p class="text-xs text-muted leading-relaxed mb-4">
                {{ sector.shortDescription }}
              </p>

              <!-- Sample subsectors preview -->
              <div class="pt-3 border-t border-border/60">
                <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-2">
                  Key Sub-Industries:
                </span>
                <div class="flex flex-wrap gap-1.5">
                  @for (sub of sector.subsectors.slice(0, 4); track sub) {
                    <span class="text-[11px] px-2 py-0.5 rounded bg-surface text-slate-700 border border-border/50">
                      {{ sub }}
                    </span>
                  }
                  @if (sector.subsectors.length > 4) {
                    <span class="text-[11px] px-2 py-0.5 rounded bg-amber-50 text-amber-800 font-semibold">
                      +{{ sector.subsectors.length - 4 }} more
                    </span>
                  }
                </div>
              </div>
            </div>

            <div class="mt-6 pt-4 border-t border-border flex items-center justify-between">
              <span class="text-xs font-semibold text-primary group-hover:text-amber-600 transition">
                View Full Sector Deep-Dive
              </span>
              <a [routerLink]="['/sectors', sector.id]" class="w-8 h-8 rounded-full bg-slate-100 group-hover:bg-amber-500 group-hover:text-slate-950 flex items-center justify-center text-xs font-bold transition">
                →
              </a>
            </div>
          </div>
        }
      </div>
    </section>

    <!-- Consultation CTA -->
    <section class="bg-slate-900 text-white py-16 border-t border-slate-800">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <h2 class="font-display text-3xl md:text-4xl font-bold">
          Don't See Your Niche Listed?
        </h2>
        <p class="text-slate-300 max-w-xl mx-auto text-sm">
          We build custom software, AI models, and infrastructure architectures tailored to complex, specialized operational requirements in any sector.
        </p>
        <div class="pt-2">
          <a routerLink="/contact" class="inline-block px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition shadow">
            Schedule Industry Consultation
          </a>
        </div>
      </div>
    </section>
  `
})
export class SectorsListPage implements OnInit {
  private seo = inject(SeoService);

  sectors = SECTORS_DATA;
  searchTerm = signal<string>('');

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Industry Sectors & Digital Transformation Directory',
      description: 'Explore how BlindMonk’s software, AI, cloud hosting, and marketing solutions transform 17 major economic sectors from Agriculture to Manufacturing and Healthcare.',
      keywords: 'industry sectors, digital transformation, manufacturing, healthcare tech, agtech, fintech, blindmonk'
    });
  }

  onSearchInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.searchTerm.set(target.value);
  }

  filteredSectors(): SectorItem[] {
    const term = this.searchTerm().toLowerCase().trim();
    if (!term) {
      return this.sectors;
    }
    return this.sectors.filter(s =>
      s.title.toLowerCase().includes(term) ||
      s.badge.toLowerCase().includes(term) ||
      s.subsectors.some(sub => sub.toLowerCase().includes(term))
    );
  }
}
