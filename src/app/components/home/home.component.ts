import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { ScrollService } from '../../services/scroll.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="hero">
      <div class="container">
        <div class="hero-content">
          <h1 class="animate-fade-in">Soluciones Integrales en Impresión</h1>
          <p class="hero-subtitle animate-fade-in">
            Venta, Renta y Reparación de equipos.
          </p>
          <div class="hero-buttons animate-fade-in">
            <a routerLink="/productos" class="btn btn-primary">Ver Productos</a>
            <a routerLink="/servicios" class="btn btn-outline"
              >Nuestros Servicios</a
            >
          </div>
        </div>
        <div class="hero-image animate-fade-in">
          <img
            src="https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt="Impresora moderna"
          />
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="section-header">
          <h2>¿Por qué elegirnos?</h2>
          <p>
            Expertos en soluciones de impresión con más de 15 años de
            experiencia
          </p>
        </div>

        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-check-circle"></i>
            </div>
            <h3>Calidad Garantizada</h3>
            <p>Productos originales y certificados con garantía extendida</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-truck"></i>
            </div>
            <h3>Entrega Rápida</h3>
            <p>Envíos en 24-48 horas a cualquier parte del país</p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-tools"></i>
            </div>
            <h3>Soporte Técnico</h3>
            <p>
              Equipo de técnicos certificados para resolver cualquier problema
            </p>
          </div>

          <div class="feature-card">
            <div class="feature-icon">
              <i class="fas fa-headset"></i>
            </div>
            <h3>Atención Personalizada</h3>
            <p>Asesoría especializada para encontrar la mejor solución</p>
          </div>
        </div>
      </div>
    </section>

    <section class="products-preview">
      <div class="container">
        <div class="section-header">
          <h2>Algunas de nuestras impresoras</h2>
          <p>
            Equipos de impresión de última generación para todas tus necesidades
          </p>
        </div>

        <div class="products-slider">
          <div class="product-card" *ngFor="let product of featuredProducts">
            <div class="product-image">
              <img [src]="product.image" [alt]="product.name" />
              <div
                class="product-badges"
                *ngIf="product.isNew || product.discount"
              >
                <span class="badge new" *ngIf="product.isNew">NUEVO</span>
              
              </div>
            </div>
            <div class="product-info">
              <h3>{{ product.name }}</h3>
              <p class="product-category">{{ product.category }}</p>
              <div class="product-price">
              </div>
              <a [routerLink]="['/productos']" class="btn product-btn">Ver Detalles</a>

            </div>
          </div>
        </div>
        <

        <div class="text-center mt-4">
          <a routerLink="/productos" class="btn btn-primary"
            >Ver Todos los Productos</a
          >
        </div>
      </div>
    </section>

    <section class="services-preview">
      <div class="container">
        <div class="section-header">
          <h2>Servicios Profesionales</h2>
          <p>
            Soluciones completas para mantener tus equipos funcionando
            perfectamente
          </p>
        </div>

        <div class="services-grid">
          <div class="service-card" *ngFor="let service of services">
            <div class="service-icon">
              <i [class]="service.icon"></i>
            </div>
            <h3>{{ service.title }}</h3>
            <p>{{ service.description }}</p>
            <a [routerLink]="['/servicios']" class="service-link">
  Más información <i class="fas fa-arrow-right"></i>
