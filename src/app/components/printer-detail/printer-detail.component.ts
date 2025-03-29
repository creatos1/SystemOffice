
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { PrinterService } from '../../services/printer.service';
import { Printer } from '../../models/printer.interface';

@Component({
  selector: 'app-printer-detail',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="printer-detail" *ngIf="printer">
      <div class="printer-header">
        <h1>{{ printer.model }}</h1>
        <span class="brand">{{ printer.brand }}</span>
        <span class="condition">{{ printer.condition }}</span>
      </div>

      <div class="printer-content">
        <div class="printer-image">
          <img [src]="printer.image" [alt]="printer.model">
        </div>

        <div class="printer-info">
          <section>
            <h2>Funciones</h2>
            <ul>
              <li *ngFor="let function of printer.functions">{{ function }}</li>
            </ul>
          </section>

          <section>
            <h2>Características</h2>
            <ul>
              <li>Tamaño de papel: {{ printer.characteristics.paperSize }}</li>
              <li>Color: {{ printer.characteristics.color }}</li>
              <li>Velocidad: {{ printer.characteristics.speed }}</li>
              <li>Resolución: {{ printer.characteristics.resolution }}</li>
            </ul>
          </section>

          <section *ngIf="printer.characteristics.additionalFeatures">
            <h2>Características Adicionales</h2>
            <ul>
              <li *ngIf="printer.characteristics.additionalFeatures.monthlyDutyCycle">
                Ciclo mensual: {{ printer.characteristics.additionalFeatures.monthlyDutyCycle }}
              </li>
              <li *ngIf="printer.characteristics.additionalFeatures.tonerYieldBW">
                Rendimiento tóner B/N: {{ printer.characteristics.additionalFeatures.tonerYieldBW }}
              </li>
              <li *ngIf="printer.characteristics.additionalFeatures.tonerYieldColor">
                Rendimiento tóner color: {{ printer.characteristics.additionalFeatures.tonerYieldColor }}
              </li>
              <li *ngIf="printer.characteristics.additionalFeatures.printSpeed">
                Velocidad de impresión: {{ printer.characteristics.additionalFeatures.printSpeed }}
              </li>
              <li *ngIf="printer.characteristics.additionalFeatures.screenSize">
                Pantalla: {{ printer.characteristics.additionalFeatures.screenSize }}
              </li>
              <li *ngIf="printer.characteristics.additionalFeatures.warmupTime">
                Tiempo de calentamiento: {{ printer.characteristics.additionalFeatures.warmupTime }}
              </li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .printer-detail {
      padding: 2rem;
      max-width: 1200px;
      margin: 0 auto;
    }

    .printer-header {
      text-align: center;
      margin-bottom: 2rem;
    }

    .printer-header h1 {
      font-size: 2.5rem;
      margin-bottom: 0.5rem;
    }

    .brand, .condition {
      display: inline-block;
      padding: 0.5rem 1rem;
      margin: 0 0.5rem;
      background: #f5f5f5;
      border-radius: 4px;
    }

    .printer-content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2rem;
    }

    .printer-image img {
      width: 100%;
      height: auto;
      border-radius: 8px;
    }

    .printer-info section {
      margin-bottom: 2rem;
    }

    .printer-info h2 {
      font-size: 1.5rem;
      margin-bottom: 1rem;
      color: #333;
    }

    .printer-info ul {
      list-style: none;
      padding: 0;
    }

    .printer-info li {
      padding: 0.5rem 0;
      border-bottom: 1px solid #eee;
    }

    @media (max-width: 768px) {
      .printer-content {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class PrinterDetailComponent implements OnInit {
  printer?: Printer;

  constructor(
    private route: ActivatedRoute,
    private printerService: PrinterService
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.printer = this.printerService.getPrinterById(id);
    }
  }
}
