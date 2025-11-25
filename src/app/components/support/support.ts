import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-support',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './support.html',
  styleUrl: './support.css',
})
export class Support {
  supportForm: FormGroup;
  isSubmitting = false;
  showSuccessMessage = false;
  showErrorMessage = false;

  private http = inject(HttpClient);
  router = inject(Router);

  private readonly apiUrl = 'https://qurio-api.up.railway.app/api/v1';

  constructor(private fb: FormBuilder) {
    this.supportForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', [Validators.required, Validators.minLength(5)]],
      message: ['', [Validators.required, Validators.minLength(10)]],
    });
  }

  goBack(): void {
    this.router.navigate(['/']);
  }

  onSubmit(): void {
    if (this.supportForm.valid && !this.isSubmitting) {
      this.isSubmitting = true;
      this.showErrorMessage = false;

      const body = {
        title: `[AZKAAR APP] ${this.supportForm.value.subject}`,
        message: `SOURCE: Azkaar Mobile App\n\nName: ${this.supportForm.value.name}\nEmail: ${this.supportForm.value.email}\n\nMessage:\n${this.supportForm.value.message}`,
        businessId: 'azkaar-app',
      };

      this.http.post(`${this.apiUrl}/contact/support`, body).subscribe({
        next: () => {
          this.showSuccessMessage = true;
          this.supportForm.reset();
          this.isSubmitting = false;
          setTimeout(() => {
            this.showSuccessMessage = false;
          }, 5000);
        },
        error: (err) => {
          console.error('Error submitting support request:', err);
          this.showErrorMessage = true;
          this.isSubmitting = false;
          setTimeout(() => {
            this.showErrorMessage = false;
          }, 5000);
        },
      });
    } else {
      Object.keys(this.supportForm.controls).forEach((key) => {
        this.supportForm.get(key)?.markAsTouched();
      });
    }
  }

  get name() {
    return this.supportForm.get('name');
  }

  get email() {
    return this.supportForm.get('email');
  }

  get subject() {
    return this.supportForm.get('subject');
  }

  get message() {
    return this.supportForm.get('message');
  }
}
