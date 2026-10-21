import { Component, inject, OnInit } from '@angular/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="About BlindMonk"
        title="Disciplined Engineering & Deep Innovation"
        subtitle="BlindMonk.in is a deep-tech company spanning custom hardware, AI software, security platforms, and media."
      />

      <div class="mt-16 grid md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 text-muted leading-relaxed">
          <h3 class="font-display text-2xl font-bold text-primary">Our Philosophy</h3>
          <p>
            The name <span class="font-semibold text-primary">BlindMonk</span> embodies singular focus, technical discipline, and clarity of vision despite the noise of industry hype. We cut through complexity to build robust, scalable, and secure technologies.
          </p>
          <p>
            Whether designing custom silicon circuits, orchestrating multi-region cloud infrastructures, or producing technical media, we operate with relentless precision and high standards.
          </p>
        </div>

        <div class="bg-surface rounded-2xl border border-border p-8 space-y-6">
          <h4 class="font-display text-xl font-bold text-primary">Our Core Values</h4>
          <div class="space-y-4">
            <div class="flex items-start gap-3">
              <span class="text-amber-500 font-bold">01</span>
              <div>
                <strong class="text-primary block">First-Principles Engineering</strong>
                <span class="text-xs text-muted">We solve problems from foundational truths rather than copying standard industry recipes.</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-amber-500 font-bold">02</span>
              <div>
                <strong class="text-primary block">Zero-Trust Security</strong>
                <span class="text-xs text-muted">Security is integrated into every line of code, chip architecture, and deployment pipeline.</span>
              </div>
            </div>
            <div class="flex items-start gap-3">
              <span class="text-amber-500 font-bold">03</span>
              <div>
                <strong class="text-primary block">Continuous Mastery</strong>
                <span class="text-xs text-muted">Empowering our team and community through education, training, and open research.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class AboutPage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'About BlindMonk.in — Deep Tech & Innovation',
      description: 'Learn about BlindMonk mission, values, and disciplined engineering across silicon, software, and media.'
    });
  }
}
