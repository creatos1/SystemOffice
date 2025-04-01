import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PrinterService } from '../../services/printer.service';
import { Printer } from '../../models/printer.interface';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, RouterLink],
  template: `
    <section class="page-header">
      <div class="container">
        <h1>Nuestros Productos</h1>
        <p>
          Descubre nuestra amplia gama de equipos y suministros de impresión
        </p>
      </div>
    </section>

    <section class="products-grid">
      <div class="container">
        <div class="product-categories">
          <h2>Categorías Populares</h2>
          <div class="categories-grid">
            <a
              class="category-card"
              *ngFor="let category of categories"
              [routerLink]="['/productos/categoria', category.slug]"
            >
              <div class="category-icon">
                <i [class]="category.icon"></i>
              </div>
              <h3>{{ category.name }}</h3>
              <p>{{ category.productCount }} productos</p>
            </a>
          </div>
        </div>

        <div class="products-list">
          <h2>Nuestras Impresoras</h2>

          <div class="products-wrapper">
            <div class="product-card" *ngFor="let product of filteredProducts">
              <div class="product-image">
                <img [src]="product.image" [alt]="product.name" />
                <div
                  class="product-badges"
                  *ngIf="product.isNew || product.discount"
                >
                  <span class="badge new" *ngIf="product.isNew">NUEVO</span>
                  <span class="badge discount" *ngIf="product.discount"
                    >-{{ product.discount }}%</span
                  >
                </div>
                <div class="product-actions">
                  <button class="action-btn" title="Vista rápida">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="action-btn" title="Comparar">
                    <i class="fas fa-exchange-alt"></i>
                  </button>
                  <button class="action-btn" title="Favorito">
                    <i class="far fa-heart"></i>
                  </button>
                  <button (click)="showDescription(product)" class="action-btn" title="Mostrar Descripción">
                    <i class="fas fa-info-circle"></i>
                  </button>
                </div>
              </div>
              <div class="product-info">
                <span class="product-category">{{ product.category }}</span>
                <h3>{{ product.name }}</h3>
                <div class="product-rating">
                  <i
                    class="fas fa-star"
                    *ngFor="let star of [1, 2, 3, 4, 5]; let i = index"
                    [class.far]="i >= product.rating"
                  ></i>
                  <span class="rating-count">({{ product.reviewCount }})</span>
                </div>
                <div class="product-buttons">
                  <a href="tel:+524491298900" class="btn btn-primary product-btn">Cotizar</a>
                  <button class="btn btn-secondary product-btn" (click)="showDetails(product)">Detalles</button>
                </div>
              </div>
            </div>
          </div>

          <div class="pagination">
            <button
              class="pagination-btn prev"
              [disabled]="currentPage === 1"
              (click)="changePage(currentPage - 1)"
            >
              <i class="fas fa-chevron-left"></i> Anterior
            </button>
            <div class="pagination-numbers">
              <button
                class="pagination-num"
                *ngFor="let page of paginationArray()"
                [class.active]="page === currentPage"
                (click)="changePage(page)"
              >
                {{ page }}
              </button>
            </div>
            <button
              class="pagination-btn next"
              [disabled]="currentPage === totalPages"
              (click)="changePage(currentPage + 1)"
            >
              Siguiente <i class="fas fa-chevron-right"></i>
            </button>
          </div>
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

    <div class="modal" [class.show]="showModal">
      <div class="modal-content">
        <span class="close" (click)="closeModal()">&times;</span>
        <h2>{{ selectedPrinter?.name }}</h2>
        <p>{{ selectedPrinter?.description }}</p> </div>
    </div>
    <div class="modal" [class.show]="showDetailsModal">
      <div class="modal-content">
        <span class="close" (click)="closeDetailsModal()">&times;</span>
        <h2>{{ selectedProduct?.name }}</h2>
        <p>{{ selectedProduct?.description }}</p>
      </div>
    </div>
  `,
  styles: [
    `
      .page-header {
        padding: 10rem 0 6rem;
        background: linear-gradient(
          135deg,
          var(--primary-color) 0%,
          var(--secondary-color) 100%
        );
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

      .products-filter {
        padding: 2rem 0;
        background: white;
        box-shadow:
          0 4px 6px -1px rgba(0, 0, 0, 0.1),
          0 2px 4px -1px rgba(0, 0, 0, 0.06);
        position: relative;
        z-index: 10;
      }

      .filter-wrapper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 1.5rem;
      }

      .filter-options {
        display: flex;
        align-items: center;
        gap: 1rem;
        flex-wrap: wrap;
      }

      .filter-group {
        display: flex;
        align-items: center;
        gap: 0.5rem;
      }

      .filter-group label {
        font-weight: 500;
      }

      .filter-group select {
        padding: 0.5rem 2rem 0.5rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: 0.375rem;
        background-color: white;
        font-size: 0.875rem;
        appearance: none;
        background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3E%3Cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3E%3C/svg%3E");
        background-position: right 0.5rem center;
        background-repeat: no-repeat;
        background-size: 1.5em 1.5em;
      }

      .filter-search {
        position: relative;
        width: 300px;
      }

      .filter-search input {
        width: 100%;
        padding: 0.75rem 3rem 0.75rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: 0.375rem;
        font-size: 0.875rem;
      }

      .filter-search .search-btn {
        position: absolute;
        right: 0;
        top: 0;
        height: 100%;
        width: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: transparent;
        color: var(--light-text);
        cursor: pointer;
      }

      .products-grid {
        padding: 4rem 0;
      }

      .product-categories {
        margin-bottom: 4rem;
      }

      .product-categories h2,
      .products-list h2,
      .product-brands h2 {
        font-size: 2rem;
        margin-bottom: 2rem;
        position: relative;
        display: inline-block;
      }

      .product-categories h2:after,
      .products-list h2:after,
      .product-brands h2:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 60px;
        height: 3px;
        background: var(--primary-color);
      }

      .categories-grid {
        display: grid;
        grid-template-columns: repeat(6, 1fr);
        gap: 1.5rem;
      }

      .category-card {
        background: white;
        border: 1px solid var(--border-color);
        border-radius: 0.5rem;
        padding: 1.5rem;
        text-align: center;
        transition:
          transform 0.3s,
          box-shadow 0.3s;
        text-decoration: none;
        color: var(--text-color);
      }

      .category-card:hover {
        transform: translateY(-5px);
        box-shadow: var(--shadow);
        border-color: transparent;
      }

      .category-icon {
        width: 60px;
        height: 60px;
        background: var(--light-bg);
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin: 0 auto 1rem;
        color: var(--primary-color);
        font-size: 1.5rem;
      }

      .category-card h3 {
        font-size: 1rem;
        margin-bottom: 0.5rem;
      }

      .category-card p {
        font-size: 0.875rem;
        color: var(--light-text);
      }

      .products-wrapper {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 2rem;
        margin-bottom: 3rem;
      }

      .product-card {
        background: white;
        border-radius: 0.5rem;
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
        height: 240px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f8fafc;
      }

      .product-image img {
        max-height: 80%;
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

      .product-actions {
        position: absolute;
        top: 1rem;
        right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 0.5rem;
        transform: translateX(60px);
        transition: transform 0.3s;
      }

      .product-card:hover .product-actions {
        transform: translateX(0);
      }

      .action-btn {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        background: white;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--text-color);
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        cursor: pointer;
        transition:
          background 0.3s,
          color 0.3s;
      }

      .action-btn:hover {
        background: var(--primary-color);
        color: white;
      }

      .product-info {
        padding: 1.5rem;
      }

      .product-category {
        display: block;
        font-size: 0.875rem;
        color: var(--light-text);
        margin-bottom: 0.5rem;
      }

      .product-info h3 {
        font-size: 1.1rem;
        margin-bottom: 0.75rem;
        line-height: 1.4;
        min-height: 3rem;
      }

      .product-rating {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
        font-size: 0.875rem;
        color: #f59e0b;
      }

      .rating-count {
        margin-left: 0.5rem;
        color: var(--light-text);
      }

      .product-buttons {
        display: flex;
        gap: 1rem;
        margin-top: 1rem;
      }

      .product-btn {
        flex: 1;
        padding: 0.5rem 1rem;
        text-align: center;
        text-decoration: none;
      }

      .btn-secondary {
        background: #f3f4f6;
        color: var(--text-color);
        border: 1px solid #e5e7eb;
      }

      .btn-secondary:hover {
        background: #e5e7eb;
      }

      .pagination {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1rem;
      }

      .pagination-btn {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        padding: 0.5rem 1rem;
        border: 1px solid var(--border-color);
        border-radius: 0.375rem;
        background: white;
        font-weight: 500;
        cursor: pointer;
        transition:
          background-color 0.3s,
          color 0.3s;
      }

      .pagination-btn:not(:disabled):hover {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      .pagination-btn:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }

      .pagination-numbers {
        display: flex;
        gap: 0.5rem;
      }

      .pagination-num {
        width: 40px;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid var(--border-color);
        border-radius: 0.375rem;
        background: white;
        cursor: pointer;
        transition:
          background-color 0.3s,
          color 0.3s;
      }

      .pagination-num:hover,
      .pagination-num.active {
        background-color: var(--primary-color);
        color: white;
        border-color: var(--primary-color);
      }

      .product-brands {
        padding: 4rem 0;
        background-color: var(--light-bg);
      }

      .product-brands .container {
        max-width: 1200px;
        margin: 0 auto;
        padding: 0 1rem;
      }

      .product-brands .section-header {
        text-align: center;
        margin-bottom: 3rem;
      }

      .product-brands h2 {
        font-size: 2.5rem;
        margin-bottom: 1rem;
        position: relative;
        display: inline-block;
      }

      .product-brands h2:after {
        content: '';
        position: absolute;
        bottom: -10px;
        left: 0;
        width: 100%;
        height: 3px;
        background: var(--primary-color);
      }

      .brands-slider {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: wrap;
        gap: 3rem;
      }

      .brand-logo {
        max-width: 150px;
        opacity: 0.7;
        transition: all 0.3s ease;
        filter: grayscale(100%);
      }

      .brand-logo:hover {
        opacity: 1;
        filter: grayscale(0);
        transform: scale(1.05);
      }

      @media (max-width: 1200px) {
        .categories-grid {
          grid-template-columns: repeat(4, 1fr);
        }

        .products-wrapper {
          grid-template-columns: repeat(3, 1fr);
        }
      }

      @media (max-width: 992px) {
        .categories-grid {
          grid-template-columns: repeat(3, 1fr);
        }

        .products-wrapper {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 768px) {
        .filter-wrapper {
          flex-direction: column;
          align-items: stretch;
        }

        .filter-search {
          width: 100%;
        }

        .categories-grid {
          grid-template-columns: repeat(2, 1fr);
        }
      }

      @media (max-width: 576px) {
        .products-wrapper {
          grid-template-columns: 1fr;
        }

        .categories-grid {
          grid-template-columns: 1fr;
        }
      }

      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.4);
      }

      .modal.show {
        display: block;
      }

      .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
      }

      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    `,
  ],
})
export class ProductsComponent {
  categories = [
    {
      name: 'Impresoras',
      slug: 'impresoras',
      icon: 'fas fa-print',
      productCount: 24,
    },
    {
      name: 'Multifuncionales',
      slug: 'multifuncionales',
      icon: 'fas fa-copy',
      productCount: 18,
    },
    {
      name: 'Escáners',
      slug: 'escaners',
      icon: 'fas fa-scanner',
      productCount: 12,
    },
    {
      name: 'Plotters',
      slug: 'plotters',
      icon: 'fas fa-drafting-compass',
      productCount: 8,
    },
    {
      name: 'Refacciones',
      slug: 'refacciones',
      icon: 'fas fa-cogs',
      productCount: 65,
    },
    {
      name: 'Tintas y Toners',
      slug: 'tintas',
      icon: 'fas fa-tint',
      productCount: 47,
    },
  ];

