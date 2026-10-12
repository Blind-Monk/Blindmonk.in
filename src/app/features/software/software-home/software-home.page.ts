import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-software-home-page',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="Software Division"
        title="Software Engineering & Products"
        subtitle="We build high-performance web and AI applications, payment and intelligence proxies, and offer end-to-end client engineering."
      />

      <div class="grid md:grid-cols-2 gap-8 mt-16">
        <div class="rounded-3xl border border-border bg-white p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-amber-100 text-amber-800 flex items-center justify-center text-3xl font-bold">
              💻
            </div>
            <h3 class="font-display text-2xl font-bold text-primary">Engineering Services</h3>
            <p class="text-muted text-sm leading-relaxed">
              Custom full-stack web and mobile development, cloud hosting, business email, cybersecurity training, and technical consulting.
            </p>
          </div>
          <a routerLink="/software/services" class="inline-block text-center px-6 py-3 rounded-full bg-primary text-white font-semibold hover:bg-slate-700 transition">
            Explore All Services →
          </a>
        </div>

        <div class="rounded-3xl border border-border bg-white p-8 shadow-sm hover:shadow-lg transition flex flex-col justify-between space-y-6">
          <div class="space-y-4">
            <div class="w-14 h-14 rounded-2xl bg-sky-100 text-sky-800 flex items-center justify-center text-3xl font-bold">
              🚀
            </div>
            <h3 class="font-display text-2xl font-bold text-primary">Proprietary Products</h3>
            <p class="text-muted text-sm leading-relaxed">
              WiseWords (AI Proxy & Intelligence), Minrok (Payment Gateway Proxy), and Wisdom (OSINT Threat Intelligence Platform).
            </p>
          </div>
          <a routerLink="/software/products" class="inline-block text-center px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition">
            View Product Suite →
          </a>
        </div>
      </div>
    </section>
  `
})
export class SoftwareHomePage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Software Services & Products',
      description: 'BlindMonk software engineering services, AI proxies, payment infrastructure, and threat intel platforms.'
    });
  }
}
