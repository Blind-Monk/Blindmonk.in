import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-media-page',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="Media & Content Studios"
        title="BlindMonk Media & Becoming Wolf"
        subtitle="Exploring the frontier of technology, self-mastery, leadership, and high-performance engineering."
      />

      <div class="mt-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-700">
        <div class="grid md:grid-cols-12 gap-8 items-center">
          <div class="md:col-span-8 space-y-4">
            <span class="px-3 py-1 rounded-full text-xs font-semibold bg-amber-500 text-slate-950 uppercase">Flagship Series</span>
            <h3 class="font-display text-3xl font-bold text-white">Becoming Wolf</h3>
            <p class="text-slate-300 leading-relaxed">
              "Becoming Wolf" is our media platform dedicated to unpacking deep technical mastery, resilient mindset, cybersecurity, and the journey of building transformative tech companies.
            </p>
            <div class="pt-2 flex flex-wrap gap-4">
              <a href="https://youtube.com" target="_blank" rel="noopener" class="px-5 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition text-sm">
                Watch on YouTube
              </a>
              <a routerLink="/contact" class="px-5 py-2.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition text-sm font-semibold">
                Sponsor or Collaborate
              </a>
            </div>
          </div>
          <div class="md:col-span-4 flex justify-center">
            <div class="w-40 h-40 rounded-full bg-amber-500/10 border-2 border-amber-500/30 flex items-center justify-center text-5xl">
              🐺
            </div>
          </div>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8 mt-16">
        <div class="rounded-2xl border border-border bg-white p-6 space-y-3">
          <div class="text-3xl">🎙️</div>
          <h4 class="font-display text-xl font-semibold text-primary">Technical Podcasts</h4>
          <p class="text-sm text-muted">In-depth interviews with systems architects, silicon engineers, and AI researchers.</p>
        </div>
        <div class="rounded-2xl border border-border bg-white p-6 space-y-3">
          <div class="text-3xl">📰</div>
          <h4 class="font-display text-xl font-semibold text-primary">BlindMonk Research Papers</h4>
          <p class="text-sm text-muted">Technical whitepapers and articles covering Angular, AI proxy models, and cybersecurity.</p>
        </div>
        <div class="rounded-2xl border border-border bg-white p-6 space-y-3">
          <div class="text-3xl">🎥</div>
          <h4 class="font-display text-xl font-semibold text-primary">Documentary Shorts</h4>
          <p class="text-sm text-muted">Behind the scenes on how we build software products, design hardware, and train developers.</p>
        </div>
      </div>
    </section>
  `
})
export class MediaPage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'BlindMonk Media & Becoming Wolf',
      description: 'Original media, podcasts, whitepapers, and the Becoming Wolf series by BlindMonk.'
    });
  }
}
