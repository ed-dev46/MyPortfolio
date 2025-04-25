import { Component } from '@angular/core';
import { SectionTitleComponent } from '../../section-title/section-title.component';
import { MailService } from '../../../services/mail.service';
import { environment } from '../../../../environments/environment.development';
import { NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contactme-page',
  imports: [SectionTitleComponent, CommonModule, FormsModule],
  templateUrl: './contactme-page.component.html',
  styleUrl: './contactme-page.component.css'
})
export class ContactmePageComponent {

  constructor(private mailService: MailService) {}

  showAlert: boolean = false;
  alertMessage: string = '';
  onSubmit: boolean = false;

  contactFormValues = {
    senderEmail: '',
    emailContent: ''
  };

  hideAlert() {
    setTimeout(() => {
      this.showAlert = false;
    }, 5000);
  }

  async submitEmail(contactForm: NgForm) {
    this.onSubmit = true;
    let formData: FormData = new FormData();
    formData.append('email', this.contactFormValues.senderEmail);
    formData.append('emailContent', this.contactFormValues.emailContent);
    formData.append('access_key', environment.form_access_key);

    try {
      const res = await this.mailService.sendEmail(formData);
      if (!res.ok) {
        throw new Error();
      }
      this.alertMessage = 'Email enviado com sucesso!';
      contactForm.reset();
    } catch (err) {
      this.alertMessage = 'Algo deu errado, tente novamente!';
    }
    this.onSubmit = false;
    this.showAlert = true;
    this.hideAlert();
  }

}
