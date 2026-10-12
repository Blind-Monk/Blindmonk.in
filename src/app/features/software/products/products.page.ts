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

      <div class="grid md:grid-cols-3 gap-6 mt-16">
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
      </div>
    </section>
  `
})
export class ProductsPage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Software Products — WiseWords, Minrok & Wisdom',
      description: 'Proprietary products built by BlindMonk: WiseWords AI proxy, Minrok payment proxy, and Wisdom OSINT intelligence.'
    });
  }
}
