import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { SeoService } from '../../../core/services/seo.service';
import { SECTORS_DATA } from '../../../core/data/sectors-data';
import { SectorItem } from '../../../core/models/sector.model';

@Component({
  selector: 'app-sector-detail-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (sector()) {
      <!-- Breadcrumb & Back -->
      <div class="bg-slate-900 border-b border-slate-800 text-slate-300 py-4">
        <div class="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2">
            <a routerLink="/sectors" class="hover:text-amber-400 transition flex items-center gap-1">
              ← All Industry Sectors
            </a>
            <span class="text-slate-600">/</span>
            <span class="text-slate-200 truncate max-w-sm">{{ sector()!.title }}</span>
          </div>
          <a routerLink="/software/services" class="text-amber-400 hover:underline">
            View All Services
          </a>
        </div>
      </div>

      <!-- Hero Section -->
      <section class="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span class="text-base">{{ sector()!.icon }}</span>
            <span>{{ sector()!.badge }}</span>
          </div>

          <h1 class="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {{ sector()!.title }}
          </h1>

          <p class="text-slate-300 text-lg md:text-xl leading-relaxed mt-6 font-normal">
            {{ sector()!.overview }}
          </p>

          <!-- Impact Metrics Ribbon -->
          <div class="grid sm:grid-cols-3 gap-4 pt-8">
            @for (item of sector()!.impactHighlights; track item.label) {
              <div class="bg-slate-800/80 border border-slate-700 p-4 rounded-2xl">
                <div class="text-amber-400 font-display text-2xl md:text-3xl font-extrabold">
                  {{ item.stat }}
                </div>
                <div class="text-slate-300 text-xs mt-1 leading-snug">
                  {{ item.label }}
                </div>
              </div>
            }
          </div>
        </div>
      </section>

      <!-- Main Content -->
      <div class="max-w-5xl mx-auto px-6 py-16 space-y-16">

        <!-- Complete Subsectors Breakdown -->
        <section class="bg-white rounded-3xl border border-border p-8 md:p-10 shadow-sm">
          <div class="flex items-center justify-between mb-6 pb-4 border-b border-border">
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-0.5 rounded-full">
                Coverage Taxonomy
              </span>
              <h2 class="font-display text-2xl font-bold text-primary mt-2">
                Sub-Industries & Verticals We Support
              </h2>
            </div>
            <span class="text-xs font-mono font-semibold text-slate-500 bg-surface px-3 py-1 rounded-full">
              {{ sector()!.subsectors.length }} Verticals
            </span>
          </div>

          <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            @for (sub of sector()!.subsectors; track sub) {
              <div class="p-3 rounded-xl bg-surface border border-border/60 text-xs font-medium text-slate-800 flex items-start gap-2 hover:border-amber-400 transition">
                <span class="text-amber-500 font-bold mt-0.5">✦</span>
                <span>{{ sub }}</span>
              </div>
            }
          </div>
        </section>

        <!-- Challenges vs Transformation Opportunities -->
        <section class="grid md:grid-cols-2 gap-8">
          <!-- Key Challenges -->
          <div class="rounded-3xl border border-red-200 bg-red-50/30 p-8 shadow-sm">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-100 text-red-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>⚠️</span> Core Industry Bottlenecks
            </div>
            <h3 class="font-display text-xl font-bold text-primary mb-4">
              What Slows Down {{ sector()!.title }}
            </h3>
            <ul class="space-y-3.5 text-xs md:text-sm text-slate-700">
              @for (challenge of sector()!.keyChallenges; track challenge) {
                <li class="flex items-start gap-2.5">
                  <span class="text-red-500 font-bold mt-0.5">✕</span>
                  <span class="leading-relaxed">{{ challenge }}</span>
                </li>
              }
            </ul>
          </div>

          <!-- Transformation Opportunities -->
          <div class="rounded-3xl border border-emerald-200 bg-emerald-50/30 p-8 shadow-sm">
            <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 text-emerald-800 text-xs font-semibold uppercase tracking-wider mb-4">
              <span>🚀</span> High-ROI Solutions
            </div>
            <h3 class="font-display text-xl font-bold text-primary mb-4">
              Digital Transformation Levers
            </h3>
            <ul class="space-y-3.5 text-xs md:text-sm text-slate-700">
              @for (opp of sector()!.transformationOpportunities; track opp) {
                <li class="flex items-start gap-2.5">
                  <span class="text-emerald-600 font-bold mt-0.5">✔</span>
                  <span class="leading-relaxed">{{ opp }}</span>
                </li>
              }
            </ul>
          </div>
        </section>

        <!-- Applied BlindMonk Services for this Sector -->
        <section class="bg-surface rounded-3xl border border-border p-8 md:p-10">
          <div class="mb-8">
            <span class="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
              Tactical Execution
            </span>
            <h2 class="font-display text-2xl md:text-3xl font-bold text-primary mt-3">
              How BlindMonk Services Solve These Challenges
            </h2>
            <p class="text-sm text-muted mt-2">
              Explore the exact engineering disciplines we deploy to modernize operations in {{ sector()!.title }}.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            @for (applied of sector()!.appliedServices; track applied.serviceId) {
              <div class="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-400 transition flex flex-col justify-between">
                <div>
                  <div class="text-2xl mb-3">{{ applied.icon }}</div>
                  <h3 class="font-display text-base font-bold text-primary mb-2">
                    {{ applied.serviceName }}
                  </h3>
                  <p class="text-xs text-slate-600 leading-relaxed mb-4">
                    {{ applied.howItHelps }}
                  </p>
                  <div class="pt-3 border-t border-border/60">
                    <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-400 block mb-1">
                      Production Deployment:
                    </span>
                    <span class="text-xs font-medium text-slate-800">
                      {{ applied.concreteUseCase }}
                    </span>
                  </div>
                </div>

                <div class="mt-5 pt-4 border-t border-border">
                  <a [routerLink]="['/software/services', applied.serviceId]" class="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1">
                    Read {{ applied.serviceName }} Article →
                  </a>
                </div>
              </div>
            }
          </div>
        </section>

        <!-- Navigation Between Sectors -->
        <div class="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold">
          <a routerLink="/sectors" class="text-slate-600 hover:text-primary transition flex items-center gap-1">
            ← Browse All 17 Sectors
          </a>
          <a routerLink="/software/services" class="text-amber-600 hover:text-amber-700 transition flex items-center gap-1">
            Explore All BlindMonk Services →
          </a>
        </div>

      </div>

      <!-- Bottom Sector CTA -->
      <section class="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 class="font-display text-2xl md:text-4xl font-extrabold">
            Modernize Your {{ sector()!.title }} Operations
          </h2>
          <p class="text-slate-300 max-w-xl mx-auto text-sm leading-relaxed">
            Collaborate with BlindMonk’s deep tech engineers and architects to design custom software, AI workflows, or cloud infrastructure tailored to your exact industry vertical.
          </p>
          <div class="pt-2">
            <a routerLink="/contact" class="px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition shadow-lg">
              Book Sector Strategy Call
            </a>
          </div>
        </div>
      </section>
    } @else {
      <!-- Fallback -->
      <div class="max-w-2xl mx-auto px-6 py-28 text-center space-y-6">
        <div class="text-5xl">🔍</div>
        <h2 class="font-display text-3xl font-bold text-primary">Sector Not Found</h2>
        <p class="text-muted text-sm">The requested industry sector could not be located.</p>
        <a routerLink="/sectors" class="inline-block px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-xs hover:bg-slate-700 transition">
          Return to All Sectors
        </a>
      </div>
    }
  `
})
export class SectorDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  slug = signal<string>('');

  sector = computed<SectorItem | undefined>(() => {
    const s = this.slug();
    return SECTORS_DATA.find(item => item.id === s);
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const s = params.get('slug') || '';
      this.slug.set(s);
      const sec = SECTORS_DATA.find(item => item.id === s);
      if (sec) {
        this.seo.updateMetaTags({
          title: sec.title,
          description: sec.shortDescription,
          keywords: `${sec.title}, ${sec.subsectors.slice(0, 5).join(', ')}, industry tech, blindmonk software`
        });
      }
    });
  }
}
