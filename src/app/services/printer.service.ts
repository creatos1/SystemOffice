
import { Injectable } from '@angular/core';
import { Printer } from '../models/printer.interface';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  private printers: Printer[] = [
    {
      id: 'im-c3000',
      model: 'IM C3000',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Fax', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '30 – 39 ppm',
        resolution: '1200 x 1200 px',
      },
      image: 'https://raw.githubusercontent.com/tu-repo/images/main/im-c3000.jpg'
    },
    {
      id: 'mp-c2504',
      model: 'MP C2504',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Copiado', 'Impresión', 'Escáner'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '20 - 29 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          warmupTime: '25 segundos',
          printSpeed: '7.5 segundos color / 5.3 segundos b/n'
        }
      },
      image: 'https://raw.githubusercontent.com/tu-repo/images/main/mp-c2504.jpg'
    },
    {
      id: 'im-c4500',
      model: 'IM C4500',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Copiado', 'Impresión', 'Escáner'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '40 - 49 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          screenSize: 'Panel táctil en color de 10"',
          tonerYieldBW: '33,000 Impresiones',
          tonerYieldColor: '22,500 impresiones',
          monthlyDutyCycle: '200,000 impresiones'
        }
      },
      image: 'https://raw.githubusercontent.com/tu-repo/images/main/im-c4500.jpg'
    },
    {
      id: 'mp-c3503',
      model: 'MP C3503',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Copiado', 'Impresión', 'Escáner'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '30 - 39 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          tonerYieldBW: '29,500 impresiones',
          tonerYieldColor: '18,000 impresiones',
          monthlyDutyCycle: '1,750,000 páginas por mes'
        }
      },
      image: 'https://raw.githubusercontent.com/tu-repo/images/main/mp-c3503.jpg'
    },
    {
      id: 'im-c2000',
      model: 'IM C2000',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Fax', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '20 - 29 ppm',
        resolution: '1200 x 1200 px'
      },
      image: 'https://raw.githubusercontent.com/tu-repo/images/main/im-c2000.jpg'
    },
    // Add all other printers here...
  ];

  getPrinters(): Printer[] {
    return this.printers;
  }

  getPrinterById(id: string): Printer | undefined {
    return this.printers.find(printer => printer.id === id);
  }
}
