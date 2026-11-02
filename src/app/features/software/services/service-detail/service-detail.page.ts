import { Component, computed, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { SeoService } from '../../../../core/services/seo.service';
import { SERVICES_ARTICLES } from '../../../../core/data/services-data';
import { ServiceArticle } from '../../../../core/models/service.model';
import { SECTORS_DATA } from '../../../../core/data/sectors-data';

@Component({
  selector: 'app-service-detail-page',
  standalone: true,
  imports: [RouterLink],
  template: `
    @if (article()) {
      <!-- Breadcrumb & Back -->
      <div class="bg-slate-900 border-b border-slate-800 text-slate-300 py-4">
        <div class="max-w-6xl mx-auto px-6 flex items-center justify-between text-xs">
          <div class="flex items-center gap-2">
            <a routerLink="/software/services" class="hover:text-amber-400 transition flex items-center gap-1">
              ← Back to All Services
            </a>
            <span class="text-slate-600">/</span>
            <span class="text-amber-400 font-medium">{{ article()!.category }}</span>
            <span class="text-slate-600">/</span>
            <span class="text-slate-200 truncate max-w-xs">{{ article()!.title }}</span>
          </div>
          <span class="text-slate-400 font-mono hidden sm:inline-block">
            ⏱ {{ article()!.readingTime }}
          </span>
        </div>
      </div>

      <!-- Hero Section -->
      <section class="relative bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-16 md:py-24 overflow-hidden">
        <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

        <div class="max-w-4xl mx-auto px-6 relative z-10">
          <div class="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-800 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider mb-6">
            <span class="text-base">{{ article()!.icon }}</span>
            <span>{{ article()!.badge }}</span>
            <span class="text-slate-500">•</span>
            <span class="text-slate-300 lowercase font-normal">{{ article()!.category }}</span>
          </div>

          <h1 class="font-display text-3xl md:text-5xl font-extrabold tracking-tight leading-tight">
            {{ article()!.title }}
          </h1>

          <p class="text-slate-300 text-lg md:text-xl leading-relaxed mt-6 font-normal">
            {{ article()!.tagline }}
          </p>

          <div class="flex flex-wrap gap-2 pt-6">
            @for (tech of article()!.techStackOrMethodology; track tech) {
              <span class="px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs text-slate-300 font-mono">
                {{ tech }}
              </span>
            }
          </div>
        </div>
      </section>

      <!-- Main Article Content -->
      <article class="max-w-4xl mx-auto px-6 py-16">
        
        <!-- Key Takeaways Card -->
        <div class="rounded-2xl bg-amber-500/10 border border-amber-500/30 p-6 md:p-8 mb-14">
          <h2 class="font-display text-lg font-bold text-primary flex items-center gap-2 mb-4">
            <span class="text-amber-500">✦</span> Executive Summary & Core Deliverables
          </h2>
          <ul class="grid md:grid-cols-2 gap-3 text-sm text-slate-800">
            @for (item of article()!.keyTakeaways; track item) {
              <li class="flex items-start gap-2.5">
                <span class="text-amber-600 font-bold mt-0.5">✔</span>
                <span>{{ item }}</span>
              </li>
            }
          </ul>
        </div>

        <!-- Section 1: Why Every Company Needs It -->
        <section class="mb-14">
          <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
            01. Market Imperative
          </div>
          <h2 class="font-display text-2xl md:text-3xl font-bold text-primary mb-5">
            Why Every Company Needs This
          </h2>
          <div class="text-slate-700 text-base md:text-lg leading-relaxed space-y-4">
            <p>{{ article()!.whyNeeded }}</p>
          </div>
        </section>

        <!-- Section 2: How It Can Be Improved -->
        <section class="mb-14 bg-surface rounded-3xl p-8 md:p-10 border border-border">
          <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-100 text-amber-800 mb-3">
            02. Modern Architecture
          </div>
          <h2 class="font-display text-2xl md:text-3xl font-bold text-primary mb-5">
            How It Can Be Improved
          </h2>
          <div class="text-slate-700 text-base md:text-lg leading-relaxed space-y-4">
            <p>{{ article()!.howImproved }}</p>
          </div>
        </section>

        <!-- Section 3: Importance & Business Impact -->
        <section class="mb-14">
          <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-slate-100 text-slate-700 mb-3">
            03. The Financial Equation
          </div>
          <h2 class="font-display text-2xl md:text-3xl font-bold text-primary mb-5">
            Importance & Strategic ROI
          </h2>
          <div class="text-slate-700 text-base md:text-lg leading-relaxed space-y-4">
            <p>{{ article()!.importance }}</p>
          </div>
        </section>

        <!-- Section 4: Why BlindMonk.in -->
        <section class="mb-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white rounded-3xl p-8 md:p-10 border border-slate-700">
          <div class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30 mb-3">
            04. The BlindMonk Advantage
          </div>
          <h2 class="font-display text-2xl md:text-3xl font-bold mb-4">
            Why BlindMonk.in
          </h2>
          <p class="text-slate-300 text-base md:text-lg leading-relaxed">
            {{ article()!.whyBlindmonk }}
          </p>
          <div class="mt-8 pt-6 border-t border-slate-700 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span class="text-xs text-slate-400">Ready to discuss how this applies to your team?</span>
            <a routerLink="/contact" class="px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition shadow">
              Schedule Architecture Consultation →
            </a>
          </div>
        </section>

        <!-- Section 5: How It Affects Different Sectors -->
        <section class="mb-16 pt-8 border-t border-border">
          <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-1 rounded-full">
                Industry Applications
              </span>
              <h2 class="font-display text-2xl md:text-3xl font-bold text-primary mt-3">
                How This Transforms Different Sectors
              </h2>
            </div>
            <a routerLink="/sectors" class="text-xs font-semibold text-accent hover:underline flex items-center gap-1">
              Browse All 17 Industry Sectors →
            </a>
          </div>

          <div class="grid md:grid-cols-2 gap-6">
            @for (sector of article()!.sectorImpacts; track sector.sectorId) {
              <div class="rounded-2xl border border-border bg-white p-6 shadow-sm hover:shadow-md hover:border-amber-400/60 transition flex flex-col justify-between">
                <div>
                  <div class="flex items-center gap-2.5 mb-3">
                    <span class="text-2xl">{{ sector.icon }}</span>
                    <h3 class="font-display text-lg font-bold text-primary">
                      {{ sector.sectorTitle }}
                    </h3>
                  </div>
                  <p class="text-sm text-slate-600 leading-relaxed mb-4">
                    {{ sector.impactSummary }}
                  </p>
                  <div class="space-y-1.5 pt-2 border-t border-border/60">
                    <span class="text-[11px] font-semibold uppercase tracking-wider text-slate-400 block">
                      Concrete Deployments:
                    </span>
                    @for (ex of sector.exampleUseCases; track ex) {
                      <div class="flex items-center gap-2 text-xs text-slate-700">
                        <span class="text-amber-500 font-bold">✦</span>
                        <span>{{ ex }}</span>
                      </div>
                    }
                  </div>
                </div>
                <div class="mt-5 pt-4 border-t border-border">
                  <a [routerLink]="['/sectors', sector.sectorId]" class="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1">
                    Explore {{ sector.sectorTitle }} Sector Page →
                  </a>
                </div>
              </div>
            }
          </div>
        </section>

        <!-- FAQs -->
        @if (article()!.faqs && article()!.faqs.length > 0) {
          <section class="mb-16">
            <h2 class="font-display text-2xl font-bold text-primary mb-6">
              Frequently Asked Questions
            </h2>
            <div class="space-y-4">
              @for (faq of article()!.faqs; track faq.question) {
                <div class="rounded-xl border border-border bg-surface p-6">
                  <h3 class="font-display text-base font-bold text-primary mb-2">
                    {{ faq.question }}
                  </h3>
                  <p class="text-sm text-slate-600 leading-relaxed">
                    {{ faq.answer }}
                  </p>
                </div>
              }
            </div>
          </section>
        }

        <!-- Next / Previous Services Navigation -->
        <div class="pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-sm font-semibold">
          <a routerLink="/software/services" class="text-slate-600 hover:text-primary transition flex items-center gap-1">
            ← All Services
          </a>
          <a routerLink="/sectors" class="text-amber-600 hover:text-amber-700 transition flex items-center gap-1">
            Explore Sector Breakdown Guide →
          </a>
        </div>

      </article>

      <!-- Bottom Consultation Banner -->
      <section class="bg-slate-900 text-white py-16 border-t border-slate-800">
        <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
          <h2 class="font-display text-2xl md:text-4xl font-extrabold">
            Ready to Deploy {{ article()!.title }}?
          </h2>
          <p class="text-slate-300 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
            Speak directly with our senior engineering architects to map your technical requirements, architecture constraints, and project roadmap.
          </p>
          <div class="pt-2">
            <a routerLink="/contact" class="px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition shadow-lg">
              Start Project Conversation
            </a>
          </div>
        </div>
      </section>
    } @else {
      <!-- Fallback if not found -->
      <div class="max-w-2xl mx-auto px-6 py-28 text-center space-y-6">
        <div class="text-5xl">🔍</div>
        <h2 class="font-display text-3xl font-bold text-primary">Service Article Not Found</h2>
        <p class="text-muted text-sm">The requested service article could not be located.</p>
        <a routerLink="/software/services" class="inline-block px-6 py-2.5 rounded-full bg-primary text-white font-semibold text-xs hover:bg-slate-700 transition">
          Return to All Services
        </a>
      </div>
    }
  `
})
export class ServiceDetailPage implements OnInit {
  private route = inject(ActivatedRoute);
  private seo = inject(SeoService);

  slug = signal<string>('');

  article = computed<ServiceArticle | undefined>(() => {
    const s = this.slug();
    return SERVICES_ARTICLES[s];
  });

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      const s = params.get('slug') || '';
      this.slug.set(s);
      const art = SERVICES_ARTICLES[s];
      if (art) {
        this.seo.updateMetaTags({
          title: art.title,
          description: art.metaDescription,
          keywords: `${art.title}, ${art.category}, blindmonk engineering, enterprise software`
        });
      }
    });
  }
}
