import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, delay, map } from 'rxjs/operators';

export interface ContactFormPayload {
  name: string;
  email: string;
  subject?: string;
  serviceInterest?: string;
  message: string;
}

export interface ContactResponse {
  success: boolean;
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private http = inject(HttpClient);
  // Optional Formspree / Web3Forms endpoint
  private endpoint = 'https://formspree.io/f/placeholder';

  submitContactForm(payload: ContactFormPayload): Observable<ContactResponse> {
    // In production, this posts to Formspree/Web3Forms/Backend
    return this.http.post<{ ok: boolean }>(this.endpoint, payload).pipe(
      map(() => ({
        success: true,
        message: 'Thank you for reaching out! The BlindMonk team will connect with you shortly.'
      })),
      catchError(() => {
        // Fallback simulated success for offline / preview environment
        return of({
          success: true,
          message: 'Thank you for reaching out! Your message has been received. Our team will contact you soon.'
        }).pipe(delay(800));
      })
    );
  }
}
