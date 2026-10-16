import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  template: `
    <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border transition-all">
      <div class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a routerLink="/" class="flex items-center gap-3 group">
          <img src="assets/logos/blind-monk-logo.png" alt="Blind Monk mountain logo" class="w-11 h-11 object-contain group-hover:scale-105 transition-transform" />
          <span class="font-display text-xl font-bold text-primary tracking-tight">
            BlindMonk<span class="text-accent">.in</span>
          </span>
        </a>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center gap-8 font-medium text-sm">
          <a routerLink="/hardware" routerLinkActive="text-accent font-semibold" class="text-muted hover:text-primary transition">Hardware</a>
          <a routerLink="/media" routerLinkActive="text-accent font-semibold" class="text-muted hover:text-primary transition">Media</a>
          <a routerLink="/software" routerLinkActive="text-accent font-semibold" class="text-muted hover:text-primary transition">Software</a>
          <a routerLink="/about" routerLinkActive="text-accent font-semibold" class="text-muted hover:text-primary transition">About</a>
          <a routerLink="/contact" class="px-5 py-2 rounded-full bg-primary text-white text-sm font-medium hover:bg-slate-700 transition shadow-sm hover:shadow">
            Contact Us
          </a>
        </div>

        <!-- Mobile Menu Button -->
        <button (click)="toggleMenu()" aria-label="Toggle menu" class="md:hidden p-2 text-primary focus:outline-none">
          @if (!mobileMenuOpen()) {
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          } @else {
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          }
        </button>
      </div>

      <!-- Mobile Navigation Drawer -->
      @if (mobileMenuOpen()) {
        <div class="md:hidden border-t border-border bg-white px-6 py-4 space-y-3">
          <a routerLink="/hardware" (click)="closeMenu()" routerLinkActive="text-accent font-semibold" class="block py-2 text-muted hover:text-primary transition">Hardware</a>
          <a routerLink="/media" (click)="closeMenu()" routerLinkActive="text-accent font-semibold" class="block py-2 text-muted hover:text-primary transition">Media</a>
          <a routerLink="/software" (click)="closeMenu()" routerLinkActive="text-accent font-semibold" class="block py-2 text-muted hover:text-primary transition">Software</a>
          <a routerLink="/about" (click)="closeMenu()" routerLinkActive="text-accent font-semibold" class="block py-2 text-muted hover:text-primary transition">About</a>
          <a routerLink="/contact" (click)="closeMenu()" class="block text-center mt-4 px-5 py-2.5 rounded-full bg-primary text-white font-medium hover:bg-slate-700 transition">
            Contact Us
          </a>
        </div>
      }
    </nav>
  `
})
export class NavbarComponent {
  mobileMenuOpen = signal<boolean>(false);

  toggleMenu(): void {
    this.mobileMenuOpen.update(v => !v);
  }

  closeMenu(): void {
    this.mobileMenuOpen.set(false);
  }
}
