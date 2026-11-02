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
      title: 'AI Development & Automation | Web & Security',
      description: 'BlindMonk helps businesses build AI applications, automate workflows, develop web and mobile software, and improve security with authorized assessments and training.',
      keywords: 'AI development company, hire AI developer, web development company, full-stack developer, freelance developer, security automation, penetration testing, ethical hacking, cloud hosting, SaaS development, Angular developer, React developer, Node.js developer, mobile app development, custom software development, AI automation, machine learning, LLM integration, cybersecurity services, OSINT, threat intelligence, BlindMonk',
      canonicalUrl: '/',
      ogType: 'website'
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
    },
    {
      title: 'Performance Marketing & Ads',
      icon: '🎯',
      description: 'Data-driven paid advertising across B2B, DTC, mobile apps, and local verticals.',
      services: [
        'B2B SaaS Growth (LinkedIn, Google, Reddit, X)',
        'E-Com & DTC Scaling (Meta, Google Shopping, Amazon)',
        'Local Lead Gen & App Installs (LSAs, Apple Search Ads)'
      ]
    }
  ];
}
