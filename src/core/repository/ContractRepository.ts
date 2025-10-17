import { Contract } from "../entities/Contract";
import { NaturalPerson } from "../entities/NaturalPerson";
import { Enterprise } from "../entities/Enterprise";
import { Warehouse } from "../entities/Warehouse";

export interface ContractRepository {
  generateContract(
    party: NaturalPerson | Enterprise,
    warehouse: Warehouse,
    rentalPrice: number,
    materialDeliveryDate: Date,
    startDate: Date,
    endDate: Date,
    durationDays: number,
    extensionDeadlineDays: number,
    resignationNoticeDays: number
  ): Promise<Contract>;

  // Opcional: si quieres obtener un contrato existente
  //getContract(contractId: string): Promise<Contract>;
}
