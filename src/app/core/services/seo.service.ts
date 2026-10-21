import { Injectable, inject } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private titleService = inject(Title);
  private metaService = inject(Meta);

  private readonly defaultTitle = 'BlindMonk.in — Deep Tech, AI, Silicon & Media';
  private readonly defaultDescription = 'BlindMonk builds cutting-edge software products, custom hardware/silicon solutions, cloud & cybersecurity services, and media content.';

  updateTitle(title?: string): void {
    if (title) {
      this.titleService.setTitle(`${title} | BlindMonk.in`);
    } else {
      this.titleService.setTitle(this.defaultTitle);
    }
  }

  updateMetaTags(meta: { title?: string; description?: string; keywords?: string }): void {
    const pageTitle = meta.title ? `${meta.title} | BlindMonk.in` : this.defaultTitle;
    const pageDescription = meta.description || this.defaultDescription;

    this.titleService.setTitle(pageTitle);

    this.metaService.updateTag({ name: 'description', content: pageDescription });
    this.metaService.updateTag({ property: 'og:title', content: pageTitle });
    this.metaService.updateTag({ property: 'og:description', content: pageDescription });
    if (meta.keywords) {
      this.metaService.updateTag({ name: 'keywords', content: meta.keywords });
    }
  }
}
