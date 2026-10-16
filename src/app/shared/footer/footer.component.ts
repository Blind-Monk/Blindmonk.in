import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="bg-slate-900 text-slate-300 border-t border-slate-800">
      <div class="max-w-6xl mx-auto px-6 py-16">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-10">

          <!-- Company Info -->
          <div class="space-y-4 md:col-span-1">
            <a routerLink="/" class="flex items-center gap-3">
              <img src="assets/logos/blind-monk-logo.png" alt="Blind Monk mountain logo" class="w-10 h-10 object-contain" />
              <span class="font-display text-xl font-bold text-white tracking-tight">
                BlindMonk<span class="text-amber-400">.in</span>
              </span>
            </a>
            <p class="text-sm text-slate-400 leading-relaxed">
              Engineering deep tech solutions across custom silicon, artificial intelligence, software platforms, and media.
            </p>
          </div>

          <!-- Quick Navigation: Software -->
          <div class="space-y-3">
            <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-100">Software</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a routerLink="/software" class="hover:text-amber-400 transition">Overview</a></li>
              <li><a routerLink="/software/services" class="hover:text-amber-400 transition">Development & AI Services</a></li>
              <li><a routerLink="/software/products" class="hover:text-amber-400 transition">Products (WiseWords, Minrok)</a></li>
            </ul>
          </div>

          <!-- Quick Navigation: Hardware & Media -->
          <div class="space-y-3">
            <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-100">Pillars</h4>
            <ul class="space-y-2 text-sm text-slate-400">
              <li><a routerLink="/hardware" class="hover:text-amber-400 transition">Hardware & Silicon</a></li>
              <li><a routerLink="/media" class="hover:text-amber-400 transition">Media & Becoming Wolf</a></li>
              <li><a routerLink="/about" class="hover:text-amber-400 transition">About BlindMonk</a></li>
            </ul>
          </div>

          <!-- Contact & Legal -->
          <div class="space-y-3">
            <h4 class="font-display text-sm font-semibold uppercase tracking-wider text-slate-100">Connect</h4>
            <p class="text-sm text-slate-400">
              Got a complex engineering challenge or product query?
            </p>
            <a routerLink="/contact" class="inline-block mt-2 px-4 py-2 rounded-lg bg-amber-500 text-slate-900 text-xs font-semibold hover:bg-amber-400 transition">
              Get in Touch
            </a>
          </div>

        </div>

        <div class="mt-12 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-xs text-slate-500 gap-4">
          <p>© {{ currentYear }} BlindMonk.in. All rights reserved.</p>
          <div class="flex gap-6">
            <a routerLink="/about" class="hover:text-slate-400 transition">Privacy Policy</a>
            <a routerLink="/about" class="hover:text-slate-400 transition">Terms of Service</a>
            <a routerLink="/contact" class="hover:text-slate-400 transition">Contact Support</a>
          </div>
        </div>
      </div>
    </footer>
  `
})
export class FooterComponent {
  currentYear = new Date().getFullYear();
}
