import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section class="page-header">
      <div class="container">
        <h1>Contacto</h1>
        <p>Estamos aquí para ayudarte. Contáctanos para resolver tus dudas</p>
      </div>
    </section>

    <section class="contact-info">
      <div class="container">
        <div class="info-grid">
          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <h3>Visítanos</h3>
            <p>Av. Tecnología #123<br>Col. Digital<br>Ciudad de México, CP 01234</p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-phone-alt"></i>
            </div>
            <h3>Llámanos</h3>
            <p>Ventas: (55) 1234-5678<br>Soporte: (55) 8765-4321<br>Lun - Sáb: 9:00 - 18:00</p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <h3>Escríbenos</h3>
            <p>info&#64;printmaster.com<br>soporte&#64;printmaster.com<br>ventas&#64;printmaster.com</p>
          </div>

          <div class="info-card">
            <div class="info-icon">
              <i class="fas fa-comments"></i>
            </div>
            <h3>Chat en Vivo</h3>
            <p>Disponible en nuestro sitio<br>Lun - Vie: 9:00 - 20:00<br>Sáb: 10:00 - 15:00</p>
          </div>
        </div>
      </div>
    </section>

    <section class="contact-form-section">
      <div class="container">
        <div class="contact-wrapper">
          <div class="contact-form">
            <h2>Envíanos un mensaje</h2>
            <p>Completa el formulario y nos pondremos en contacto contigo lo antes posible.</p>

            <form (submit)="submitForm($event)">
              <div class="form-group">
                <label for="name">Nombre completo *</label>
                <input type="text" id="name" name="name" [(ngModel)]="formData.name" required>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="email">Correo electrónico *</label>
                  <input type="email" id="email" name="email" [(ngModel)]="formData.email" required>
                </div>

                <div class="form-group">
                  <label for="phone">Teléfono</label>
                  <input type="tel" id="phone" name="phone" [(ngModel)]="formData.phone">
                </div>
              </div>

              <div class="form-group">
                <label for="company">Empresa</label>
                <input type="text" id="company" name="company" [(ngModel)]="formData.company">
              </div>

              <div class="form-group">
                <label for="subject">Asunto *</label>
                <input type="text" id="subject" name="subject" [(ngModel)]="formData.subject" required>
              </div>

              <div class="form-group">
                <label for="message">Mensaje *</label>
                <textarea id="message" name="message" rows="5" [(ngModel)]="formData.message" required></textarea>
              </div>

              <div class="form-group checkbox">
                <input type="checkbox" id="privacy" name="privacy" [(ngModel)]="formData.privacy" required>
                <label for="privacy">Acepto la <a href="#">política de privacidad</a> y el procesamiento de mis datos personales</label>
              </div>

              <button type="submit" class="btn btn-primary" [disabled]="!isFormValid()">Enviar Mensaje</button>
            </form>

            <div class="form-success" *ngIf="formSubmitted">
              <i class="fas fa-check-circle"></i>
              <h3>¡Mensaje enviado correctamente!</h3>
              <p>Gracias por contactarnos. Uno de nuestros representantes se pondrá en contacto contigo pronto.</p>
            </div>
          </div>

          <div class="contact-map">
            <img src="https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/-99.1332,19.4326,13,0/600x400?access_token=pk.example" alt="Mapa de ubicación" class="location-map" />
          </div>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <div class="section-header">
          <h2>Preguntas Frecuentes</h2>
          <p>Respuestas a las dudas más comunes</p>
        </div>

        <div class="faq-list">
          <div class="faq-item" *ngFor="let faq of faqs; let i = index">
            <div class="faq-question" (click)="toggleFaq(i)">
              <h3>{{faq.question}}</h3>
              <i class="fas" [class.fa-plus]="!faq.isOpen" [class.fa-minus]="faq.isOpen"></i>
            </div>
            <div class="faq-answer" [class.open]="faq.isOpen">
              <p>{{faq.answer}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .page-header {
      padding: 10rem 0 6rem;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      color: white;
      text-align: center;
    }

    .page-header h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
      color: white;
    }

    .page-header p {
      font-size: 1.25rem;
      max-width: 800px;
      margin: 0 auto;
      opacity: 0.9;
    }

    .contact-info {
      padding: 5rem 0;
      background: white;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 2rem;
    }

    .info-card {
      background: var(--light-bg);
      padding: 2rem;
      border-radius: 0.5rem;
      text-align: center;
      transition: transform 0.3s, box-shadow 0.3s;
    }

    .info-card:hover {
      transform: translateY(-10px);
      box-shadow: var(--shadow);
    }

    .info-icon {
      width: 70px;
      height: 70px;
      background: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 0 auto 1.5rem;
      color: var(--primary-color);
      font-size: 1.75rem;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    }

    .info-card h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .info-card p {
      color: var(--light-text);
      line-height: 1.6;
    }

    .contact-form-section {
      padding: 5rem 0;
      background: var(--light-bg);
    }

    .contact-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }

    .contact-form, .contact-map {
      background: white;
      padding: 2.5rem;
      border-radius: 0.5rem;
      box-shadow: var(--shadow);
    }

    .contact-form h2, .contact-map h2 {
      font-size: 1.75rem;
      margin-bottom: 1rem;
      position: relative;
    }

    .contact-form h2:after, .contact-map h2:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 60px;
      height: 3px;
      background: var(--primary-color);
    }

    .contact-form p {
      color: var(--light-text);
      margin-bottom: 2rem;
      margin-top: 1.5rem;
    }

    .form-group {
      margin-bottom: 1.5rem;
    }

    .form-row {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1.5rem;
    }

    label {
      display: block;
      margin-bottom: 0.5rem;
      font-weight: 500;
    }

    input[type="text"],
    input[type="email"],
    input[type="tel"],
    textarea {
      width: 100%;
      padding: 0.75rem;
      border: 1px solid var(--border-color);
      border-radius: 0.375rem;
      font-family: inherit;
      font-size: 1rem;
      transition: border-color 0.3s;
    }

    input:focus,
    textarea:focus {
      border-color: var(--primary-color);
      outline: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      gap: 0.75rem;
    }

    .checkbox input {
      width: 20px;
      height: 20px;
    }

    .checkbox label {
      margin-bottom: 0;
      font-weight: normal;
      font-size: 0.875rem;
    }

    .checkbox a {
      color: var(--primary-color);
      text-decoration: underline;
    }

    button[type="submit"] {
      width: 100%;
      padding: 0.875rem;
      font-size: 1rem;
    }

    .form-success {
      text-align: center;
      padding: 2rem;
      background-color: #f0fdf4;
      border-radius: 0.5rem;
      border: 1px solid #bbf7d0;
    }

    .form-success i {
      font-size: 3rem;
      color: var(--success-color);
      margin-bottom: 1rem;
    }

    .form-success h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .form-success p {
      color: var(--text-color);
    }

    .map-container {
      margin: 2rem 0;
      border-radius: 0.5rem;
      overflow: hidden;
    }

    .business-hours {
      margin-top: 2rem;
    }

    .business-hours h3 {
      font-size: 1.25rem;
      margin-bottom: 1rem;
    }

    .business-hours ul {
      list-style: none;
      padding: 0;
    }

    .business-hours li {
      display: flex;
      justify-content: space-between;
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border-color);
    }

    .business-hours li:last-child {
      border-bottom: none;
    }

    .day {
      font-weight: 500;
    }

    .faq {
      padding: 5rem 0;
    }

    .section-header {
      text-align: center;
      max-width: 800px;
      margin: 0 auto 4rem;
    }

    .section-header h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      position: relative;
      display: inline-block;
    }

    .section-header h2:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      width: 80px;
      height: 3px;
      background: var(--primary-color);
    }

    .section-header p {
      font-size: 1.25rem;
      color: var(--light-text);
    }

    .faq-list {
      max-width: 800px;
      margin: 0 auto;
    }

    .faq-item {
      margin-bottom: 1.5rem;
      background: white;
      border-radius: 0.5rem;
      overflow: hidden;
      box-shadow: var(--shadow);
    }

    .faq-question {
      padding: 1.5rem 2rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .faq-question:hover {
      background-color: #f8fafc;
    }

    .faq-question h3 {
      font-size: 1.1rem;
      margin: 0;
    }

    .faq-answer {
      max-height: 0;
      overflow: hidden;
      transition: max-height 0.3s ease;
    }

    .faq-answer.open {
      max-height: 500px;
    }

    .faq-answer p {
      padding: 0 2rem 1.5rem;
      margin: 0;
    }

    @media (max-width: 992px) {
      .info-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .contact-wrapper {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .form-row {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 576px) {
      .info-grid {
        grid-template-columns: 1fr;
      }
    }

    .location-map {
        max-width: 100%;
        height: auto;
    }
  `]
})
export class ContactComponent {
  formData = {
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
    privacy: false
  };

  formSubmitted = false;

  faqs = [
    {
      question: '¿Cuáles son los métodos de pago aceptados?',
      answer: 'Aceptamos pagos en efectivo, transferencia bancaria, tarjetas de crédito/débito (Visa, MasterCard, American Express) y depósitos en tiendas de conveniencia.',
      isOpen: false
    },
    {
      question: '¿Ofrecen crédito empresarial?',
      answer: 'Sí, ofrecemos planes de crédito para clientes empresariales después de una evaluación crediticia. Los términos varían según el historial y volumen de compras.',
      isOpen: false
    },
    {
      question: '¿Cuál es el tiempo de entrega de los productos?',
      answer: 'Para productos en stock, la entrega local es de 24-48 horas. Envíos foráneos toman de 3 a 5 días hábiles. Productos bajo pedido pueden tomar hasta 2 semanas dependiendo del fabricante.',
      isOpen: false
    },
    {
      question: '¿Tienen servicio técnico autorizado?',
      answer: 'Sí, somos servicio técnico autorizado de HP, Epson, Canon y Brother, lo que nos permite ofrecer reparaciones con garantía oficial del fabricante.',
      isOpen: false
    }
  ];

  isFormValid(): boolean {
    return !!(this.formData.name && 
             this.formData.email && 
             this.formData.subject && 
             this.formData.message && 
             this.formData.privacy);
  }

  submitForm(event: Event) {
    event.preventDefault();
    if (this.isFormValid()) {
      // En un caso real, aquí iría la lógica para enviar el formulario al servidor
      console.log('Formulario enviado', this.formData);
      this.formSubmitted = true;
      this.resetForm();
    }
  }

  resetForm() {
    this.formData = {
      name: '',
      email: '',
      phone: '',
      company: '',
      subject: '',
      message: '',
      privacy: false
    };
  }

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}