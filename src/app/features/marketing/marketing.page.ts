import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SeoService } from '../../core/services/seo.service';

interface AdPlatform {
  name: string;
  tagline: string;
  description: string;
  badge?: string;
}

interface IndustryCategory {
  id: string;
  title: string;
  badge: string;
  icon: string;
  bestFor: string;
  description: string;
  platforms: AdPlatform[];
  whyImportant: string;
}

interface MatrixItem {
  objective: string;
  industry: string;
  primary: string;
  secondary: string;
  metric: string;
  funnelStage: string;
}

@Component({
  selector: 'app-marketing-page',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <!-- Hero Section -->
    <section class="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-20 md:py-28">
      <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:24px_24px]"></div>

      <div class="max-w-6xl mx-auto px-6 relative z-10 text-center">
        <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/80 border border-slate-700 text-amber-400 text-xs font-semibold uppercase tracking-wider backdrop-blur mb-6">
          <span class="w-2 h-2 rounded-full bg-amber-400 animate-ping"></span>
          Full-Funnel Growth Engineering
        </div>

        <h1 class="font-display text-4xl md:text-6xl font-extrabold tracking-tight leading-tight max-w-4xl mx-auto">
          Performance Marketing & <br/>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-amber-200 to-amber-500">
            Targeted Ad Campaigns
          </span>
        </h1>

        <p class="text-slate-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto mt-6 font-normal">
          Building a world-class product is only half the battle. BlindMonk engineers, launches, and scales multi-channel paid ad campaigns across all major platforms—transforming ad spend into predictable, high-ROI revenue.
        </p>

        <!-- Value Badges -->
        <div class="flex flex-wrap justify-center gap-3 mt-8">
          <span class="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-slate-200">
            ✓ Multi-Platform Mastery (Search, Social, Native, App)
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-slate-200">
            ✓ Full Server-Side & CAPI Tracking Setup
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-slate-200">
            ✓ B2B SaaS, E-Com, Local & Mobile Verticals
          </span>
          <span class="px-3.5 py-1.5 rounded-full bg-slate-800/90 border border-slate-700 text-xs text-slate-200">
            ✓ Transparent ROAS & Daily Attribution
          </span>
        </div>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-10">
          <a routerLink="/contact" class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition shadow-lg shadow-amber-500/20">
            Book Campaign Strategy Call
          </a>
          <a href="#quick-matrix" class="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700 font-semibold hover:bg-slate-700 hover:text-white transition">
            View Platform Matrix ↓
          </a>
        </div>
      </div>
    </section>

    <!-- Essential Guide: Why Every Business Needs a Marketing Campaign -->
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="Founders & Beginners Guide"
        title="Why You Can't Afford to Ignore Paid Marketing"
        subtitle="The digital landscape has fundamentally changed. Here is why structured ad campaigns are mandatory for survival and scale in every modern industry."
      />

      <div class="grid md:grid-cols-3 gap-8 mt-14">
        <!-- Reason 1 -->
        <div class="rounded-2xl border border-border bg-white p-7 shadow-sm hover:shadow-md transition">
          <div class="w-12 h-12 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-2xl mb-4 font-bold">
            🚫
          </div>
          <h3 class="font-display text-xl font-bold text-primary mb-3">
            The "Build It & They Will Come" Myth
          </h3>
          <p class="text-muted text-sm leading-relaxed mb-4">
            Thousands of incredible apps, software platforms, and physical products shut down every year not because the product was bad, but because <strong>nobody knew it existed</strong>.
          </p>
          <p class="text-slate-600 text-xs leading-relaxed bg-surface p-3 rounded-lg border border-border/60">
            Organic algorithm reach has plummeted under 3% across major social networks. Targeted paid advertising guarantees your solution is placed directly in front of vetted prospects at the exact second they need it.
          </p>
        </div>

        <!-- Reason 2 -->
        <div class="rounded-2xl border border-border bg-white p-7 shadow-sm hover:shadow-md transition">
          <div class="w-12 h-12 rounded-xl bg-sky-100 text-sky-800 flex items-center justify-center text-2xl mb-4 font-bold">
            📈
          </div>
          <h3 class="font-display text-xl font-bold text-primary mb-3">
            Predictable Growth vs. "Hope" Marketing
          </h3>
          <p class="text-muted text-sm leading-relaxed mb-4">
            Relying solely on word-of-mouth or sporadic viral posts is gambling. A dialed-in advertising campaign turns customer acquisition into an engineered science.
          </p>
          <p class="text-slate-600 text-xs leading-relaxed bg-surface p-3 rounded-lg border border-border/60">
            When you know putting $1 into paid media reliably generates $3 to $5 back in revenue (ROAS), you possess a predictable faucet you can dial up on demand to fuel expansion, hiring, and product R&D.
          </p>
        </div>

        <!-- Reason 3 -->
        <div class="rounded-2xl border border-border bg-white p-7 shadow-sm hover:shadow-md transition">
          <div class="w-12 h-12 rounded-xl bg-emerald-100 text-emerald-800 flex items-center justify-center text-2xl mb-4 font-bold">
            ⚡
          </div>
          <h3 class="font-display text-xl font-bold text-primary mb-3">
            Rapid Validation in 72 Hours
          </h3>
          <p class="text-muted text-sm leading-relaxed mb-4">
            Instead of spending 6 months building features in the dark, paid ads allow you to test value propositions, pricing tiers, and landing pages with real buyers in days.
          </p>
          <p class="text-slate-600 text-xs leading-relaxed bg-surface p-3 rounded-lg border border-border/60">
            Even a modest $50/day test campaign delivers definitive data on click-through rates, lead acquisition costs, and customer demand before committing massive capital.
          </p>
        </div>
      </div>

      <!-- Key Metrics Explainer Banner -->
      <div class="mt-12 rounded-2xl bg-gradient-to-r from-slate-900 to-slate-800 text-white p-8 md:p-10 border border-slate-700">
        <div class="max-w-3xl mb-6">
          <span class="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-amber-400/10 border border-amber-400/20 px-3 py-1 rounded-full">
            Key Concepts De-Coded
          </span>
          <h3 class="font-display text-2xl md:text-3xl font-bold mt-3">
            The Three Numbers That Define Your Business Scale
          </h3>
          <p class="text-slate-300 text-sm mt-2">
            No jargon or confusing agency smoke-screens. Here are the core financial metrics BlindMonk tracks and optimizes for you:
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-6 pt-4">
          <div class="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80">
            <div class="text-amber-400 font-mono text-2xl font-bold mb-1">CAC</div>
            <div class="text-sm font-semibold text-white mb-2">Customer Acquisition Cost</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              The exact total cost to win a single paying customer. Our optimization protocols continually depress this cost via creative iteration and audience refining.
            </p>
          </div>

          <div class="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80">
            <div class="text-amber-400 font-mono text-2xl font-bold mb-1">ROAS</div>
            <div class="text-sm font-semibold text-white mb-2">Return on Ad Spend</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              The multiple of gross revenue returned for every dollar spent on ads. If you spend $2,000 and produce $8,000 in sales, your ROAS is 4.0x.
            </p>
          </div>

          <div class="bg-slate-800/80 p-5 rounded-xl border border-slate-700/80">
            <div class="text-amber-400 font-mono text-2xl font-bold mb-1">LTV : CAC</div>
            <div class="text-sm font-semibold text-white mb-2">Lifetime Value Ratio</div>
            <p class="text-xs text-slate-300 leading-relaxed">
              The benchmark of venture health. When a customer's lifetime value is 3x or higher than the acquisition cost, your company is primed for hyper-scale.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- BlindMonk Multi-Platform Solutions: The 6 Industry Categories -->
    <section class="bg-surface border-y border-border py-20">
      <div class="max-w-6xl mx-auto px-6">
        <app-section-title
          badge="End-to-End Capabilities"
          title="Advertising Platforms We Manage Across All Industries"
          subtitle="Different business models require tailored ad networks. We build custom campaigns tailored specifically to your audience and buying psychology."
        />

        <!-- Category Tabs -->
        <div class="flex flex-wrap justify-center gap-2 mt-10 mb-12">
          @for (cat of categories; track cat.id) {
            <button
              (click)="selectedCategory.set(cat.id)"
              [class]="selectedCategory() === cat.id
                ? 'bg-primary text-white font-semibold shadow-sm'
                : 'bg-white text-muted hover:text-primary hover:bg-slate-100 border border-border font-medium'"
              class="px-4 py-2 rounded-full text-xs md:text-sm transition flex items-center gap-1.5"
            >
              <span>{{ cat.icon }}</span>
              <span>{{ cat.title }}</span>
            </button>
          }
        </div>

        <!-- Category Details Cards -->
        <div class="space-y-12">
          @for (cat of filteredCategories(); track cat.id) {
            <div class="rounded-3xl border border-border bg-white p-8 md:p-10 shadow-sm transition">
              <!-- Header -->
              <div class="flex flex-col md:flex-row md:items-start justify-between gap-4 pb-6 border-b border-border">
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <span class="text-2xl">{{ cat.icon }}</span>
                    <span class="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-0.5 rounded-full">
                      {{ cat.badge }}
                    </span>
                  </div>
                  <h3 class="font-display text-2xl md:text-3xl font-bold text-primary">
                    {{ cat.title }}
                  </h3>
                  <p class="text-sm font-medium text-slate-700 mt-2">
                    <strong class="text-primary">Best for:</strong> {{ cat.bestFor }}
                  </p>
                </div>
                <div class="md:max-w-md text-xs text-muted leading-relaxed bg-surface p-4 rounded-xl border border-border/60">
                  <span class="font-semibold text-primary block mb-1">Why this strategy matters:</span>
                  {{ cat.whyImportant }}
                </div>
              </div>

              <!-- Platforms Grid -->
              <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
                @for (platform of cat.platforms; track platform.name) {
                  <div class="rounded-xl border border-border/80 bg-background p-5 hover:border-amber-400 transition hover:shadow-sm">
                    <div class="flex items-center justify-between mb-2">
                      <h4 class="font-display text-base font-bold text-primary">
                        {{ platform.name }}
                      </h4>
                      @if (platform.badge) {
                        <span class="text-[10px] font-semibold uppercase px-2 py-0.5 rounded bg-amber-100 text-amber-800">
                          {{ platform.badge }}
                        </span>
                      }
                    </div>
                    <p class="text-xs font-semibold text-accent mb-2">
                      {{ platform.tagline }}
                    </p>
                    <p class="text-xs text-slate-600 leading-relaxed">
                      {{ platform.description }}
                    </p>
                  </div>
                }
              </div>

              <!-- Action Bar -->
              <div class="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
                <span class="text-xs text-muted">
                  We handle audience modeling, creative variations, copy testing & weekly budget pacing for this vertical.
                </span>
                <a routerLink="/contact" class="px-6 py-2.5 rounded-full bg-primary text-white text-xs font-semibold hover:bg-slate-800 transition">
                  Launch {{ cat.title }} Campaign →
                </a>
              </div>
            </div>
          }
        </div>
      </div>
    </section>

    <!-- Quick Selection Matrix Section -->
    <section id="quick-matrix" class="max-w-6xl mx-auto px-6 py-20 scroll-mt-20">
      <app-section-title
        badge="Strategic Cheatsheet"
        title="Quick Selection Matrix"
        subtitle="A high-level blueprint matching your core business objectives to the optimal primary and secondary advertising channels."
      />

      <div class="mt-12 overflow-x-auto rounded-2xl border border-border bg-white shadow-sm">
        <table class="w-full text-left text-sm border-collapse">
          <thead>
            <tr class="bg-slate-900 text-white font-display text-xs uppercase tracking-wider">
              <th class="p-4 md:p-5">Objective / Industry</th>
              <th class="p-4 md:p-5">Primary Platform</th>
              <th class="p-4 md:p-5">Secondary Platform</th>
              <th class="p-4 md:p-5 hidden md:table-cell">Target KPI Metric</th>
              <th class="p-4 md:p-5 hidden lg:table-cell">Primary Funnel Role</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-border text-slate-700">
            @for (row of matrixData; track row.objective) {
              <tr class="hover:bg-surface transition">
                <td class="p-4 md:p-5 font-bold text-primary">
                  <div class="flex items-center gap-2">
                    <span class="text-amber-500 font-bold">✦</span>
                    <div>
                      <div>{{ row.objective }}</div>
                      <div class="text-[11px] font-normal text-muted">{{ row.industry }}</div>
                    </div>
                  </div>
                </td>
                <td class="p-4 md:p-5 font-semibold text-primary">
                  <span class="inline-block px-2.5 py-1 rounded bg-amber-100 text-amber-900 text-xs font-semibold">
                    {{ row.primary }}
                  </span>
                </td>
                <td class="p-4 md:p-5 text-slate-600 text-xs md:text-sm">
                  <span class="inline-block px-2.5 py-1 rounded bg-slate-100 text-slate-800 text-xs">
                    {{ row.secondary }}
                  </span>
                </td>
                <td class="p-4 md:p-5 text-xs font-mono text-slate-600 hidden md:table-cell">
                  {{ row.metric }}
                </td>
                <td class="p-4 md:p-5 text-xs text-muted hidden lg:table-cell">
                  {{ row.funnelStage }}
                </td>
              </tr>
            }
          </tbody>
        </table>
      </div>

      <div class="mt-6 flex flex-col sm:flex-row justify-between items-center text-xs text-muted gap-3">
        <p>💡 Tip: Most successful companies pair a High-Intent platform (like Google Search) with a Retargeting or Social engine (like Meta or LinkedIn).</p>
        <a routerLink="/contact" class="font-semibold text-accent hover:underline">
          Need custom multi-channel attribution? Let's talk →
        </a>
      </div>
    </section>

    <!-- How BlindMonk Runs Your Campaigns -->
    <section class="bg-surface border-y border-border py-20">
      <div class="max-w-6xl mx-auto px-6">
        <app-section-title
          badge="Execution Methodology"
          title="The BlindMonk Growth Engine"
          subtitle="We treat ad campaigns as precision engineering systems—grounded in rigorous data, creative testing, and relentless optimization."
        />

        <div class="grid md:grid-cols-5 gap-6 mt-14">
          <div class="rounded-2xl bg-white border border-border p-6 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-amber-100 text-primary flex items-center justify-center font-bold text-sm">
              01
            </div>
            <h4 class="font-display text-base font-bold text-primary">Deep Intelligence</h4>
            <p class="text-xs text-muted leading-relaxed">
              We audit your competitors' ad creatives, extract top-ranking keyword search volumes, and build precise ICP (Ideal Customer Profile) personas.
            </p>
          </div>

          <div class="rounded-2xl bg-white border border-border p-6 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-amber-100 text-primary flex items-center justify-center font-bold text-sm">
              02
            </div>
            <h4 class="font-display text-base font-bold text-primary">Creative Production</h4>
            <p class="text-xs text-muted leading-relaxed">
              High-converting hooks, compelling ad copy, custom motion graphics, UGC formats, and high-converting landing page layouts built to convert.
            </p>
          </div>

          <div class="rounded-2xl bg-white border border-border p-6 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-amber-100 text-primary flex items-center justify-center font-bold text-sm">
              03
            </div>
            <h4 class="font-display text-base font-bold text-primary">Tracking Architecture</h4>
            <p class="text-xs text-muted leading-relaxed">
              Full server-side tracking, Meta Conversions API (CAPI), Google Tag Manager, GA4 custom events, and privacy-compliant first-party attribution.
            </p>
          </div>

          <div class="rounded-2xl bg-white border border-border p-6 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-amber-100 text-primary flex items-center justify-center font-bold text-sm">
              04
            </div>
            <h4 class="font-display text-base font-bold text-primary">Algorithmic Scaling</h4>
            <p class="text-xs text-muted leading-relaxed">
              Aggressive A/B split testing of creative angles, audiences, and bid strategies. We cut losing ad variants quickly and scale proven winners.
            </p>
          </div>

          <div class="rounded-2xl bg-white border border-border p-6 space-y-3 shadow-sm">
            <div class="w-10 h-10 rounded-lg bg-amber-100 text-primary flex items-center justify-center font-bold text-sm">
              05
            </div>
            <h4 class="font-display text-base font-bold text-primary">Live Reporting</h4>
            <p class="text-xs text-muted leading-relaxed">
              No bloated PDF fluff. You receive live dashboards showing exact ad spend, cost per qualified lead, ROAS, and weekly strategic roadmaps.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ / Education for Beginners -->
    <section class="max-w-4xl mx-auto px-6 py-20">
      <app-section-title
        badge="Frequently Asked Questions"
        title="Common Questions From New Campaign Founders"
        subtitle="Transparent answers for teams dipping their toes into paid marketing for the first time."
      />

      <div class="space-y-4 mt-12">
        <div class="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h4 class="font-display text-base font-bold text-primary mb-2">
            How much ad budget do I need to start?
          </h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            You don't need a Fortune 500 budget. For most early-stage products and local businesses, we recommend beginning with an initial test budget of $1,000 to $3,000 per month ($30–$100/day). This provides statistical significance to identify winning angles and validate CAC before scaling.
          </p>
        </div>

        <div class="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h4 class="font-display text-base font-bold text-primary mb-2">
            How quickly do paid campaigns generate results?
          </h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            Unlike SEO which takes 6 to 12 months, paid campaigns start generating impressions, traffic, and initial conversion signals within 24 to 48 hours of launch. The first 14 days focus on algorithmic learning and creative optimization, with stabilized scaling by month 2.
          </p>
        </div>

        <div class="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h4 class="font-display text-base font-bold text-primary mb-2">
            Do you also design the landing pages and ad graphics?
          </h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            Yes. A great ad pointing to a slow or confusing landing page burns money. As a deep-tech engineering and media company, BlindMonk designs ultra-fast landing pages, compelling sales copy, and high-impact visual creative as part of our full-service campaign execution.
          </p>
        </div>

        <div class="rounded-xl border border-border bg-white p-6 shadow-sm">
          <h4 class="font-display text-base font-bold text-primary mb-2">
            Why choose BlindMonk over a traditional ad agency?
          </h4>
          <p class="text-sm text-slate-600 leading-relaxed">
            Traditional marketing agencies often lack deep technical comprehension—they can't fix your code, debug complex server-side tracking, or understand deep-tech B2B buyers. We combine software engineering precision with creative marketing firepower.
          </p>
        </div>
      </div>
    </section>

    <!-- Final Call to Action -->
    <section class="bg-slate-900 text-white py-20 border-t border-slate-800">
      <div class="max-w-4xl mx-auto px-6 text-center space-y-6">
        <span class="text-xs font-semibold uppercase tracking-wider text-amber-400 bg-slate-800 px-3 py-1 rounded-full border border-slate-700">
          Scale With BlindMonk
        </span>
        <h2 class="font-display text-3xl md:text-5xl font-extrabold tracking-tight">
          Ready to Stop Guessing and Start Scaling?
        </h2>
        <p class="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you are launching a B2B SaaS, a DTC lifestyle brand, a local service company, or a viral mobile app—let's build your custom campaign blueprint.
        </p>

        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <a routerLink="/contact" class="w-full sm:w-auto px-9 py-4 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition shadow-lg shadow-amber-500/20">
            Request Free Campaign Audit
          </a>
          <a routerLink="/software/services" class="w-full sm:w-auto px-8 py-4 rounded-full bg-slate-800 text-slate-200 border border-slate-700 font-semibold hover:bg-slate-700 transition">
            Browse All Engineering Services
          </a>
        </div>
      </div>
    </section>
  `
})
export class MarketingPage implements OnInit {
  private seo = inject(SeoService);

  selectedCategory = signal<string>('all');

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Performance Marketing & Targeted Ad Campaigns — Multi-Platform Growth',
      description: 'BlindMonk designs and executes high-converting ad campaigns across LinkedIn, Google Search/Shopping, Meta, TikTok, Apple Search Ads, Amazon, and Native networks.',
      keywords: 'paid advertising, b2b ads, linkedin ads, google shopping, meta ads, pmax, app install campaigns, native ads, blindmonk marketing'
    });
  }

  categories: IndustryCategory[] = [
    {
      id: 'b2b',
      title: 'Professional, B2B & Tech Services',
      badge: 'High-Ticket B2B & Enterprise',
      icon: '💼',
      bestFor: 'High deal values, enterprise software, SaaS, consulting, and reaching corporate decision-makers.',
      whyImportant: 'B2B sales cycles are long and consultative. Ads must target specific job titles, seniority, and capture active solution searchers before competitors do.',
      description: 'We deploy account-based marketing (ABM) and high-intent search capture to drive qualified enterprise demo requests.',
      platforms: [
        {
          name: 'LinkedIn Ads',
          tagline: 'The Primary Choice for B2B',
          description: 'Target corporate decision-makers directly by exact job title, company name, industry vertical, and seniority level.',
          badge: 'Primary B2B'
        },
        {
          name: 'Google Ads (Search & Display)',
          tagline: 'High-Intent Solution Capture',
          description: 'Captures intent when buyers actively search for business solutions (e.g., "best CRM software" or "enterprise IT support").',
          badge: 'Search Intent'
        },
        {
          name: 'Microsoft Advertising (Bing Ads)',
          tagline: 'Corporate Desktop Efficiency',
          description: 'Offers a significantly lower cost-per-click (CPC) than Google and skews heavily toward desktop-based, corporate, and professional audiences.',
          badge: 'Low CPC'
        },
        {
          name: 'Reddit Ads',
          tagline: 'Niche Tech & Developer Communities',
          description: 'Highly effective for specialized tech, software engineers, DevOps, cybersecurity, and niche professional subreddits.',
          badge: 'Dev Focused'
        },
        {
          name: 'X Ads (formerly Twitter)',
          tagline: 'Tech Executives & Web3 Ecosystems',
          description: 'Strong platform for reaching tech executives, startup founders, crypto/web3 communities, and media professionals.',
          badge: 'Founders'
        }
      ]
    },
    {
      id: 'fashion',
      title: 'Fashion, Beauty & Lifestyle Products',
      badge: 'Visual Discovery & DTC',
      icon: '✨',
      bestFor: 'Visual discovery, trend-focused items, impulse buying, and brand storytelling.',
      whyImportant: 'Visual consumers buy with their eyes and emotions. Video hooks, social proof, and mobile AR try-on experiences convert browsers into immediate buyers.',
      description: 'We orchestrate multi-format visual storytelling across Reels, TikTok trends, and Pinterest boards.',
      platforms: [
        {
          name: 'Meta Ads (Instagram & Facebook)',
          tagline: 'Visual Brand Storytelling',
          description: 'Essential for visual industries. Instagram Reels, Stories, and Shopping ads excel at driving fashion and beauty sales with deep algorithmic matching.',
          badge: 'Primary Visual'
        },
        {
          name: 'TikTok Ads',
          tagline: 'Short-Form Viral Momentum',
          description: 'The top platform for short-form video content, viral fashion trends, and reaching engaged Gen Z and Millennial shoppers.',
          badge: 'Viral Trends'
        },
        {
          name: 'Pinterest Ads',
          tagline: 'High Purchase Intent Discovery',
          description: 'Highly effective for visual product discovery, outfit ideas, interior design, and home decor. Pinterest users typically browse with active purchase intent.',
          badge: 'Inspiration'
        },
        {
          name: 'Snapchat Ads',
          tagline: 'Interactive AR & Mobile Try-On',
          description: 'Strong for reaching younger demographics with mobile-first augmented reality (AR) try-on ads for clothing, shoes, and makeup.',
          badge: 'AR Experiences'
        }
      ]
    },
    {
      id: 'ecommerce',
      title: 'E-Commerce & Retail Products',
      badge: 'High-Volume DTC & Retail',
      icon: '🛍️',
      bestFor: 'Direct-to-Consumer (DTC) physical goods and driving high-volume sales.',
      whyImportant: 'Scaling an e-commerce brand requires frictionless catalog feeds, automated dynamic retargeting, and direct placement at the digital checkout aisle.',
      description: 'We connect product feeds directly to Google Shopping, Amazon Sponsored Products, and Meta Advantage+ catalogs.',
      platforms: [
        {
          name: 'Google Ads (Shopping & Performance Max)',
          tagline: 'Top-of-Search Product Feeds',
          description: 'Places product images, live pricing, and store names directly at the top of Google search results when buyers search for specific products.',
          badge: 'Primary E-Com'
        },
        {
          name: 'Amazon Ads',
          tagline: 'Direct Point of Purchase Placement',
          description: 'Crucial if selling on Amazon. Allows sponsored product and brand placements directly at the moment shoppers are ready to hit "Buy Now".',
          badge: 'Marketplace'
        },
        {
          name: 'Meta Ads (Advantage+ Shopping)',
          tagline: 'Automated Catalog Retargeting',
          description: 'Automated dynamic product catalog ads that algorithmically show specific products to users based on their browsing history and purchase patterns.',
          badge: 'AI Automated'
        },
        {
          name: 'Retailer Ad Networks',
          tagline: 'Walmart Connect, Target Roundel, eBay',
          description: 'Placements directly on major online retail sites to reach millions of consumers while they actively shop across leading retailer ecosystems.',
          badge: 'Retail Media'
        }
      ]
    },
    {
      id: 'local',
      title: 'Local Services & Physical Businesses',
      badge: 'Foot Traffic & Qualified Leads',
      icon: '📍',
      bestFor: 'Contractors, dentists, restaurants, gyms, and home services.',
      whyImportant: 'Local customers demand immediate proximity, credibility badges, and phone calls. Geo-fenced campaigns lock down your territory from competitors.',
      description: 'We turn local searches into verified phone calls, booked appointments, and walk-in store visits.',
      platforms: [
        {
          name: 'Google Local Services Ads (LSAs)',
          tagline: 'Pay-Per-Lead With Google Guaranteed',
          description: 'A pay-per-lead model for local contractors (plumbers, electricians, lawyers) featuring the coveted "Google Guaranteed" badge.',
          badge: 'Google Guaranteed'
        },
        {
          name: 'Google Maps Ads (Local Campaigns)',
          tagline: 'Promoted Pins & Foot Traffic',
          description: 'Drives foot traffic by promoting local business pins and high-ranking local pack listings when users search for nearby services.',
          badge: 'Maps Placement'
        },
        {
          name: 'Meta Ads (Geo-Targeted)',
          tagline: 'Hyper-Local Radius Targeting',
          description: 'Uses tight radius targeting (e.g., within 3–5 miles of a physical storefront) to promote special local offers, seasonal menus, or events.',
          badge: 'Radius Targeting'
        },
        {
          name: 'Yelp Ads',
          tagline: 'High-Intent Local Reviews',
          description: 'Targets users actively reviewing and searching for local service providers ready to make an immediate booking decision.',
          badge: 'Review Intent'
        }
      ]
    },
    {
      id: 'apps',
      title: 'Mobile Apps & Mobile Gaming',
      badge: 'Install Volume & In-App Events',
      icon: '📱',
      bestFor: 'Driving app installs and high-LTV in-app user engagement.',
      whyImportant: 'Acquiring an install is only step one. We optimize campaigns for in-app registrations, subscription trials, and in-game purchase milestones.',
      description: 'We configure App Store Optimization (ASO), deep-link tracking with SKAdNetwork, and cross-channel install engines.',
      platforms: [
        {
          name: 'Apple Search Ads (ASA)',
          tagline: 'Top-of-App-Store Placement',
          description: 'Promotes iOS apps directly at the top of Apple App Store search results when users search for specific keywords and competitor app names.',
          badge: 'iOS Essential'
        },
        {
          name: 'Google App Campaigns (UAC)',
          tagline: 'Automated Multi-Network Scaling',
          description: 'Automatically scales app install campaigns across Google Search, Google Play Store, YouTube, and the entire Google Display Network.',
          badge: 'Android & iOS'
        },
        {
          name: 'Unity Ads / AppLovin / IronSource',
          tagline: 'Playable & Rewarded In-Game Ads',
          description: 'In-game ad networks that place interactive playable demo ads or rewarded video ads inside millions of popular mobile games.',
          badge: 'Mobile Gaming'
        }
      ]
    },
    {
      id: 'content',
      title: 'Content, Media & News Sites (Native Ads)',
      badge: 'Storytelling & High-Volume Discovery',
      icon: '📰',
      bestFor: 'Editorial content, affiliate marketing, storytelling, and broad brand awareness.',
      whyImportant: 'Banner blindness is real. Native ads mimic the organic look and feel of major publications, driving engaged readers to long-form advertorials.',
      description: 'We craft captivating editorial headlines, high-engagement thumbnails, and deep video explainers.',
      platforms: [
        {
          name: 'Taboola & Outbrain',
          tagline: 'Recommended Reading on Top Media',
          description: 'Places "Recommended Reading" sponsored articles seamlessly on major news and media sites like CNN, MSN, Bloomberg, and Business Insider.',
          badge: 'Native Discovery'
        },
        {
          name: 'YouTube Ads (Google Ads Ecosystem)',
          tagline: 'High-Impact Video Storytelling',
          description: 'Ideal for long-form video stories, in-depth tutorials, software demos, and thought leadership that builds massive audience trust.',
          badge: 'Video Powerhouse'
        }
      ]
    }
  ];

  matrixData: MatrixItem[] = [
    {
      objective: 'B2B / Tech / SaaS',
      industry: 'Enterprise Software, IT & Consulting',
      primary: 'LinkedIn Ads',
      secondary: 'Google Search Ads',
      metric: 'Cost Per Qualified Demo (SQL)',
      funnelStage: 'Decision Maker Capture & Retargeting'
    },
    {
      objective: 'Fashion / Beauty',
      industry: 'Apparel, Cosmetics & Lifestyle',
      primary: 'Meta Ads (Instagram)',
      secondary: 'TikTok Ads',
      metric: 'Blended ROAS & Cost Per Purchase',
      funnelStage: 'Visual Discovery & Impulse Buying'
    },
    {
      objective: 'E-Commerce Products',
      industry: 'Direct-to-Consumer Physical Goods',
      primary: 'Google Shopping / PMax',
      secondary: 'Meta / Amazon Ads',
      metric: 'ROAS & Dynamic Cart Recovery',
      funnelStage: 'Intent-Based Purchase & Catalog Remarketing'
    },
    {
      objective: 'Local Services',
      industry: 'Contractors, Clinics, Restaurants & Gyms',
      primary: 'Google Local Services Ads',
      secondary: 'Meta Geo-Targeting',
      metric: 'Cost Per Verified Call / Lead',
      funnelStage: 'Immediate Local Problem Resolution'
    },
    {
      objective: 'Mobile Apps & Games',
      industry: 'iOS & Android Applications',
      primary: 'Apple Search Ads',
      secondary: 'Google App Campaigns',
      metric: 'Cost Per Install (CPI) & Trial Start',
      funnelStage: 'Direct Download & In-App Action'
    },
    {
      objective: 'Media, News & Affiliates',
      industry: 'Publishers, Long-Form Content & Courses',
      primary: 'Taboola & Outbrain',
      secondary: 'YouTube Ads',
      metric: 'Cost Per Click (CPC) & Engaged Read',
      funnelStage: 'Top-of-Funnel Editorial Storytelling'
    }
  ];

  filteredCategories(): IndustryCategory[] {
    const sel = this.selectedCategory();
    if (sel === 'all') {
      return this.categories;
    }
    return this.categories.filter(c => c.id === sel);
  }
}
