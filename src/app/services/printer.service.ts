
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
      image: 'assets/images/mp-c2003.jpg'
    },
    {
      id: 'mp-c6502',
      model: 'MP C6502',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '65 ppm',
        resolution: '1200 x 4800 px',
        additionalFeatures: {
          monthlyDutyCycle: '300,000 páginas por mes'
        }
      },
      image: 'assets/images/mp-c6502.jpg'
    },
    {
      id: 'ecosys-m3655idn',
      model: 'ECOSYS M3655idn',
      brand: 'Kyocera',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A4',
        color: 'Blanco y negro',
        speed: '55 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '250,000 páginas por mes'
        }
      },
      image: 'assets/images/ecosys-m3655idn.jpg'
    },
    {
      id: 'bizhub-c658',
      model: 'bizhub C658',
      brand: 'Konica Minolta',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado', 'Fax'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '65 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '300,000 páginas por mes'
        }
      },
      image: 'assets/images/bizhub-c658.jpg'
    },
    {
      id: 'wf-c20600',
      model: 'WorkForce Pro WF-C20600',
      brand: 'Epson',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '60 ppm',
        resolution: '4800 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '100,000 páginas por mes'
        }
      },
      image: 'assets/images/wf-c20600.jpg'
    },
    {
      id: 'imagerunner-2630i',
      model: 'imageRUNNER 2630i',
      brand: 'Canon',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '30 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '75,000 páginas por mes'
        }
      },
      image: 'assets/images/imagerunner-2630i.jpg'
    },
    {
      id: 'altalink-b8170',
      model: 'AltaLink B8170',
      brand: 'Xerox',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado', 'Fax'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '70 ppm',
        resolution: '1200 x 2400 px',
        additionalFeatures: {
          monthlyDutyCycle: '300,000 páginas por mes'
        }
      },
      image: 'assets/images/altalink-b8170.jpg'
    },
    {
      id: 'versalink-c7030',
      model: 'VersaLink C7030',
      brand: 'Xerox',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '30 ppm',
        resolution: '1200 x 2400 px',
        additionalFeatures: {
          monthlyDutyCycle: '129,000 páginas por mes'
        }
      },
      image: 'assets/images/versalink-c7030.jpg'
    },
    {
      id: 'pro-c5300s',
      model: 'Pro C5300s',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3+ (13" × 19")',
        color: 'Color',
        speed: '65 ppm',
        resolution: '2400 x 4800 px',
        additionalFeatures: {
          monthlyDutyCycle: '450,000 páginas por mes'
        }
      },
      image: 'assets/images/pro-c5300s.jpg'
    },
    {
      id: 'taskalfa-7054ci',
      model: 'TASKalfa 7054ci',
      brand: 'Kyocera',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado', 'Fax'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '70 ppm',
        resolution: '4800 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '300,000 páginas por mes'
        }
      },
      image: 'assets/images/taskalfa-7054ci.jpg'
    },
    {
      id: 'bizhub-758',
      model: 'bizhub 758',
      brand: 'Konica Minolta',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado', 'Fax'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '75 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '250,000 páginas por mes'
        }
      },
      image: 'assets/images/bizhub-758.jpg'
    },
    {
      id: 'imagepress-c910',
      model: 'imagePRESS C910',
      brand: 'Canon',
      condition: 'Nuevo',
      functions: ['Impresión'],
      characteristics: {
        paperSize: 'A3+ (13" × 19")',
        color: 'Color',
        speed: '90 ppm',
        resolution: '2400 x 2400 px',
        additionalFeatures: {
          monthlyDutyCycle: '500,000 páginas por mes'
        }
      },
      image: 'assets/images/imagepress-c910.jpg'
    },
    {
      id: 'im-8000',
      model: 'IM 8000',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '80 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '400,000 páginas por mes'
        }
      },
      image: 'assets/images/im-8000.jpg'
    },
    {
      id: 'accuriopress-c4080',
      model: 'AccurioPress C4080',
      brand: 'Konica Minolta',
      condition: 'Nuevo',
      functions: ['Impresión'],
      characteristics: {
        paperSize: 'A3+ (13" × 19")',
        color: 'Color',
        speed: '80 ppm',
        resolution: '3600 x 2400 px',
        additionalFeatures: {
          monthlyDutyCycle: '350,000 páginas por mes'
        }
      },
      image: 'assets/images/accuriopress-c4080.jpg'
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
