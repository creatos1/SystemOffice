
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
      image: 'https://www.printer-warehouse.com/cdn/shop/products/IM_C2000_BaseModel_Left_DF3110_Cabinet_Type_F_e80e9260-f1f3-414d-9b3e-9598ca2c92fd_1024x1024.jpg?v=1592320610'
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
