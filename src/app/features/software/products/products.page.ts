import { Component, inject, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../../shared/product-card/product-card.component';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { SeoService } from '../../../core/services/seo.service';

@Component({
  selector: 'app-products-page',
  standalone: true,
  imports: [ProductCardComponent, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="Software Suite"
        title="Software Products"
        subtitle="Tools we're building to empower developers, businesses, and security teams."
      />

      <div class="grid md:grid-cols-2 gap-6 mt-16">
        <app-product-card
          icon="🧠"
          title="WiseWords"
          description="AI proxy and content intelligence layer for smarter workflows."
          [comingSoon]="true"
          link="/contact"
          [tags]="['AI Proxy', 'Content Intel', 'LLMs']"
        />
        <app-product-card
          icon="💳"
          title="Minrok"
          description="Payment proxy for unified checkout across platforms."
          [comingSoon]="true"
          link="/contact"
          [tags]="['Payment Proxy', 'Checkout', 'FinTech']"
        />
        <app-product-card
          icon="🔍"
          title="Wisdom"
          description="All-in-one OSINT tool for security researchers and analysts."
          [comingSoon]="true"
          link="/contact"
          [tags]="['OSINT', 'Cybersecurity', 'Threat Intel']"
        />
        <app-product-card
          icon="🔐"
          title="Mumble"
          description="Encrypted sharing for sensitive secrets and media. Send secrets through one-time links or reusable links for long-term access, and share media through links that expire on your schedule."
          [comingSoon]="true"
          link="/contact"
          [tags]="['Encrypted Sharing', 'One-Time & Persistent', 'Expiring Media Links']"
        />
      </div>
    </section>
  `
})
export class ProductsPage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Software Products — WiseWords, Minrok, Wisdom & Mumble',
      description: 'BlindMonk software products: WiseWords AI proxy, Minrok payment proxy, Wisdom OSINT intelligence, and Mumble encrypted secret and media sharing.'
    });
  }
}
