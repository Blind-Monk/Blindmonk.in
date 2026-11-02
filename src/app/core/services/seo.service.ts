import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { DOCUMENT } from '@angular/common';

export interface SeoConfig {
  title?: string;
  description?: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  robots?: string;
  structuredData?: object;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);
  private document = inject(DOCUMENT);

  private readonly baseUrl = 'https://blindmonk.in';
  private readonly defaultTitle = 'BlindMonk.in — AI Development, Web Engineering, Security Automation & Deep Tech';
  private readonly defaultDescription = 'BlindMonk.in delivers enterprise AI development, custom web & mobile app engineering, security automation, penetration testing, cloud infrastructure, and deep-tech silicon solutions. Hire expert developers for AI automation, SaaS, and cybersecurity projects.';
  private readonly defaultImage = 'https://blindmonk.in/assets/logos/blind-monk-logo.png';

  updateTitle(title?: string): void {
    if (title) {
      this.titleService.setTitle(`${title} | BlindMonk.in`);
    } else {
      this.titleService.setTitle(this.defaultTitle);
    }
  }

  updateMetaTags(meta: SeoConfig): void {
    const pageTitle = meta.title ? `${meta.title} | BlindMonk.in` : this.defaultTitle;
    const pageDescription = meta.description || this.defaultDescription;
    const ogImage = meta.ogImage || this.defaultImage;
    const ogType = meta.ogType || 'website';
    const twitterCard = meta.twitterCard || 'summary_large_image';
    const robots = meta.robots || 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1';
    const canonicalUrl = new URL(meta.canonicalUrl || this.document.location?.pathname || '/', this.baseUrl);
    canonicalUrl.pathname = canonicalUrl.pathname.replace(/\/+$/, '') || '/';
    canonicalUrl.search = '';
    canonicalUrl.hash = '';
    const canonical = canonicalUrl.toString();

    this.titleService.setTitle(pageTitle);

    this.metaService.updateTag({ name: 'description', content: pageDescription });
    if (meta.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: meta.keywords });
    } else {
      this.metaService.removeTag('name="keywords"');
    }
    this.metaService.updateTag({ name: 'robots', content: robots });
    this.metaService.updateTag({ name: 'author', content: 'BlindMonk.in' });

    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: pageDescription });
    this.metaService.updateTag({ property: 'og:image', content: ogImage });
    this.metaService.updateTag({ property: 'og:type', content: ogType });
    this.metaService.updateTag({ property: 'og:site_name', content: 'BlindMonk.in' });
    this.metaService.updateTag({ property: 'og:locale', content: 'en_US' });
    this.metaService.updateTag({ property: 'og:url', content: canonical });

    this.metaService.updateTag({ name: 'twitter:card', content: twitterCard });
    this.metaService.updateTag({ name: 'twitter:title', content: pageTitle });
    this.metaService.updateTag({ name: 'twitter:description', content: pageDescription });
    this.metaService.updateTag({ name: 'twitter:image', content: ogImage });

    let canonicalLink = this.document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonicalLink) {
      canonicalLink = this.document.createElement('link');
      canonicalLink.rel = 'canonical';
      this.document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = canonical;

    const structuredData = meta.structuredData || {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: pageTitle,
      description: pageDescription,
      url: canonical,
      isPartOf: {
        '@type': 'WebSite',
        name: 'BlindMonk.in',
        url: `${this.baseUrl}/`
      }
    };
    let structuredDataScript = this.document.head.querySelector<HTMLScriptElement>('#page-structured-data');
    if (!structuredDataScript) {
      structuredDataScript = this.document.createElement('script');
      structuredDataScript.id = 'page-structured-data';
      structuredDataScript.type = 'application/ld+json';
      this.document.head.appendChild(structuredDataScript);
    }
    structuredDataScript.textContent = JSON.stringify(structuredData).replace(/</g, '\\u003c');
  }
}
