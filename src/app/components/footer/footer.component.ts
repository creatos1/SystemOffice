import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  template: `
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-logo">
            <h2>System<span> Office</span></h2>
            <p>Soluciones integrales para impresión</p>
          </div>

          <div class="footer-links">
            <div class="footer-column">
              <h3>Empresa</h3>
              <ul>
                <li><a routerLink="/">Sobre Nosotros</a></li>
                <li><a routerLink="/contacto">Contacto</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Productos</h3>
              <ul>
                <li><a routerLink="/productos">Impresoras</a></li>
                <li><a routerLink="/productos">Refacciones</a></li>
                <li><a routerLink="/productos">Tintas y Toners</a></li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Servicios</h3>
              <ul>
                <li><a routerLink="/servicios">Reparación</a></li>
                <li>
                  <a routerLink="/servicios">Mantenimiento</a>
                </li>
                <li>
                  <a routerLink="/servicios">Servicio a Domicilio</a>
                </li>
              </ul>
            </div>

            <div class="footer-column">
              <h3>Contacto</h3>
              <p><strong>Email:</strong> ventas&#64;systemoffice.com.mx</p>
              <p><strong>Teléfono:</strong> +52 449 129 8900</p>
              <p>
                <strong>Dirección:</strong> Plazuela Q #102, Ojocaliente 1,
                Aguascalientes, Ags. CP 20196
              </p>
            </div>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2025 System Office. Todos los derechos reservados.</p>
          <div>
            Página desarrollada por Ian Axel Rodríguez Santoyo +524495526644
          </div>
        </div>
        
      </div>

    </footer>
  `,
  styles: [
    `
      .footer {
        background-color: #1a202c;
        color: white;
        padding: 4rem 0 1rem;
      }

      .footer-content {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      .footer-logo h2 {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
      }

      .footer-logo span {
        color: var(--primary-color);
      }

      .footer-links {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
      }

      .footer-column h3 {
        font-size: 1.2rem;
        margin-bottom: 1.5rem;
        position: relative;
      }

      .footer-column h3:after {
        content: '';
        position: absolute;
        bottom: -0.5rem;
        left: 0;
        width: 50px;
        height: 2px;
        background-color: var(--primary-color);
      }

      .footer-column ul {
        list-style: none;
        padding: 0;
      }

      .footer-column li {
        margin-bottom: 0.75rem;
      }

      .footer-column a {
        color: #cbd5e0;
        transition: color 0.3s;
      }

      .footer-column a:hover {
        color: var(--primary-color);
      }

      .footer-column p {
        color: #cbd5e0;
        margin-bottom: 0.75rem;
      }

      .footer-bottom {
        margin-top: 3rem;
        padding-top: 1.5rem;
        border-top: 1px solid #2d3748;
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .social-icons {
        display: flex;
        gap: 1rem;
      }

      .social-icons a {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: 36px;
        height: 36px;
        border-radius: 50%;
        background-color: #2d3748;
        color: white;
        transition:
          background-color 0.3s,
          transform 0.3s;
      }

      .social-icons a:hover {
        background-color: var(--primary-color);
        transform: translateY(-3px);
      }

      @media (max-width: 992px) {
        .footer-links {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 576px) {
        .footer-links {
          grid-template-columns: 1fr;
        }

        .footer-bottom {
          flex-direction: column;
          gap: 1rem;
          text-align: center;
        }
      }
    `,
  ],
})
export class FooterComponent {}
