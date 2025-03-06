import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-header">
      <div class="container">
        <h1>Nuestros Servicios</h1>
        <p>Soluciones profesionales para el mantenimiento y optimización de tus equipos</p>
      </div>
    </section>

    <section class="services-overview">
      <div class="container">
        <div class="overview-content">
          <div class="overview-text">
            <h2>Servicio técnico especializado de impresoras</h2>
            <p class="lead">En PrintMaster Solutions entendemos la importancia de mantener tus equipos de impresión funcionando correctamente. Por eso, ofrecemos servicios técnicos de alta calidad realizados por profesionales certificados.</p>
            <p>Nuestro equipo de técnicos cuenta con más de 15 años de experiencia en la industria y está capacitado para resolver cualquier problema en tus equipos de impresión, desde impresoras de pequeño formato hasta plotters industriales.</p>
            <div class="stats-grid">
              <div class="stat-item">
                <div class="stat-number">15+</div>
                <div class="stat-text">Años de experiencia</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">2,500+</div>
                <div class="stat-text">Clientes satisfechos</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">98%</div>
                <div class="stat-text">Tasa de resolución</div>
              </div>
              <div class="stat-item">
                <div class="stat-number">24h</div>
                <div class="stat-text">Tiempo de respuesta</div>
              </div>
            </div>
          </div>
          <div class="overview-image">
            <img src="assets/images/service-tech.jpg" alt="Técnico de servicio" />
          </div>
        </div>
      </div>
    </section>

    <section class="services-grid">
      <div class="container">
        <div class="section-header">
          <h2>Servicios que ofrecemos</h2>
          <p>Nuestros servicios están diseñados para cubrir todas tus necesidades de impresión</p>
        </div>

        <div class="services-list">
          <div class="service-card" *ngFor="let service of services">
            <div class="service-icon">
              <i [class]="service.icon"></i>
            </div>
            <div class="service-image">
              <img [src]="service.image" [alt]="service.title">
            </div>
            <h3>{{service.title}}</h3>
            <p>{{service.description}}</p>
            <ul class="service-features">
              <li *ngFor="let feature of service.features">
                <i class="fas fa-check"></i> {{feature}}
              </li>
            </ul>
            <div class="service-price" *ngIf="service.price">
              <span>Desde</span>
              <div class="price">\${{service.price}}</div>
            </div>
            <a [routerLink]="['/contacto']" class="btn btn-primary">Solicitar Servicio</a>
          </div>
        </div>
      </div>
    </section>

    <section class="service-process">
      <div class="container">
        <div class="section-header">
          <h2>Nuestro Proceso</h2>
          <p>Cómo trabajamos para garantizar un servicio de calidad</p>
        </div>

        <div class="process-steps">
          <div class="step" *ngFor="let step of processSteps; let i = index">
            <div class="step-number">{{i + 1}}</div>
            <div class="step-content">
              <h3>{{step.title}}</h3>
              <p>{{step.description}}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="faq">
      <div class="container">
        <div class="section-header">
          <h2>Preguntas Frecuentes</h2>
          <p>Respuestas a las dudas más comunes sobre nuestros servicios</p>
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

    <section class="testimonials">
      <div class="container">
        <div class="section-header">
          <h2>Clientes Satisfechos</h2>
          <p>Lo que dicen nuestros clientes sobre nuestros servicios</p>
        </div>

        <div class="testimonials-grid">
          <div class="testimonial-card" *ngFor="let testimonial of testimonials">
            <div class="testimonial-rating">
              <i class="fas fa-star" *ngFor="let star of [1, 2, 3, 4, 5]"></i>
            </div>
            <p class="testimonial-text">"{{testimonial.text}}"</p>
            <div class="testimonial-author">
              <img [src]="testimonial.avatar" [alt]="testimonial.name" class="testimonial-avatar" />
              <div class="testimonial-info">
                <h4>{{testimonial.name}}</h4>
                <p>{{testimonial.position}}, {{testimonial.company}}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>¿Necesitas ayuda con tus equipos de impresión?</h2>
          <p>Contáctanos para recibir soporte profesional y resolver tus problemas rápidamente</p>
          <div class="cta-buttons">
            <a routerLink="/contacto" class="btn btn-primary">Solicitar Servicio</a>
            <a href="tel:5512345678" class="btn btn-outline">Llamar Ahora</a>
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

    .services-overview {
      padding: 6rem 0;
    }

    .overview-content {
      display: flex;
      align-items: center;
      gap: 4rem;
    }

    .overview-text {
      flex: 1;
    }

    .overview-text h2 {
      font-size: 2.5rem;
      margin-bottom: 1.5rem;
      position: relative;
    }

    .overview-text h2:after {
      content: '';
      position: absolute;
      bottom: -10px;
      left: 0;
      width: 80px;
      height: 3px;
      background: var(--primary-color);
    }

    .lead {
      font-size: 1.25rem;
      color: var(--text-color);
      margin-bottom: 1.5rem;
      line-height: 1.5;
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem;
      margin-top: 3rem;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      font-size: 2.5rem;
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: 0.5rem;
    }

    .stat-text {
      font-size: 0.875rem;
      color: var(--light-text);
    }

    .overview-image {
      flex: 1;
    }

    .overview-image img {
      width: 100%;
      border-radius: 1rem;
      box-shadow: var(--shadow);
    }

    .services-grid {
      padding: 6rem 0;
      background-color: var(--light-bg);
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

    .services-list {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .service-card {
      background: white;
      padding: 2.5rem;
      border-radius: 1rem;
      box-shadow: var(--shadow);
      transition: transform 0.3s;
    }

    .service-card:hover {
      transform: translateY(-10px);
    }

    .service-icon {
      width: 80px;
      height: 80px;
      background: var(--light-bg);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 1.5rem;
      color: var(--primary-color);
      font-size: 2rem;
    }
    .service-image {
      margin-bottom: 1.5rem;
    }
    .service-image img {
      width: 100%;
      height: auto;
    }

    .service-card h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .service-card p {
      margin-bottom: 1.5rem;
      color: var(--light-text);
    }

    .service-features {
      list-style: none;
      padding: 0;
      margin-bottom: 1.5rem;
    }

    .service-features li {
      margin-bottom: 0.75rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }

    .service-features i {
      color: var(--success-color);
    }

    .service-price {
      display: flex;
      align-items: baseline;
      gap: 0.5rem;
      margin-bottom: 1.5rem;
    }

    .service-price span {
      font-size: 0.875rem;
      color: var(--light-text);
    }

    .service-price .price {
      font-size: 1.75rem;
      font-weight: 700;
      color: var(--primary-color);
    }

    .service-process {
      padding: 6rem 0;
    }

    .process-steps {
      max-width: 800px;
      margin: 0 auto;
      position: relative;
    }

    .process-steps:before {
      content: '';
      position: absolute;
      top: 0;
      bottom: 0;
      left: 39px;
      width: 2px;
      background: var(--border-color);
    }

    .step {
      display: flex;
      gap: 2rem;
      margin-bottom: 3rem;
      position: relative;
    }

    .step:last-child {
      margin-bottom: 0;
    }

    .step-number {
      width: 80px;
      height: 80px;
      background: var(--primary-color);
      color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 1.75rem;
      font-weight: 700;
      position: relative;
      z-index: 1;
    }

    .step-content {
      flex: 1;
      padding-top: 1rem;
    }

    .step-content h3 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    .faq {
      padding: 6rem 0;
      background-color: var(--light-bg);
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

    .testimonials {
      padding: 6rem 0;
    }

    .testimonials-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 2rem;
    }

    .testimonial-card {
      background: white;
      padding: 2rem;
      border-radius: 1rem;
      box-shadow: var(--shadow);
    }

    .testimonial-rating {
      color: #f59e0b;
      margin-bottom: 1rem;
    }

    .testimonial-text {
      font-style: italic;
      margin-bottom: 1.5rem;
    }

    .testimonial-author {
      display: flex;
      align-items: center;
      gap: 1rem;
    }

    .testimonial-avatar {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      object-fit: cover;
    }

    .testimonial-info h4 {
      font-size: 1.1rem;
      margin-bottom: 0.25rem;
    }

    .testimonial-info p {
      font-size: 0.875rem;
      color: var(--light-text);
    }

    .cta {
      padding: 5rem 0;
      background: linear-gradient(135deg, var(--primary-color) 0%, var(--secondary-color) 100%);
      color: white;
      text-align: center;
    }

    .cta-content {
      max-width: 800px;
      margin: 0 auto;
    }

    .cta h2 {
      font-size: 2.5rem;
      margin-bottom: 1rem;
      color: white;
    }

    .cta p {
      font-size: 1.25rem;
      margin-bottom: 2rem;
      opacity: 0.9;
    }

    .cta-buttons {
      display: flex;
      justify-content: center;
      gap: 1rem;
    }

    .btn-outline {
      background: transparent;
      border: 2px solid white;
      color: white;
    }

    .btn-outline:hover {
      background: white;
      color: var(--primary-color);
    }

    @media (max-width: 992px) {
      .overview-content {
        flex-direction: column;
        gap: 2rem;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .services-list,
      .testimonials-grid {
        grid-template-columns: 1fr;
      }
    }

    @media (max-width: 768px) {
      .stats-grid {
        grid-template-columns: 1fr;
      }

      .cta-buttons {
        flex-direction: column;
        gap: 1rem;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'Reparación de Impresoras',
      description: 'Servicio técnico especializado para todo tipo de impresoras y multifuncionales con diagnóstico gratuito.',
      icon: 'fas fa-tools',
      image: 'https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      features: ['Diagnóstico gratuito', 'Garantía de 3 meses', 'Refacciones originales', 'Servicio a domicilio'],
      price: '499.00'
    },
    {
      title: 'Mantenimiento Preventivo',
      description: 'Planes de mantenimiento regulares para evitar fallas y prolongar la vida útil de sus equipos.',
      icon: 'fas fa-shield-alt',
      image: 'https://images.unsplash.com/photo-1580901368919-7738efb0f87e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      features: ['Limpieza profunda', 'Lubricación de partes', 'Calibración', 'Reporte de estado'],
      price: '699.00'
    },
    {
      title: 'Venta de Consumibles',
      description: 'Tóners, cartuchos, tintas y refacciones originales y compatibles con garantía de calidad.',
      icon: 'fas fa-shopping-cart',
      image: 'https://images.unsplash.com/photo-1565625415377-8a88517a80f2?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      features: ['Entrega a domicilio', 'Facturación inmediata', 'Mayoreo y menudeo', 'Marcas originales'],
      price: '299.00'
    },
    {
      title: 'Renta de Equipos',
      description: 'Soluciones de impresión por volumen con equipos de última generación y soporte técnico incluido.',
      icon: 'fas fa-handshake',
      image: 'https://images.unsplash.com/photo-1581091877078-3549eda705e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      features: ['Contratos flexibles', 'Mantenimiento incluido', 'Consumibles incluidos', 'Soporte técnico 24/7'],
      price: '1,499.00'
    },
    {
      title: 'Digitalización de Documentos',
      description: 'Conversión de archivos físicos a digitales con sistemas de organización y búsqueda eficientes.',
      icon: 'fas fa-file-alt',
      image: 'https://images.unsplash.com/photo-1576455136694-b9dcdb48d6ee?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      features: ['OCR incluido', 'Indexado de documentos', 'Almacenamiento en la nube', 'Confidencialidad garantizada'],
      price: '2.50'
    },
    {
      title: 'Soporte Remoto',
      description: 'Asistencia técnica a distancia para resolver problemas de configuración e instalación.',
      icon: 'fas fa-laptop',
      image: 'https://images.unsplash.com/photo-1573496130407-57329f01f769?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60',
      features: ['Respuesta inmediata', 'Conexión segura', 'Asistencia en tiempo real', 'Disponible 24/7'],
      price: '299.00'
    }
  ];

  processSteps = [
    {
      title: 'Solicitud de Servicio',
      description: 'Comunícate con nosotros por teléfono, correo electrónico o a través de nuestro formulario en línea para solicitar asistencia técnica.'
    },
    {
      title: 'Diagnóstico',
      description: 'Realizamos un diagnóstico completo para identificar el problema exacto. En servicios a domicilio, el técnico lo realiza en el lugar.'
    },
    {
      title: 'Presupuesto',
      description: 'Te presentamos un presupuesto detallado con los costos de las refacciones y mano de obra para tu aprobación.'
    },
    {
      title: 'Reparación',
      description: 'Nuestros técnicos certificados realizan la reparación utilizando refacciones originales o compatibles de alta calidad.'
    },
    {
      title: 'Pruebas y Entrega',
      description: 'Realizamos pruebas exhaustivas para garantizar que todo funcione correctamente antes de entregar el equipo.'
    }
  ];

  faqs = [
    {
      question: '¿Cuánto tiempo toma la reparación de una impresora?',
      answer: 'El tiempo de reparación depende del tipo de problema y disponibilidad de refacciones. En casos sencillos, podemos resolver el problema en 24-48 horas. Para reparaciones más complejas, el tiempo estimado es de 3 a 5 días hábiles.',
      isOpen: false
    },
    {
      question: '¿Ofrecen garantía en sus servicios?',
      answer: 'Sí, todos nuestros servicios de reparación incluyen garantía de 30 días en mano de obra. Las refacciones instaladas tienen garantía del fabricante que va desde 3 hasta 12 meses dependiendo del componente.',
      isOpen: false
    },
    {
      question: '¿Trabajan con todas las marcas de impresoras?',
      answer: 'Sí, nuestros técnicos están capacitados para trabajar con todas las marcas principales incluyendo HP, Canon, Epson, Brother, Xerox, Samsung, Lexmark, Kyocera, Ricoh, entre otras.',
      isOpen: false
    },
    {
      question: '¿Cuál es el costo del diagnóstico?',
      answer: 'El diagnóstico es gratuito cuando se realiza en nuestro taller. Para servicios a domicilio, tiene un costo de $299 que se descuenta del costo total si se procede con la reparación.',
      isOpen: false
    },
    {
      question: '¿Tienen servicio de recogida y entrega?',
      answer: 'Sí, ofrecemos servicio de recogida y entrega con costo adicional dependiendo de la zona geográfica. Este servicio debe solicitarse al momento de agendar la reparación.',
      isOpen: false
    }
  ];

  testimonials = [
    {
      name: 'Laura Martínez',
      position: 'Gerente de IT',
      company: 'Constructora Moderna',
      text: 'El servicio de reparación fue rápido y efectivo. En menos de 24 horas teníamos nuestras impresoras funcionando perfectamente de nuevo.',
      avatar: 'https://randomuser.me/api/portraits/women/58.jpg'
    },
    {
      name: 'Miguel Sánchez',
      position: 'Dueño',
      company: 'Papelería Central',
      text: 'Los consumibles que distribuyen son de excelente calidad. Nunca hemos tenido problemas con manchas o fallos y el rendimiento es superior.',
      avatar: 'https://randomuser.me/api/portraits/men/65.jpg'
    },
    {
      name: 'Patricia Hernández',
      position: 'Administradora',
      company: 'Despacho Jurídico Hernández',
      text: 'La digitalización de nuestro archivo histórico fue un proceso impecable. El sistema de búsqueda nos ha ahorrado horas de trabajo.',
      avatar: 'https://randomuser.me/api/portraits/women/74.jpg'
    }
  ];

  toggleFaq(index: number) {
    this.faqs[index].isOpen = !this.faqs[index].isOpen;
  }
}