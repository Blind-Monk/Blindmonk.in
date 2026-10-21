import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { ProductCardComponent } from '../../shared/product-card/product-card.component';
import { ServiceCardComponent } from '../../shared/service-card/service-card.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent, ProductCardComponent, ServiceCardComponent],
  templateUrl: './home.page.html'
})
export class HomePage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Deep Tech, Silicon, AI & Media Platforms',
      description: 'BlindMonk builds high-performance software products, custom hardware/silicon architectures, and cybersecurity solutions.'
    });
  }

  featuredProducts = [
    {
      icon: '🧠',
      title: 'WiseWords',
      description: 'AI proxy and content intelligence layer engineered for high-throughput language model workflows.',
      comingSoon: true,
      link: '/software/products',
      tags: ['AI Proxy', 'LLM Ops', 'Enterprise']
    },
    {
      icon: '💳',
      title: 'Minrok',
      description: 'High-availability payment proxy offering unified multi-gateway orchestration and checkout.',
      comingSoon: true,
      link: '/software/products',
      tags: ['Payments', 'FinTech', 'Proxy']
    },
    {
      icon: '🔍',
      title: 'Wisdom',
      description: 'All-in-one OSINT & threat intelligence platform for cybersecurity researchers and security ops.',
      comingSoon: true,
      link: '/software/products',
      tags: ['Cybersecurity', 'OSINT', 'Threat Intel']
    }
  ];

  servicesHighlight = [
    {
      title: 'Full-Stack & AI Engineering',
      icon: '💻',
      description: 'End-to-end development for web, mobile, and custom AI integrations.',
      services: [
        'Web App Development (Angular, React, Node)',
        'AIaaS & Custom AI Model Integrations',
        'API Architecture & Cloud Microservices'
      ]
    },
    {
      title: 'Cloud & Infrastructure',
      icon: '☁️',
      description: 'Robust deployment setups with automated scaling and zero downtime.',
      services: [
        'Cloud Hosting & Automated CI/CD Pipelines',
        'Domain, DNS & Business Email Hosting',
        'VPS & Dedicated Server Orchestration'
      ]
    },
    {
      title: 'Security & Technical Training',
      icon: '🛡️',
      description: 'Deep cybersecurity assessments and enterprise developer training.',
      services: [
        'Security Audits & Penetration Testing',
        'Cybersecurity & Ethical Hacking Workshops',
        'Developer Up-skilling in Modern Tech Stack'
      ]
    }
  ];
}
