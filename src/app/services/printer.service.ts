
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
      image: 'https://assets.rbl.ms/31808352/origin.png'
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
      image: 'https://assets.rbl.ms/31808368/origin.png'
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
      image: 'https://m.media-amazon.com/images/I/81atJV-rpFL.jpg'
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
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR14PjYXfoF_O9QCwq2ujVg6HxgiWUpolbIwg&s'
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
      image: 'https://sistema.vendecorp.com/images/Productos/7618.jpg'
    },
    {
      id: 'imagepress-c910',
      model: 'M 3145idn Kyocera',
      brand: 'Kyocera',
      condition: 'Nuevo',
      functions: ['Impresión'],
      characteristics: {
        paperSize: 'Carta (8.5" x 11"',
        color: 'Blanco y negro',
        speed: '40 - 49 ppm',
        resolution: '600 x 600 px',
        additionalFeatures: {
          monthlyDutyCycle: '50,000 páginas por mes'
        }
      },
      image: 'https://m.media-amazon.com/images/I/71rWIYMWYeL._AC_UF1000,1000_QL80_.jpg'
    },
    {
      id: 'im-8000',
      model: 'M 3655idn Kyocera',
      brand: 'Ricoh',
      condition: 'Nuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A4 (8,3" x 11.7")',
        color: 'Blanco y Negro',
        speed: '50 - 59 ppm',
        resolution: '1200 x 1200 px',
        additionalFeatures: {
          monthlyDutyCycle: '250,000 páginas por mes'
        }
      },
      image: 'https://m.media-amazon.com/images/I/511jAHMG2-L.jpg'
    },
    {
      id: 'accuriopress-c4080',
      model: 'MA 4500IFX Kyocera',
      brand: 'Konica Minolta',
      condition: 'Nuevo',
      functions: ['Impresión'],
      characteristics: {
        paperSize: 'A4 (8,3" x 11.7")',
        color: 'Blanco y Negro',
        speed: '40 - 49 ppm',
        resolution: '600 x 600 px',
        additionalFeatures: {
          monthlyDutyCycle: '150,000 páginas por mes'
        }
      },
      image: 'https://http2.mlstatic.com/D_NQ_NP_602715-MCO73985689635_012024-O.webp'
    },
    {
      id: 'mp-c2504',
      model: 'Ma 5500IFX Kyocera',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Copiado', 'Impresión', 'Escáner'],
      characteristics: {
        paperSize: 'A4 (8,3" x 11.7")',
        color: 'Blanco y Negro',
        speed: '50 - 59 ppm',
        resolution: '600 x 600 px',
        additionalFeatures: {
          monthlyDutyCycle: '250,000 páginas por mes'
        }
      },
      image: 'https://cbpnow.com/wp-content/uploads/ECOSYS-MA5500ifx-e1685462780706.png'
    },
    {
      id: 'im-c4500',
      model: 'BIZHUB 308 Konica Minolta',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Copiado', 'Impresión', 'Escáner'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '30 - 39 ppm',
        resolution: 'A3',
      
      },
      image: 'https://d1nz2cwxocqem8.cloudfront.net/rendition/380230487157/image_equs0051q53ql1f5e7rbkrpa54/-C620x709,0,0-S900x1029-FWEBP'
    },
    {
      id: 'mp-c3503',
      model: 'BIZHUB 368 Ricoh',
      brand: 'Ricoh',
      condition: 'Seminuevo',
      functions: ['Copiado', 'Impresión', 'Escáner'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '30 - 39 ppm',
        resolution: 'A3',
        additionalFeatures: {
          tonerYieldBW: 'Láser',
          
        }
      },
      image: 'https://konicaminolta.b-cdn.net/wp-content/uploads/2022/03/Konica_Minolta_bizhub_c308_color_multifunction_printer.png'
    },
    {
      id: 'im-c2000',
      model: 'BIZHUB 558 Konica',
      brand: 'Konica',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '50 - 59 ppm',
        resolution: 'A3, Impresora Monocromática de volumen Medio'
      },
      image: 'https://netcopiadoras.com/cdn/shop/files/BIZHUB458_800x800px_700x700.png?v=1735675322'
    },
    {
      id: 'im-c2000',
      model: 'BIZHUB 658 Konica',
      brand: 'Konica',
      condition: 'Seminuevo',
      functions: ['Impresión', 'Escáner', 'Copiado'],
      characteristics: {
        paperSize: 'A3 (11.7" × 16.5")',
        color: 'Blanco y negro',
        speed: '60 - 69 ppm',
        resolution: 'A3'
      },
      image: 'https://netcopiadoras.com/cdn/shop/files/BIZHUB458_800x800px_700x700.png?v=1735675322'
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