</a>

          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <div class="cta-content">
          <h2>¿Listo para mejorar tu experiencia de impresión?</h2>
          <p>Contáctanos hoy mismo y descubre cómo podemos ayudarte</p>
          <a routerLink="/contacto" class="btn btn-cta">Solicitar Cotización</a>
        </div>
      </div>
    </section>

    <section class="brands">
      <div class="container">
        <div class="section-header">
          <h2>Marcas que comercializamos</h2>
        </div>

        <div class="brands-slider">
          <div class="brand-logo" *ngFor="let brand of brands">
            <img [src]="brand.logo" [alt]="brand.name" />
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [
    `
      .hero {
        min-height: 100vh;
        display: flex;
        align-items: center;
        padding: 8rem 0 5rem;
        position: relative;
        overflow: hidden;
        background: linear-gradient(135deg, #f8fafc 0%, #e2e8f0 100%);
      }

      .hero .container {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 2rem;
      }

      .hero-content {
        flex: 1;
      }

      .hero h1 {
        font-size: 3.5rem;
        font-weight: 700;
        line-height: 1.2;
        margin-bottom: 1.5rem;
        color: var(--text-color);
      }

      .hero-subtitle {
        font-size: 1.25rem;
        color: var(--light-text);
        margin-bottom: 2.5rem;
      }

      .hero-buttons {
        display: flex;
        gap: 1rem;
      }

      .hero-image {
        flex: 1;
        display: flex;
        justify-content: flex-end;
        position: relative;
      }

      .hero-image img {
        max-width: 100%;
        animation: float 6s ease-in-out infinite;
      }

      @keyframes float {
        0%,
        100% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-20px);
        }
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

      .features {
        padding: 6rem 0;
        background-color: var(--light-bg);
      }

      .features-grid {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }

      .feature-card {
        background: white;
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: var(--shadow);
        text-align: center;
        transition:
          transform 0.3s,
          box-shadow 0.3s;
      }

      .feature-card:hover {
        transform: translateY(-10px);
        box-shadow:
          0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }

      .feature-icon {
        width: 70px;
        height: 70px;
        background: var(--light-bg);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1.5rem;
        color: var(--primary-color);
        font-size: 1.75rem;
      }

      .feature-card h3 {
        font-size: 1.25rem;
        margin-bottom: 1rem;
      }

      .products-preview {
        padding: 6rem 0;
      }

      .products-slider {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }

      .product-card {
        background: white;
        border-radius: 1rem;
        overflow: hidden;
        box-shadow: var(--shadow);
        transition: transform 0.3s;
      }

      .product-card:hover {
        transform: translateY(-10px);
      }

      .product-image {
        position: relative;
        overflow: hidden;
        height: 220px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8fafc;
      }

      .product-image img {
        max-height: 100%;
        transition: transform 0.5s;
      }

      .product-card:hover .product-image img {
        transform: scale(1.1);
      }

      .product-badges {
        position: absolute;
        top: 1rem;
        left: 1rem;
        display: flex;
        gap: 0.5rem;
      }

      .badge {
        padding: 0.25rem 0.75rem;
        border-radius: 1rem;
        font-size: 0.75rem;
        font-weight: 600;
      }

      .badge.new {
        background: var(--primary-color);
        color: white;
      }

      .badge.discount {
        background: var(--danger-color);
        color: white;
      }

      .product-info {
        padding: 1.5rem;
      }

      .product-info h3 {
        font-size: 1.25rem;
        margin-bottom: 0.5rem;
      }

      .product-category {
        color: var(--light-text);
        font-size: 0.875rem;
        margin-bottom: 1rem;
      }

      .product-price {
        display: flex;
        align-items: center;
        gap: 0.75rem;
        margin-bottom: 1rem;
      }

      .current-price {
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--primary-color);
      }

      .old-price {
        font-size: 1rem;
        color: var(--light-text);
        text-decoration: line-through;
      }

      .product-btn {
        width: 100%;
      }

      .services-preview {
        padding: 6rem 0;
        background: var(--light-bg);
      }

      .services-grid {
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

      .service-card h3 {
        font-size: 1.5rem;
        margin-bottom: 1rem;
      }

      .service-card p {
        margin-bottom: 1.5rem;
        color: var(--light-text);
      }

      .service-link {
        font-weight: 500;
        display: inline-flex;
        align-items: center;
        gap: 0.5rem;
      }

      .service-link i {
        transition: transform 0.3s;
      }

      .service-link:hover i {
        transform: translateX(5px);
      }

      .testimonials {
        padding: 6rem 0;
      }

      .testimonials-slider {
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
        background: linear-gradient(
          135deg,
          var(--primary-color) 0%,
          var(--secondary-color) 100%
        );
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

      .btn-cta {
        background: white;
        color: var(--primary-color);
        font-size: 1.1rem;
        padding: 1rem 2.5rem;
      }

      .btn-cta:hover {
        background: rgba(255, 255, 255, 0.9);
        color: var(--primary-color);
      }

      .brands {
        padding: 4rem 0;
      }

      .brands-slider {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 2rem;
      }

      .brand-logo {
        max-width: 150px;
        opacity: 0.7;
        transition: opacity 0.3s;
      }

      .brand-logo:hover {
        opacity: 1;
      }

      @media (max-width: 1200px) {
        .hero h1 {
          font-size: 3rem;
        }

        .products-slider,
        .features-grid {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 992px) {
        .hero .container {
          flex-direction: column;
          text-align: center;
        }

        .hero-buttons {
          justify-content: center;
        }

        .features-grid,
        .products-slider {
          grid-template-columns: repeat(2, 1fr);
        }

        .services-grid,
        .testimonials-slider {
          grid-template-columns: 1fr;
        }
      }

      @media (max-width: 768px) {
        .hero h1 {
          font-size: 2.5rem;
        }

        .features-grid,
        .products-slider {
          grid-template-columns: 1fr;
        }
      }
    `,
  ],
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      name: 'IM C3000',
      category: 'RICOH',
      price: 7999,
      oldPrice: 8999,
      image: 'https://www.printer-warehouse.com/cdn/shop/products/IM_C2000_BaseModel_Left_DF3110_Cabinet_Type_F_e80e9260-f1f3-414d-9b3e-9598ca2c92fd_1024x1024.jpg?v=1592320610',
      isNew: true,
      discount: 11,
    },
    {
      id: 2,
      name: 'MP C3503',
      category: 'RICOH',
      price: 4599,
      oldPrice: null,
      image: 'https://imgs.search.brave.com/-4naykl0UGVCujkoUXwWL59z_IDeIrd-fplu0xe6qR8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzUxcjc3TTRBbzRM/LmpwZw',
      isNew: false,
      discount: null,
    },
    {
      id: 3,
      name: 'ECOSYS M3550',
      category: 'KYOCERA',
      price: 9899,
      oldPrice: 10999,
      image: 'https://imgs.search.brave.com/_SXW6aF9zoLwjxR-UiNlctZm1uFJE4Re6x0f0wPGgJk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pc2kt/c3RhdGljcy5ueWMz/LmRpZ2l0YWxvY2Vh/bnNwYWNlcy5jb20v/MjAyMC8wMi9FQ09T/WVMtTTM1NTBpZG4u/anBn',
      isNew: false,
      discount: 10,
    },
    {
      id: 4,
      name: 'BIZHUB 658',
      category: 'KONICA MINOLTA',
      price: 5299,
      oldPrice: null,
      image: 'https://imgs.search.brave.com/ABtXG8xvpOzPqbA11q54WcibC5Br3z0mudusB2qdPEE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMtbmEuc3NsLWlt/YWdlcy1hbWF6b24u/Y29tL2ltYWdlcy9J/LzQxTDA3bVhxRHZM/LmpwZw',
      isNew: true,
      discount: null,
    },
  ];

  services = [
    {
      id: 'reparacion',
      title: 'Reparación de Equipos',
      description:
        'Reparamos todo tipo de impresoras, plotters y equipos multifuncionales con tiempos de respuesta garantizados.',
      icon: 'fas fa-tools',
    },
    {
      id: 'mantenimiento',
      title: 'Mantenimiento Preventivo',
      description:
        'Planes de mantenimiento periódico para evitar fallas y prolongar la vida útil de tus equipos.',
      icon: 'fas fa-cogs',
    },
    {
      id: 'domicilio',
      title: 'Servicio a Domicilio',
      description:
        'Técnicos certificados que acuden a tu empresa u hogar para solucionar problemas in situ.',
      icon: 'fas fa-truck',
    },
  ];

  testimonials = [
    {
      name: 'Carlos Ramírez',
      position: 'Director de Operaciones',
      company: 'Grupo Comercial XYZ',
      text: 'Hemos trabajado con PrintMaster Solutions durante más de 5 años y siempre han resuelto nuestros problemas de impresión con rapidez y profesionalismo.',
      avatar: 'assets/images/testimonial-1.jpg',
    },
    {
      name: 'Ana Gómez',
      position: 'Gerente Administrativa',
      company: 'Consultores Asociados',
      text: 'El servicio de mantenimiento preventivo nos ha ahorrado mucho dinero en reparaciones. Altamente recomendables por su puntualidad y calidad.',
      avatar: 'assets/images/testimonial-2.jpg',
    },
    {
      name: 'Roberto Juárez',
      position: 'Propietario',
      company: 'Imprenta Digital Express',
      text: 'Las refacciones son de excelente calidad y el soporte técnico es inmejorable. Son un socio estratégico para nuestro negocio de impresión.',
      avatar: 'assets/images/testimonial-3.jpg',
    },
  ];

  brands = [
    {
      name: 'Ricoh',
      logo: 'https://1000marcas.net/wp-content/uploads/2020/03/Logo-Ricoh.png',
    },
    {
      name: 'Kyocera',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d4/Kyocera_logo.svg/1280px-Kyocera_logo.svg.png',
    },
    {
      name: 'Konica',
      logo: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Konica_Logo.svg',
    },
  ];
}
