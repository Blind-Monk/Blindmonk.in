import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { SeoService } from '../../../core/services/seo.service';

interface ServiceLinkItem {
  name: string;
  slug: string;
}

interface ServiceGroup {
  title: string;
  icon: string;
  services: ServiceLinkItem[];
  link?: string;
  linkText?: string;
}

interface VideoAdItem {
  id: string;
  title: string;
  badge: string;
  category: string;
  videoSrc: string;
  posterSrc: string;
  description: string;
  duration?: string;
}

interface CreativeItem {
  title: string;
  category: string;
  imageSrc: string;
  aspectRatio: string;
  description: string;
}

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        headingLevel="h1"
        badge="BlindMonk Services"
        title="Services We Provide"
        subtitle="Click any service below to explore our in-depth architectural breakdown, market imperatives, and sector-by-sector impacts."
      />

      <!-- Services Grid -->
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
        @for (group of serviceGroups; track group.title) {
          <div class="rounded-2xl border border-border bg-surface p-8 hover:border-amber-400/50 transition flex flex-col justify-between">
            <div>
              <div class="text-3xl mb-4">{{ group.icon }}</div>
              <h3 class="font-display text-xl font-semibold text-primary mb-4">{{ group.title }}</h3>
              <ul class="space-y-2">
                @for (service of group.services; track service.slug) {
                  <li class="group/item">
                    <a
                      [routerLink]="['/software/services', service.slug]"
                      class="flex items-center justify-between gap-2 p-1.5 -mx-1.5 rounded-lg hover:bg-white text-slate-700 hover:text-amber-600 transition text-sm font-medium"
                    >
                      <span class="flex items-start gap-2.5">
                        <span class="text-amber-500 font-bold mt-0.5 group-hover/item:translate-x-0.5 transition-transform">✦</span>
                        <span>{{ service.name }}</span>
                      </span>
                      <span class="text-[11px] font-semibold text-amber-600 opacity-0 group-hover/item:opacity-100 transition whitespace-nowrap">
                        Read →
                      </span>
                    </a>
                  </li>
                }
              </ul>
            </div>
            @if (group.link) {
              <div class="mt-6 pt-4 border-t border-border">
                <a [routerLink]="group.link" class="text-xs font-semibold text-amber-600 hover:text-amber-700 flex items-center gap-1">
                  {{ group.linkText || 'Learn More' }} →
                </a>
              </div>
            }
          </div>
        }
      </div>

      <!-- Industry Sectors Bridge Banner -->
      <div class="mt-14 rounded-3xl bg-white border border-border p-8 md:p-10 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
        <div class="space-y-2 max-w-2xl">
          <div class="flex items-center gap-2">
            <span class="text-xs font-semibold uppercase tracking-wider text-amber-700 bg-amber-100 px-3 py-0.5 rounded-full">
              Industry Blueprints
            </span>
            <span class="text-xs text-muted font-medium">17 Major Sectors Covered</span>
          </div>
          <h3 class="font-display text-2xl font-bold text-primary">
            Explore How We Modernize Your Industry
          </h3>
          <p class="text-slate-600 text-sm leading-relaxed">
            From precision agriculture and industrial manufacturing to HIPAA-compliant healthcare and high-concurrency finance, discover sector-specific digital transformation roadmaps.
          </p>
        </div>
        <a routerLink="/sectors" class="px-7 py-3.5 rounded-full bg-primary text-white text-sm font-semibold hover:bg-slate-800 transition whitespace-nowrap shadow-sm">
          Browse All 17 Sectors →
        </a>
      </div>

      <!-- Video Ad & Campaign Showcase Section -->
      <div id="ad-showcase" class="mt-24 pt-16 border-t border-border scroll-mt-20">
        <app-section-title
          badge="Live Campaign Showcase"
          title="Official BlindMonk Service Video Ads"
          subtitle="Watch our official multi-format video ads and visual campaigns engineered to communicate our deep-tech, AI, and software capabilities."
        />

        <!-- Primary Featured Video Ad Player -->
        <div class="mt-12 rounded-3xl bg-slate-950 text-white border border-slate-800 overflow-hidden shadow-2xl">
          <div class="grid lg:grid-cols-12 gap-0 items-center">
            
            <!-- Video Player Window -->
            <div class="lg:col-span-7 bg-black relative flex items-center justify-center">
              <video
                #mainVideoPlayer
                [src]="activeVideo().videoSrc"
                [poster]="activeVideo().posterSrc"
                controls
                playsinline
                preload="metadata"
                class="w-full max-h-[500px] object-contain bg-black shadow-inner"
              >
                Your browser does not support the video tag.
              </video>
            </div>

            <!-- Video Info & Meta -->
            <div class="lg:col-span-5 p-8 md:p-10 space-y-6">
              <div class="flex items-center gap-2">
                <span class="w-2.5 h-2.5 rounded-full bg-amber-400 animate-pulse"></span>
                <span class="text-xs uppercase tracking-wider font-semibold text-amber-400">
                  {{ activeVideo().badge }}
                </span>
                <span class="text-xs px-2 py-0.5 rounded bg-slate-800 text-slate-300 font-mono">
                  {{ activeVideo().category }}
                </span>
              </div>

              <div>
                <h3 class="font-display text-2xl md:text-3xl font-extrabold text-white leading-tight">
                  {{ activeVideo().title }}
                </h3>
                <p class="text-slate-300 text-sm leading-relaxed mt-3 font-normal">
                  {{ activeVideo().description }}
                </p>
              </div>

              <!-- Quick Specs -->
              <div class="grid grid-cols-2 gap-3 text-xs bg-slate-900/90 p-4 rounded-xl border border-slate-800">
                <div>
                  <span class="text-slate-400 block">Production:</span>
                  <span class="font-semibold text-slate-200">BlindMonk Media Studio</span>
                </div>
                <div>
                  <span class="text-slate-400 block">Audio & Motion:</span>
                  <span class="font-semibold text-slate-200">Shotcut & Master Timeline</span>
                </div>
                <div>
                  <span class="text-slate-400 block">Format:</span>
                  <span class="font-semibold text-slate-200">1080p High-Bitrate MP4</span>
                </div>
                <div>
                  <span class="text-slate-400 block">Use Case:</span>
                  <span class="font-semibold text-slate-200">Top-of-Funnel Brand Ad</span>
                </div>
              </div>

              <div class="pt-2 flex flex-wrap gap-3">
                <a routerLink="/contact" class="px-6 py-2.5 rounded-full bg-amber-500 text-slate-950 font-bold text-xs hover:bg-amber-400 transition shadow">
                  Discuss a Project With Us
                </a>
                <a routerLink="/marketing" class="px-6 py-2.5 rounded-full bg-slate-800 text-slate-200 border border-slate-700 text-xs font-semibold hover:bg-slate-700 transition">
                  Explore Ad Strategy Guide
                </a>
              </div>
            </div>

          </div>
        </div>

        <!-- Video Campaign Playlist / Scene Cuts -->
        <div class="mt-10">
          <div class="flex items-center justify-between mb-6">
            <h4 class="font-display text-xl font-bold text-primary">
              Campaign Cuts & Scene Variations
            </h4>
            <span class="text-xs text-muted">Click any cut to load in the main player</span>
          </div>

          <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            @for (item of videoAds; track item.id) {
              <div
                (click)="selectVideo(item)"
                [class]="activeVideo().id === item.id
                  ? 'ring-2 ring-amber-400 border-amber-400 bg-white'
                  : 'border-border bg-white hover:border-amber-300'"
                class="rounded-2xl border p-4 shadow-sm hover:shadow-md transition cursor-pointer flex flex-col justify-between group"
              >
                <!-- Thumbnail with Play Icon -->
                <div class="relative rounded-xl overflow-hidden bg-slate-900 aspect-video mb-4 flex items-center justify-center">
                  <img
                    [src]="item.posterSrc"
                    [alt]="item.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-80"
                  />
                  <div class="absolute inset-0 bg-slate-950/40 flex items-center justify-center">
                    <div class="w-10 h-10 rounded-full bg-amber-500/90 text-slate-950 flex items-center justify-center font-bold text-lg group-hover:scale-110 transition shadow">
                      ▶
                    </div>
                  </div>
                  <span class="absolute bottom-2 right-2 px-2 py-0.5 rounded bg-black/80 text-[10px] text-white font-mono">
                    {{ item.badge }}
                  </span>
                </div>

                <div>
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-amber-600 bg-amber-100 px-2 py-0.5 rounded">
                    {{ item.category }}
                  </span>
                  <h5 class="font-display text-sm font-bold text-primary mt-2 group-hover:text-amber-600 transition">
                    {{ item.title }}
                  </h5>
                  <p class="text-xs text-muted mt-1.5 line-clamp-2 leading-relaxed">
                    {{ item.description }}
                  </p>
                </div>

                <div class="mt-4 pt-3 border-t border-border flex items-center justify-between text-xs font-semibold text-primary">
                  <span>{{ activeVideo().id === item.id ? 'Now Playing' : 'Play Video' }}</span>
                  <span class="text-amber-500">→</span>
                </div>
              </div>
            }
          </div>
        </div>

        <!-- Display Ad Creatives & Visual Assets -->
        <div class="mt-16">
          <div class="flex items-center justify-between mb-6">
            <div>
              <span class="text-xs font-semibold uppercase tracking-wider text-amber-600 bg-amber-100 px-3 py-0.5 rounded-full">
                Visual Assets
              </span>
              <h4 class="font-display text-xl font-bold text-primary mt-2">
                Digital & Social Campaign Creatives
              </h4>
            </div>
            <p class="text-xs text-muted max-w-md hidden md:block text-right">
              High-converting visual concepts paired with video storytelling for multi-channel performance across Google, Meta, and native ad networks.
            </p>
          </div>

          <div class="grid md:grid-cols-3 gap-6">
            @for (creative of displayCreatives; track creative.title) {
              <div class="rounded-2xl border border-border bg-white overflow-hidden shadow-sm hover:shadow-md transition flex flex-col justify-between">
                <div class="relative bg-slate-900 overflow-hidden aspect-[4/3] group">
                  <img
                    [src]="creative.imageSrc"
                    [alt]="creative.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div class="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <span class="text-xs text-amber-300 font-semibold">{{ creative.category }}</span>
                  </div>
                </div>
                <div class="p-5">
                  <span class="text-[10px] font-semibold uppercase tracking-wider text-slate-500">
                    {{ creative.aspectRatio }}
                  </span>
                  <h5 class="font-display text-base font-bold text-primary mt-1">
                    {{ creative.title }}
                  </h5>
                  <p class="text-xs text-muted mt-2 leading-relaxed">
                    {{ creative.description }}
                  </p>
                </div>
              </div>
            }
          </div>
        </div>

      </div>

      <!-- Featured Marketing Spotlight Card -->
      <div class="mt-20 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 text-white p-8 md:p-10 border border-slate-700 flex flex-col md:flex-row items-center justify-between gap-8">
        <div class="space-y-3 max-w-2xl">
          <span class="inline-block px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-400/20 text-amber-300 border border-amber-400/30">
            Growth & Demand Generation
          </span>
          <h3 class="font-display text-2xl md:text-3xl font-bold">
            Multi-Platform Performance Marketing & Paid Ads
          </h3>
          <p class="text-slate-300 text-sm leading-relaxed">
            Need high-ROI advertising campaigns across LinkedIn, Google Ads (Search & Shopping), Meta, TikTok, Amazon, Apple Search Ads, or Native Networks? We architect full-funnel ad campaigns with end-to-end attribution.
          </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
          <a routerLink="/marketing" class="px-6 py-3 rounded-full bg-amber-500 text-slate-950 font-bold text-center text-sm hover:bg-amber-400 transition shadow-lg whitespace-nowrap">
            View Marketing & Platform Matrix →
          </a>
        </div>
      </div>

      <!-- Schedule Consultation CTA -->
      <div class="mt-16 text-center bg-slate-900 text-white rounded-2xl p-10">
        <h3 class="font-display text-2xl font-bold mb-3">Need Custom Engineering or Consultancy?</h3>
        <p class="text-slate-300 max-w-xl mx-auto mb-6 text-sm">
          Speak directly with our engineering and growth team to discuss your project requirements, scope, and timeline.
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
      title: 'AI, Web Development, Automation & Cybersecurity Services',
      description: 'Custom AI development and workflow automation, web and mobile software, SaaS, cloud, security automation, penetration testing, and cybersecurity training.',
      keywords: 'AI development services, AI workflow automation, web development services, mobile app development, SaaS development, cloud hosting, CI/CD pipelines, security automation, penetration testing, ethical hacking training, software development team, API development, Angular, React, Node.js, OSINT, BlindMonk',
      canonicalUrl: '/software/services',
      ogType: 'website'
    });
  }

  // Active playing video signal
  activeVideo = signal<VideoAdItem>({
    id: 'full-ad',
    title: 'BlindMonk Official Services Ad (Full Cut)',
    badge: 'Master Campaign Ad',
    category: 'Full Service Reel',
    videoSrc: 'assets/ads/blind-monk-full-video-ad.mp4',
    posterSrc: 'assets/ads/ad-creative-1.png',
    description: 'The master extended video commercial showcasing BlindMonk across deep tech, custom silicon, high-throughput AI inference, payment proxies, and secure cloud infrastructure.'
  });

  selectVideo(item: VideoAdItem): void {
    this.activeVideo.set(item);
  }

  videoAds: VideoAdItem[] = [
    {
      id: 'full-ad',
      title: 'BlindMonk Full Services Reel',
      badge: 'Full Ad',
      category: 'Master Commercial',
      videoSrc: 'assets/ads/blind-monk-full-video-ad.mp4',
      posterSrc: 'assets/ads/ad-creative-1.png',
      description: 'Complete high-impact promotional ad covering full-stack software, deep-tech silicon, AI intelligence, and cloud architectures.'
    },
    {
      id: 'ai-services',
      title: 'AI & Full-Stack Engineering Cut',
      badge: 'Cut 01',
      category: 'AI & SaaS',
      videoSrc: 'assets/ads/video-ad-ai-services.mp4',
      posterSrc: 'assets/ads/ad-creative-2.png',
      description: 'Focused cut on our custom LLM ops, AI proxy orchestration, and modern Angular/React cloud engineering.'
    },
    {
      id: 'silicon-deeptech',
      title: 'Silicon & Deep-Tech Hardware Cut',
      badge: 'Cut 02',
      category: 'Hardware & Silicon',
      videoSrc: 'assets/ads/video-ad-silicon-deeptech.mp4',
      posterSrc: 'assets/ads/ad-creative-3.png',
      description: 'Dynamic visual showcase of our custom chip architectures, edge compute nodes, and low-latency silicon accelerators.'
    },
    {
      id: 'cloud-scale',
      title: 'Cloud Infrastructure & Scaling Cut',
      badge: 'Cut 03',
      category: 'Cloud & VPS',
      videoSrc: 'assets/ads/video-ad-cloud-scale.mp4',
      posterSrc: 'assets/ads/ad-creative-1.png',
      description: 'Showcasing our robust automated CI/CD setups, VPS dedicated server clustering, and high-availability DNS/email.'
    },
    {
      id: 'cyber-defense',
      title: 'Cybersecurity & Threat Defense Cut',
      badge: 'Cut 04',
      category: 'Security & OSINT',
      videoSrc: 'assets/ads/video-ad-cyber-defense.mp4',
      posterSrc: 'assets/ads/ad-creative-2.png',
      description: 'Spotlight on our ethical hacking workshops, penetration testing audits, and the Wisdom OSINT threat intelligence tool.'
    }
  ];

  displayCreatives: CreativeItem[] = [
    {
      title: 'Next-Gen Architecture Display Ad',
      category: 'Display / Social Banner',
      imageSrc: 'assets/ads/ad-creative-1.png',
      aspectRatio: '16:9 High-Res Banner',
      description: 'Visual advertising creative designed for high-CTR Google Display Network and LinkedIn sponsored content campaigns.'
    },
    {
      title: 'Deep-Tech & AI Intelligence Creative',
      category: 'Multi-Network Placement',
      imageSrc: 'assets/ads/ad-creative-2.png',
      aspectRatio: '16:9 Display Creative',
      description: 'Brand storytelling visual highlighting BlindMonk’s proprietary software platforms and deep engineering capabilities.'
    },
    {
      title: 'Performance Silicon & System Ad',
      category: 'Targeted Native & Social',
      imageSrc: 'assets/ads/ad-creative-3.png',
      aspectRatio: '16:9 Visual Creative',
      description: 'Eye-catching graphic engineered to capture technical decision-makers across Reddit, X (Twitter), and tech publications.'
    }
  ];

  serviceGroups: ServiceGroup[] = [
    {
      title: 'Performance Marketing & Ads',
      icon: '🎯',
      services: [
        { name: 'B2B & Tech Ads (LinkedIn, Google Search, Reddit, X)', slug: 'performance-marketing-ads' },
        { name: 'Fashion & Beauty (Meta Reels/Shopping, TikTok, Pinterest)', slug: 'performance-marketing-ads' },
        { name: 'E-Commerce & Retail (Google PMax/Shopping, Amazon Ads)', slug: 'performance-marketing-ads' },
        { name: 'Local Services (Google LSAs, Maps Promoted Pins, Yelp)', slug: 'performance-marketing-ads' },
        { name: 'Mobile App Acquisition (Apple Search Ads, Google UAC, Unity)', slug: 'performance-marketing-ads' },
        { name: 'Native Editorial & Video (Taboola, Outbrain, YouTube Ads)', slug: 'performance-marketing-ads' }
      ],
      link: '/marketing',
      linkText: 'Explore Dedicated Marketing Guide & Platform Matrix'
    },
    {
      title: 'Development',
      icon: '💻',
      services: [
        { name: 'Web App Development (Angular, React, Node)', slug: 'web-app-development' },
        { name: 'Mobile App Development (iOS & Android)', slug: 'mobile-app-development' },
        { name: 'API & Backend Engineering', slug: 'api-backend-engineering' },
        { name: 'Full-stack SaaS Development', slug: 'fullstack-saas-development' },
        { name: 'AIaaS (AI as a Service)', slug: 'ai-as-a-service' },
        { name: 'Custom AI & LLM Integrations', slug: 'custom-ai-integrations' },
      ],
    },
    {
      title: 'Infrastructure',
      icon: '☁️',
      services: [
        { name: 'Cloud Hosting & Automated Deployment', slug: 'cloud-hosting-deployment' },
        { name: 'Domain & DNS Architecture', slug: 'domain-dns-management' },
        { name: 'Business Email Hosting & Deliverability', slug: 'business-email-hosting' },
        { name: 'VPS & Dedicated Server Orchestration', slug: 'vps-dedicated-servers' },
        { name: 'CI/CD Automated Pipelines', slug: 'cicd-setup' },
      ],
    },
    {
      title: 'Security & Training',
      icon: '🛡️',
      services: [
        { name: 'Teaching Modern Tech Stacks', slug: 'teaching-new-tech' },
        { name: 'Cybersecurity & Ethical Hacking', slug: 'cybersecurity-training' },
        { name: 'Ethical Hacking Workshops', slug: 'ethical-hacking-workshops' },
        { name: 'Security Audits & Penetration Testing', slug: 'security-audits-pentesting' },
      ],
    },
    {
      title: 'Consulting',
      icon: '📊',
      services: [
        { name: 'Architecture & Scaling Reviews', slug: 'architecture-reviews' },
        { name: 'Product & GTM Strategy', slug: 'product-strategy' },
        { name: 'Technical Due Diligence', slug: 'technical-due-diligence' },
        { name: 'Conversion Rate Optimization (CRO)', slug: 'product-strategy' },
      ],
    },
  ];
}
