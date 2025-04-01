
import { Injectable } from '@angular/core';
import { Printer } from '../models/printer.interface';

@Injectable({
  providedIn: 'root'
})
export class PrinterService {
  private printers: Printer[] = [
    {
      id: 'im-c3000',
      model: 'IM C3000 Ricoh',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Fax', 'Copiado'],
      characteristics: {
        paperSize: 'Doble carta (11"x17")',
        color: 'Color',
        speed: '30 – 39 ppm',
        resolution: '1200 x 1200 px',
      },
      image: 'https://http2.mlstatic.com/D_NQ_NP_744043-MLM75863815304_042024-O.webp'
    },
    {
      id: 'mp-c6502',
      model: 'MP C2504 Ricoh',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '25 páginas por minuto',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '300,000 páginas por mes'
        }
      },
      image: 'https://assets.rbl.ms/31808524/origin.png'
    },
    {
      id: 'ecosys-m3655idn',
      model: 'IM C4500 Ricoh',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3',
        color: 'Color',
        speed: '45 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '200,000 páginas por mes'
        }
      },
      image: 'https://copierpriceconfigurator.com/wp-content/uploads/2019/01/4500-config-1-600x600.png'
    },
    {
      id: 'bizhub-c658',
      model: 'MP C3503 Ricoh',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado',],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '30-39 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '1,750,000 páginas por mes'
        }
      },
      image: 'https://www.ricoh-americalatina.com/media-library/mp-c3503-color-laser-multifunction-printer.png?id=31808601&width=980'
    },
    {
      id: 'wf-c20600',
      model: 'IM C2000 Ricoh',
      brand: '',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado' , 'Fax'],
      characteristics: {
        paperSize: 'Doble carta (11" × 17")',
        color: 'Color',
        speed: '20-29 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '1,000,000 páginas por mes'
        }
      },
      image: 'https://www.ricoh-americalatina.com/media-library/im-c2000-color-laser-multifunction-printer.png?id=31808530&width=980'
    },
    {
      id: 'imagerunner-2630i',
      model: 'MP C2003 Ricoh',
      brand: 'Canon',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '20-29 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '600,000 páginas por mes'
        }
      },
      image: 'https://assets.rbl.ms/31808378/origin.png'
    },
    {
      id: 'altalink-b8170',
      model: 'MP C4504 Ricoh',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado',],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Color',
        speed: '40-49 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '80,000 páginas por mes'
        }
      },
      image: 'https://assets.rbl.ms/31808393/origin.png'
    },
    {
      id: 'versalink-c7030',
      model: 'MP 6054 Ricoh',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y Negro',
        speed: '60-69 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '300,000 páginas por mes'
        }
      },
      image: 'assets/images/versalink-c7030.jpg'
    },
    {
      id: 'pro-c5300s',
      model: 'ECOSYS M3040 Kyocera',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A4 (8,3" x 11.7")',
        color: 'Blanco y Negro',
        speed: '40-49 ppm',
        resolution: '600 x 600 px',
        additionalFeatures: {
          monthlyDutyCycle: '150,000 páginas por mes'
        }
      },
      image: ''
    },
    {
      id: 'taskalfa-7054ci',
      model: 'ECOSYS M3550 Kyocera',
      brand: 'Kyocera',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado', ],
      characteristics: {
        paperSize: 'A4 (8,3" x 11.7")',
        color: 'Blanco y Negro',
        speed: '50 - 59 ppm',
        resolution: '600 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '250,000 páginas por mes'
        }
      },
      image: 'assets/images/taskalfa-7054ci.jpg'
    },
    {
      id: 'bizhub-758',
      model: 'M 2040 DN/L Kyocera',
      brand: 'Kyocera',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado',],
      characteristics: {
        paperSize: 'A4 (8,3" x 11.7")',
        color: 'Blanco y Negro',
        speed: '40 - 49 ppm',
        resolution: '600 x 600 px',
        additionalFeatures: {
          monthlyDutyCycle: '50,000 páginas por mes'
        }
      },
      image: 'assets/images/bizhub-758.jpg'
    },
    {
      id: 'imagepress-c910',
      model: 'M 3145idn Kyocera',
      brand: 'Kyocera',
      condition: 'Nuevo',
      functions: ['Impresión'],
      characteristics: {
        paperSize: 'Carta',
        color: 'Blanco y negro',
        speed: '40 - 49 ppm',
        resolution: '600 x 600 px',
        additionalFeatures: {
          monthlyDutyCycle: '50,000 páginas por mes'
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
