import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

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
                <a href="tel:+524491298900" class="btn btn-primary product-btn"
                  >Cotizar</a
                >
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
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 0.75rem;
      }

      .product-btn {
        font-size: 0.875rem;
        padding: 0.5rem 0;
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
    /*  
    const categorias = [
      {
        name: 'Multifuncionales', // Nombre de la categoría
        slug: 'multifuncionales', // Identificador único para URL
        icon: 'fas fa-copy', // Clases de FontAwesome para el icono
        productCount: 18, // Número de productos en esta categoría
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

    console.log(categorias); // Imprime la lista de categorías en la consola
    */
  ];

  products = [
    {
      id: 1,
      name: 'HP LaserJet Pro M404dw',
      category: 'Impresora Láser',
      brand: 'hp',
      price: 7999,
      oldPrice: 8999,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: true,
      discount: 11,
      rating: 4.8,
      reviewCount: 124,
    },
    {
      id: 2,
      name: 'Epson EcoTank L3250',
      category: 'Impresora Multifuncional',
      brand: 'epson',
      price: 4599,
      oldPrice: null,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: false,
      discount: null,
      rating: 4.6,
      reviewCount: 89,
    },
    {
      id: 3,
      name: 'Brother MFC-L3750CDW',
      category: 'Impresora Láser Color',
      brand: 'brother',
      price: 9899,
      oldPrice: 10999,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: false,
      discount: 10,
      rating: 4.7,
      reviewCount: 78,
    },
    {
      id: 4,
      name: 'Canon PIXMA G6020',
      category: 'Impresora de Inyección',
      brand: 'canon',
      price: 5299,
      oldPrice: null,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: true,
      discount: null,
      rating: 4.5,
      reviewCount: 65,
    },
    {
      id: 5,
      name: 'Xerox VersaLink C500',
      category: 'Impresora Láser Color',
      brand: 'xerox',
      price: 14999,
      oldPrice: 16999,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: false,
      discount: 12,
      rating: 4.9,
      reviewCount: 37,
    },
    {
      id: 6,
      name: 'Samsung Xpress M2020W',
      category: 'Impresora Láser',
      brand: 'samsung',
      price: 2599,
      oldPrice: 2999,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: false,
      discount: 13,
      rating: 4.3,
      reviewCount: 142,
    },
    {
      id: 7,
      name: 'HP DesignJet T650',
      category: 'Plotter',
      brand: 'hp',
      price: 24999,
      oldPrice: null,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: true,
      discount: null,
      rating: 4.7,
      reviewCount: 19,
    },
    {
      id: 8,
      name: 'Epson SureColor T3170',
      category: 'Plotter',
      brand: 'epson',
      price: 19999,
      oldPrice: 21999,
      image:
        'https://www.tiendaepson.com.mx/media/catalog/product/P/T/PT336EPS76_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=549&width=549&canvas=549:549',
      isNew: false,
      discount: 9,
      rating: 4.6,
      reviewCount: 28,
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

  filteredProducts = [...this.products];
  currentPage = 1;
  itemsPerPage = 8;
  totalPages = Math.ceil(this.products.length / this.itemsPerPage);

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
      } else if (type === 'price') {
        if (value === '0-3000') {
          this.filteredProducts = this.products.filter(
            (product) => product.price <= 3000,
          );
        } else if (value === '3000-6000') {
          this.filteredProducts = this.products.filter(
            (product) => product.price > 3000 && product.price <= 6000,
          );
        } else if (value === '6000-10000') {
          this.filteredProducts = this.products.filter(
            (product) => product.price > 6000 && product.price <= 10000,
          );
        } else if (value === '10000+') {
          this.filteredProducts = this.products.filter(
            (product) => product.price > 10000,
          );
        }
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

  changePage(page: number) {
    this.currentPage = page;
  }

  paginationArray() {
    return Array.from({ length: this.totalPages }, (_, i) => i + 1);
  }
}
