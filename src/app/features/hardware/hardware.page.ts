import { Component, inject, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-hardware-page',
  standalone: true,
  imports: [RouterLink, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="Silicon & Systems"
        title="Hardware & Silicon Engineering"
        subtitle="Designing custom silicon architectures, edge compute nodes, and high-performance embedded systems for the AI era."
      />

      <div class="grid md:grid-cols-2 gap-12 mt-16 items-center">
        <div class="space-y-6">
          <h3 class="font-display text-2xl font-bold text-primary">Custom AI Accelerators & Edge Chips</h3>
          <p class="text-muted leading-relaxed">
            At BlindMonk, our hardware division explores low-power ASIC design, custom FPGA acceleration, and optimized silicon topologies for on-device neural network inference.
          </p>
          <ul class="space-y-3">
            <li class="flex items-start gap-3 text-slate-700">
              <span class="text-amber-500 font-bold mt-1">✦</span>
              <span>Low-Latency Neural Processing Units (NPU) Architecture</span>
            </li>
            <li class="flex items-start gap-3 text-slate-700">
              <span class="text-amber-500 font-bold mt-1">✦</span>
              <span>Custom FPGA & Embedded Hardware Prototyping</span>
            </li>
            <li class="flex items-start gap-3 text-slate-700">
              <span class="text-amber-500 font-bold mt-1">✦</span>
              <span>Thermal & Power-Efficient Edge Intelligence Chips</span>
            </li>
          </ul>
          <div class="pt-4">
            <a routerLink="/contact" class="inline-block px-6 py-3 rounded-full bg-primary text-white text-sm font-semibold hover:bg-slate-700 transition">
              Partner on Hardware R&D
            </a>
          </div>
        </div>

        <div class="rounded-3xl border border-border bg-slate-900 p-8 text-white space-y-6 relative overflow-hidden">
          <div class="text-xs uppercase tracking-wider text-amber-400 font-bold">R&D Roadmap</div>
          <h4 class="font-display text-2xl font-semibold">Silicon Compute Pillars</h4>
          <div class="space-y-4">
            <div class="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div class="font-bold text-amber-300">MonkCore-NPU</div>
              <div class="text-xs text-slate-300 mt-1">Ultra-low power micro-NPU designed for vision & audio sensor inference.</div>
            </div>
            <div class="p-4 rounded-xl bg-slate-800 border border-slate-700">
              <div class="font-bold text-amber-300">EdgeMatrix Board</div>
              <div class="text-xs text-slate-300 mt-1">Ruggedized single-board computer for industrial IoT edge computing.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `
})
export class HardwarePage implements OnInit {
  private seo = inject(SeoService);

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Hardware & Custom Silicon Engineering',
      description: 'BlindMonk R&D in custom silicon architectures, FPGA acceleration, and edge AI compute chips.'
    });
  }
}
