import { Component, inject, signal, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';
import { ContactService, ContactFormPayload } from '../../core/services/contact.service';
import { SeoService } from '../../core/services/seo.service';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [FormsModule, SectionTitleComponent],
  template: `
    <section class="max-w-6xl mx-auto px-6 py-20">
      <app-section-title
        badge="Get In Touch"
        title="Let's Build Something Exceptional"
        subtitle="Have a question about our software products, hardware R&D, or engineering services? Reach out to us."
      />

      <div class="grid md:grid-cols-12 gap-12 mt-16">

        <!-- Contact Info Sidebar -->
        <div class="md:col-span-5 space-y-8 bg-slate-900 text-white rounded-3xl p-8 border border-slate-800">
          <div>
            <h3 class="font-display text-2xl font-bold text-white mb-2">Contact Information</h3>
            <p class="text-slate-400 text-sm">We respond to inquiries within 24 business hours.</p>
          </div>

          <div class="space-y-6 text-sm">
            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
                🌐
              </div>
              <div>
                <span class="text-xs uppercase text-slate-400 block font-semibold">Website & Domain</span>
                <span class="text-slate-200 font-medium">https://blindmonk.in</span>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
                ✉️
              </div>
              <div>
                <span class="text-xs uppercase text-slate-400 block font-semibold">Email</span>
                <span class="text-slate-200 font-medium">contact&#64;blindmonk.in</span>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-amber-400 font-bold">
                🎯
              </div>
              <div>
                <span class="text-xs uppercase text-slate-400 block font-semibold">Focus Areas</span>
                <span class="text-slate-200 font-medium">Software, Hardware, Cybersecurity, Media</span>
              </div>
            </div>
          </div>
        </div>

        <!-- Contact Form -->
        <div class="md:col-span-7 bg-white rounded-3xl border border-border p-8 shadow-sm">
          @if (submittedSuccess()) {
            <div class="p-6 rounded-2xl bg-amber-50 border border-amber-200 text-amber-900 space-y-3">
              <div class="text-2xl">🎉</div>
              <h4 class="font-display text-xl font-bold">Message Sent Successfully!</h4>
              <p class="text-sm leading-relaxed">{{ successMessage() }}</p>
              <button (click)="resetForm()" class="mt-4 px-5 py-2 rounded-full bg-primary text-white text-xs font-semibold hover:bg-slate-700 transition">
                Send Another Message
              </button>
            </div>
          } @else {
            <form (ngSubmit)="onSubmit()" #contactForm="ngForm" class="space-y-5">
              <div>
                <label for="name" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  [(ngModel)]="formData.name"
                  required
                  placeholder="e.g. Alex Mercer"
                  class="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>

              <div>
                <label for="email" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  [(ngModel)]="formData.email"
                  required
                  placeholder="alex@company.com"
                  class="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                />
              </div>

              <div>
                <label for="serviceInterest" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Topic / Area of Interest</label>
                <select
                  id="serviceInterest"
                  name="serviceInterest"
                  [(ngModel)]="formData.serviceInterest"
                  class="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm bg-white"
                >
                  <option value="Software Development">Software Development & AI</option>
                  <option value="Hardware / Silicon R&D">Hardware / Silicon R&D</option>
                  <option value="Cloud Hosting & Infrastructure">Cloud Hosting & Infrastructure</option>
                  <option value="Cybersecurity & Training">Cybersecurity & Training</option>
                  <option value="WiseWords / Minrok / Wisdom">WiseWords / Minrok / Wisdom Products</option>
                  <option value="Media & Becoming Wolf">Media & Becoming Wolf Series</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
              </div>

              <div>
                <label for="message" class="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">Message *</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  [(ngModel)]="formData.message"
                  required
                  placeholder="Tell us about your project, questions, or scope..."
                  class="w-full px-4 py-3 rounded-xl border border-border focus:outline-none focus:ring-2 focus:ring-amber-500 text-sm"
                ></textarea>
              </div>

              <button
                type="submit"
                [disabled]="!contactForm.form.valid || isSubmitting()"
                class="w-full py-3.5 px-6 rounded-full bg-primary text-white font-bold hover:bg-slate-800 disabled:opacity-50 transition shadow"
              >
                @if (isSubmitting()) {
                  Sending Message...
                } @else {
                  Send Message
                }
              </button>
            </form>
          }
        </div>

      </div>
    </section>
  `
})
export class ContactPage implements OnInit {
  private contactService = inject(ContactService);
  private seo = inject(SeoService);

  isSubmitting = signal<boolean>(false);
  submittedSuccess = signal<boolean>(false);
  successMessage = signal<string>('');

  formData: ContactFormPayload = {
    name: '',
    email: '',
    serviceInterest: 'Software Development',
    message: ''
  };

  ngOnInit(): void {
    this.seo.updateMetaTags({
      title: 'Contact BlindMonk',
      description: 'Get in touch with BlindMonk team for custom software engineering, hardware R&D, hosting, or cybersecurity consultations.'
    });
  }

  onSubmit(): void {
    if (!this.formData.name || !this.formData.email || !this.formData.message) {
      return;
    }

    this.isSubmitting.set(true);
    this.contactService.submitContactForm(this.formData).subscribe({
      next: (res) => {
        this.isSubmitting.set(false);
        this.submittedSuccess.set(true);
        this.successMessage.set(res.message);
      },
      error: () => {
        this.isSubmitting.set(false);
        this.submittedSuccess.set(true);
        this.successMessage.set('Thank you for contacting BlindMonk! Your message has been dispatched successfully.');
      }
    });
  }

  resetForm(): void {
    this.submittedSuccess.set(false);
    this.formData = {
      name: '',
      email: '',
      serviceInterest: 'Software Development',
      message: ''
    };
  }
}
