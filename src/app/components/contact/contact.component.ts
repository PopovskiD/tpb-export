import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { MatIconModule } from '@angular/material/icon';
import emailjs from '@emailjs/browser';
import { environment } from '../../../environments/environment';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

@Component({
    selector: 'app-contact',
    imports: [FormsModule, TranslateModule, MatIconModule],
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData: ContactForm = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };

  isSubmitting = false;
  submitStatus: 'idle' | 'success' | 'error' = 'idle';

  contactInfo = [
    {
      icon: 'location_on',
      titleKey: 'CONTACT.ADDRESS',
      contentKey: 'CONTACT.ADDRESS_VALUE'
    },
    {
      icon: 'phone',
      titleKey: 'CONTACT.PHONE',
      content: '+389 72 621 040',
      link: 'tel:+38972621040'
    },
    {
      icon: 'email',
      titleKey: 'CONTACT.EMAIL',
      content: 'info@tpb-export.com',
      link: 'mailto:info@tpb-export.com'
    },
    {
      icon: 'schedule',
      titleKey: 'CONTACT.WORKING_HOURS',
      contentKey: 'CONTACT.WORKING_HOURS_VALUE'
    }
  ];

  constructor(private translate: TranslateService) {}

  async onSubmit() {
    if (this.isSubmitting) return;

    this.isSubmitting = true;
    this.submitStatus = 'idle';

    const templateParams = {
      from_name: this.formData.name,
      from_email: this.formData.email,
      phone: this.formData.phone || 'Not provided',
      subject: this.formData.subject,
      message: this.formData.message,
      to_email: 'info@tpb-export.com'
    };

    try {
      await emailjs.send(
        environment.emailjs.serviceId,
        environment.emailjs.templateId,
        templateParams,
        environment.emailjs.publicKey
      );

      this.submitStatus = 'success';
      this.resetForm();
    } catch (error) {
      console.error('Email send failed:', error);
      this.submitStatus = 'error';
    } finally {
      this.isSubmitting = false;
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: ''
    };
  }

  dismissStatus() {
    this.submitStatus = 'idle';
  }
}