  products = [
    {
      id: 1,
      name: 'MP C2003',
      category: 'Impresora Multifuncional',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      image: 'assets/images/mp-c2003.jpg',
      isNew: false,
      rating: 4.5,
      reviewCount: 45,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '20 - 29 ppm',
        resolution: '1200 x 1200 px',
        tonerYieldBW: '15,000 impresiones',
        tonerYieldColor: '90,000 impresiones',
        monthlyDutyCycle: '600,000 pág. por mes'
      }
    },
    {
      id: 2,
      name: 'MP C4504',
      category: 'Impresora Multifuncional',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      image: 'assets/images/mp-c4504.jpg',
      isNew: false,
      rating: 4.7,
      reviewCount: 38,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '40 - 49 ppm',
        resolution: '1200 x 1200 px',
        tonerYieldBW: '33,000 impresiones',
        tonerYieldColor: '22,500 impresiones',
        monthlyDutyCycle: '80,000 pág. por mes'
      }
    },
    {
      id: 3,
      name: 'MP 6054',
      category: 'Impresora Multifuncional',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      image: 'assets/images/mp-6054.jpg',
      isNew: false,
      rating: 4.8,
      reviewCount: 52,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '60 - 69 ppm',
        resolution: '1200 x 1200 px',
        tonerYieldBW: '37,000 impresiones',
        monthlyDutyCycle: '300,000 impresiones'
      }
    },
    {
      id: 4,
      name: 'ECOSYS M3040',
      category: 'Impresora Multifuncional',
      brand: 'Kyocera',
      condition: 'Seminuevo',
      image: 'assets/images/ecosys-m3040.jpg',
      isNew: false,
      rating: 4.3,
      reviewCount: 29,
      characteristics: {
        paperSize: 'A4 (8.3" × 11.7")',
        color: 'Blanco y negro',
        speed: '40 - 49 ppm',
        resolution: '600 x 600 px',
        monthlyDutyCycle: '150,000 pág. por mes'
      }
    },
    {
      id: 5,
      name: 'ECOSYS M3550',
      category: 'Impresora Multifuncional',
      brand: 'Kyocera',
      condition: 'Seminuevo',
      image: 'assets/images/ecosys-m3550.jpg',
      isNew: false,
      rating: 4.6,
      reviewCount: 34,
      characteristics: {
        paperSize: 'A4 (8.3" × 11.7")',
        color: 'Blanco y negro',
        speed: '50 - 59 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '250,000 pág. por mes'
      }
    },
    {
      id: 6,
      name: 'bizhub C458',
      category: 'Impresora Multifuncional',
      brand: 'Konica Minolta',
      condition: 'Nuevo',
      image: 'assets/images/bizhub-c458.jpg',
      isNew: true,
      rating: 4.9,
      reviewCount: 15,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '45 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '150,000 pág. por mes'
      }
    },
    {
      id: 7,
      name: 'WorkForce Pro WF-C579R',
      category: 'Impresora Multifuncional',
      brand: 'Epson',
      condition: 'Nuevo',
      image: 'assets/images/wf-c579r.jpg',
      isNew: true,
      rating: 4.7,
      reviewCount: 23,
      characteristics: {
        paperSize: 'A4 (8.3" × 11.7")',
        color: 'Color',
        speed: '34 ppm',
        resolution: '4800 x 1200 px',
        monthlyDutyCycle: '75,000 pág. por mes'
      }
    },
    {
      id: 8,
      name: 'imageRUNNER 2630i',
      category: 'Impresora Multifuncional',
      brand: 'Canon',
      condition: 'Seminuevo',
      image: 'assets/images/ir-2630i.jpg',
      isNew: false,
      rating: 4.5,
      reviewCount: 42,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '30 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '100,000 pág. por mes'
      }
    },
    {
      id: 9,
      name: 'VersaLink C7030',
      category: 'Impresora Multifuncional',
      brand: 'Xerox',
      condition: 'Nuevo',
      image: 'assets/images/versalink-c7030.jpg',
      isNew: true,
      rating: 4.8,
      reviewCount: 19,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '30 ppm',
        resolution: '1200 x 2400 px',
        monthlyDutyCycle: '129,000 pág. por mes'
      }
    },
    {
      id: 10,
      name: 'IM C4500',
      category: 'Impresora Multifuncional',
      brand: 'Ricoh',
      condition: 'Nuevo',
      image: 'assets/images/im-c4500.jpg',
      isNew: true,
      rating: 4.9,
      reviewCount: 27,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '45 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '200,000 pág. por mes'
      }
    },
    {
      id: 11,
      name: 'TASKalfa 3253ci',
      category: 'Impresora Multifuncional',
      brand: 'Kyocera',
      condition: 'Nuevo',
      image: 'assets/images/taskalfa-3253ci.jpg',
      isNew: true,
      rating: 4.6,
      reviewCount: 31,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '32 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '175,000 pág. por mes'
      }
    },
    {
      id: 12,
      name: 'bizhub 458e',
      category: 'Impresora Multifuncional',
      brand: 'Konica Minolta',
      condition: 'Seminuevo',
      image: 'assets/images/bizhub-458e.jpg',
      isNew: false,
      rating: 4.4,
      reviewCount: 36,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '45 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '150,000 pág. por mes'
      }
    },
    {
      id: 13,
      name: 'Color C60',
      category: 'Impresora Producción',
      brand: 'Xerox',
      condition: 'Seminuevo',
      image: 'assets/images/color-c60.jpg',
      isNew: false,
      rating: 4.7,
      reviewCount: 22,
      characteristics: {
        paperSize: 'A3+ (13" × 19")',
        color: 'Color',
        speed: '60 ppm',
        resolution: '2400 x 2400 px',
        monthlyDutyCycle: '300,000 pág. por mes'
      }
    },
    {
      id: 14,
      name: 'Pro C5200s',
      category: 'Impresora Producción',
      brand: 'Ricoh',
      condition: 'Nuevo',
      image: 'assets/images/pro-c5200s.jpg',
      isNew: true,
      rating: 4.8,
      reviewCount: 17,
      characteristics: {
        paperSize: 'A3+ (13" × 19")',
        color: 'Color',
        speed: '65 ppm',
        resolution: '2400 x 4800 px',
        monthlyDutyCycle: '450,000 pág. por mes'
      }
    },
    {
      id: 15,
      name: 'AccurioPress C3070',
      category: 'Impresora Producción',
      brand: 'Konica Minolta',
      condition: 'Nuevo',
      image: 'assets/images/accurio-c3070.jpg',
      isNew: true,
      rating: 4.9,
      reviewCount: 12,
      characteristics: {
        paperSize: 'A3+ (13" × 19")',
        color: 'Color',
        speed: '70 ppm',
        resolution: '1200 x 3600 px',
        monthlyDutyCycle: '500,000 pág. por mes'
      }
    },
    {
      id: 16,
      name: 'imageRUNNER ADVANCE DX 6000i',
      category: 'Impresora Multifuncional',
      brand: 'Canon',
      condition: 'Nuevo',
      image: 'assets/images/ir-6000i.jpg',
      isNew: true,
      rating: 4.7,
      reviewCount: 8,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '60 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '250,000 pág. por mes'
      }
    },
    {
      id: 17,
      name: 'TASKalfa 7054ci',
      category: 'Impresora Multifuncional',
      brand: 'Kyocera',
      condition: 'Nuevo',
      image: 'assets/images/taskalfa-7054ci.jpg',
      isNew: true,
      rating: 4.8,
      reviewCount: 14,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '70 ppm',
        resolution: '4800 x 1200 px',
        monthlyDutyCycle: '300,000 pág. por mes'
      }
    },
    {
      id: 18,
      name: 'IM 8000',
      category: 'Impresora Multifuncional',
      brand: 'Ricoh',
      condition: 'Nuevo',
      image: 'assets/images/im-8000.jpg',
      isNew: true,
      rating: 4.9,
      reviewCount: 6,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '80 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '400,000 pág. por mes'
      }
    },
    {
      id: 19,
      name: 'VersaLink B7035',
      category: 'Impresora Multifuncional',
      brand: 'Xerox',
      condition: 'Seminuevo',
      image: 'assets/images/versalink-b7035.jpg',
      isNew: false,
      rating: 4.5,
      reviewCount: 25,
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '35 ppm',
        resolution: '1200 x 1200 px',
        monthlyDutyCycle: '153,000 pág. por mes'
      }
    },
    // Previous products...
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

  printers: Printer[] = [];
  filteredProducts: any[] = [];
  currentPage = 1;
  itemsPerPage = 9;
  totalPages = 1;
  showDetailsModal = false;
  selectedProduct: any = null;

  constructor(private printerService: PrinterService) {
    this.printers = this.printerService.getPrinters();
    this.products = this.printers.map(printer => ({
      id: parseInt(printer.id.replace(/\D/g, '')) || 1,
      name: printer.model,
      category: 'Impresora Multifuncional',
      brand: printer.brand,
      condition: printer.condition,
      image: printer.image,
      isNew: false,
      rating: 4.5,
      reviewCount: 0,
      characteristics: {
        paperSize: printer.characteristics.paperSize,
        color: printer.characteristics.color,
        speed: printer.characteristics.speed,
        resolution: printer.characteristics.resolution,
        monthlyDutyCycle: printer.characteristics.additionalFeatures?.monthlyDutyCycle || '150,000 pág. por mes'
      }
    }));
    this.filteredProducts = [...this.products];
    this.itemsPerPage = 9;
    this.totalPages = Math.ceil(this.filteredProducts.length / this.itemsPerPage);
    this.currentPage = 1;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  getCurrentPageProducts(): any[] {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.filteredProducts.slice(startIndex, endIndex);
  }

  showModal = false;
  selectedPrinter: any = null;

  filterProducts(type: string, event: Event) {
    const value = (event.target as HTMLSelectElement).value;

    if (value === 'all') {
      this.filteredProducts = [...this.products];
    } else {
      if (type === 'category') {
        this.filteredProducts = this.products.filter((product) =>
          product.category.toLowerCase().includes(value),
        );
      } else if (type === 'brand') {
        this.filteredProducts = this.products.filter(
          (product) => product.brand === value,
        );
      } else if (type === 'condition') {
        this.filteredProducts = this.products.filter(
          (product) => product.condition.toLowerCase() === value.toLowerCase()
        );
      }
    }

    this.totalPages = Math.ceil(
      this.filteredProducts.length / this.itemsPerPage,
    );
    this.currentPage = 1;
  }

  search(event: Event) {
    const value = (event.target as HTMLInputElement).value.toLowerCase();

    if (value.trim() === '') {
      this.filteredProducts = [...this.products];
    } else {
      this.filteredProducts = this.products.filter(
        (product) =>
          product.name.toLowerCase().includes(value) ||
          product.category.toLowerCase().includes(value),
      );
    }

    this.totalPages = Math.ceil(
      this.filteredProducts.length / this.itemsPerPage,
    );
    this.currentPage = 1;
  }

  changePage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
    }
  }

  paginationArray(): number[] {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }

  showDescription(printer: any) {
    this.selectedPrinter = printer;
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
    this.selectedPrinter = null;
  }

  showDetails(product: any) {
    this.selectedProduct = product;
    this.showDetailsModal = true;
  }

  closeDetailsModal() {
    this.showDetailsModal = false;
    this.selectedProduct = null;
  }
}