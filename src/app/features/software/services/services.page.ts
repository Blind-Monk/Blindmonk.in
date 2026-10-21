import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { SeoService } from '../../../core/services/seo.service';

interface ServiceGroup {
  title: string;
  icon: string;
  services: string[];
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="BlindMonk Services"
        title="Services We Provide"
        subtitle="From development to hosting to cybersecurity training — everything you need to build and scale."
      />

      <div class="grid md:grid-cols-2 gap-8 mt-16">
        @for (group of serviceGroups; track group.title) {
          <div class="rounded-2xl border border-border bg-surface p-8 hover:border-amber-400/50 transition">
            <div class="text-3xl mb-4">{{ group.icon }}</div>
            <h3 class="font-display text-xl font-semibold text-primary mb-4">{{ group.title }}</h3>
            <ul class="space-y-3">
              @for (service of group.services; track service) {
                <li class="flex items-start gap-3 text-slate-700">
                  <span class="text-amber-500 font-bold mt-1">✦</span>
                  <span>{{ service }}</span>
                </li>
              }
            </ul>
          </div>
        }
      </div>

      <div class="mt-16 text-center bg-slate-900 text-white rounded-2xl p-10">
        <h3 class="font-display text-2xl font-bold mb-3">Need Custom Engineering or Consultancy?</h3>
        <p class="text-slate-300 max-w-xl mx-auto mb-6 text-sm">
          Speak directly with our engineering team to discuss your project requirements, scope, and timeline.
        </p>
        <a routerLink="/contact" class="inline-block px-8 py-3.5 rounded-full bg-amber-500 text-slate-950 font-bold hover:bg-amber-400 transition">
          Schedule Consultation
        </a>
        <p class="mt-6 text-sm text-slate-300">
          Interested in joining our team full-time or as a freelancer?
          <a routerLink="/contact" class="font-semibold text-amber-300 underline underline-offset-4 hover:text-white">Let us know.</a>
        </p>
      </div>
    </section>
  `
})
export class ServicesPage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Services — Development, Infrastructure, Security & Training',
      description: 'BlindMonk web/mobile app development, custom AI, cloud hosting, cybersecurity training, and technical consulting.'
    });
  }

  serviceGroups: ServiceGroup[] = [
    {
      title: 'Development',
      icon: '💻',
      services: [
        'Web App Development (Angular, React, Node)',
        'Mobile App Development',
        'API & Backend Engineering',
        'Full-stack SaaS Development',
        'AIaaS (AI as a Service)',
        'Custom AI Integrations',
      ],
    },
    {
      title: 'Infrastructure',
      icon: '☁️',
      services: [
        'Cloud Hosting & Deployment',
        'Domain & DNS Management',
        'Business Email Hosting',
        'VPS / Dedicated Servers',
        'CI/CD Setup',
      ],
    },
    {
      title: 'Security & Training',
      icon: '🛡️',
      services: [
        'Teaching New Tech (Angular, AI, DevOps)',
        'Cybersecurity Training',
        'Ethical Hacking Workshops',
        'Security Audits & Penetration Testing',
      ],
    },
    {
      title: 'Consulting',
      icon: '📊',
      services: [
        'Architecture Reviews',
        'Product Strategy',
        'Technical Due Diligence',
      ],
    },
  ];
}
