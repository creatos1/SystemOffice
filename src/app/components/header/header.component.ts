
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule],
  template: `
    <header class="header">
      <div class="container">
        <div class="header-content">
          <div class="logo">
            <a routerLink="/">
              <img src="../../../assets/images/logo.jpeg">
            </a>
          </div>
          
          <nav class="main-nav" [class.active]="menuOpen">
            <ul class="nav-list">
              <li><a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{exact: true}">Inicio</a></li>
              <li><a routerLink="/productos" routerLinkActive="active">Productos</a></li>
              <li><a routerLink="/servicios" routerLinkActive="active">Servicios</a></li>
              <li><a routerLink="/contacto" routerLinkActive="active">Contacto</a></li>
              <li><a routerLink="/soporte" routerLinkActive="active">Soporte</a></li>
            </ul>
          </nav>
          
          <div class="header-actions">
            
            <div class="menu-toggle" (click)="toggleMenu()">
              <span [class.active]="menuOpen"></span>
            </div>
          </div>
        </div>
      </div>
    </header>
  `,
  styles: [`

    .header {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      background-color: white;
      z-index: 1000;
      box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }
    
    .header-content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 80px;
    }
    
    .logo a {
      width:80%;
      display: flex;
      align-items: center;
      text-decoration: none;
    }
    
    .logo-text {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--text-color);
    }
    
    .logo-accent {
      font-size: 1.5rem;
      font-weight: 700;
      color: var(--primary-color);
      margin-left: 5px;
    }
    
    .main-nav {
      margin-left: 2rem;
    }
    
    .nav-list {
      display: flex;
      list-style: none;
      gap: 2rem;
    }
    
    .nav-list a {
      color: var(--text-color);
      font-weight: 500;
      position: relative;
      padding-bottom: 0.25rem;
    }
    
    .nav-list a:after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 2px;
      background-color: var(--primary-color);
      transition: width 0.3s;
    }
    
    .nav-list a:hover:after,
    .nav-list a.active:after {
      width: 100%;
    }
    
    .header-actions {
      display: flex;
      align-items: center;
      gap: 1rem;
    }
    
    .menu-toggle {
      display: none;
      width: 30px;
      height: 20px;
      position: relative;
      cursor: pointer;
    }
    
    .menu-toggle span, 
    .menu-toggle span:before, 
    .menu-toggle span:after {
      display: block;
      position: absolute;
      height: 3px;
      width: 100%;
      background: var(--text-color);
      border-radius: 3px;
      transition: all 0.3s ease;
    }
    
    .menu-toggle span {
      top: 50%;
      transform: translateY(-50%);
    }
    
    .menu-toggle span:before {
      content: '';
      top: -8px;
    }
    
    .menu-toggle span:after {
      content: '';
      bottom: -8px;
    }
    
    .menu-toggle span.active {
      background: transparent;
    }
    
    .menu-toggle span.active:before {
      transform: rotate(45deg);
      top: 0;
    }
    
    .menu-toggle span.active:after {
      transform: rotate(-45deg);
      bottom: 0;
    }
    
    @media (max-width: 992px) {
      .main-nav {
        position: fixed;
        top: 80px;
        left: 0;
        width: 100%;
        height: 0;
        background-color: white;
        box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
        overflow: hidden;
        transition: height 0.3s;
        margin-left: 0;
      }
      
      .main-nav.active {
        height: calc(100vh - 80px);
      }
      
      .nav-list {
        flex-direction: column;
        align-items: center;
        padding: 2rem 0;
        gap: 1.5rem;
      }
      
      .menu-toggle {
        display: block;
      }
    }
  `]
})
export class HeaderComponent {
  menuOpen = false;
  
  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }
}
