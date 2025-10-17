import { NaturalPerson } from './NaturalPerson';
import { Enterprise } from './Enterprise';
import { Warehouse } from './Warehouse';

export interface Contract {
  id: string;
  party: NaturalPerson | Enterprise;  // quién arrienda
  warehouse: Warehouse;               // qué bodega
  rentalPrice: number;                // valor del arriendo
  materialDeliveryDate: Date;         // fecha entrega material
  startDate: Date;                    // inicio contrato
  endDate: Date;                      // fin contrato
  durationDays: number;               // duración contrato
  extensionDeadlineDays: number;      // plazo prórroga
  resignationNoticeDays: number;      // aviso desocupación
  createdAt: Date;
  isActive: boolean;
}