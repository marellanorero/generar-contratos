// core/usecases/generateContract.ts
import { ContractRepository } from "../repository/ContractRepository";
import { Contract } from "../entities/Contract";
import { NaturalPerson } from "../entities/NaturalPerson";
import { Enterprise } from "../entities/Enterprise";
import { Warehouse } from "../entities/Warehouse";

export const generateContractUseCase = async (
  repo: ContractRepository,
  party: NaturalPerson | Enterprise,
  warehouse: Warehouse,
  rentalPrice: number,
  materialDeliveryDate: Date,
  startDate: Date,
  endDate: Date,
  durationDays: number,
  extensionDeadlineDays: number,
  resignationNoticeDays: number
): Promise<Contract> => {
  return await repo.generateContract(
    party,
    warehouse,
    rentalPrice,
    materialDeliveryDate,
    startDate,
    endDate,
    durationDays,
    extensionDeadlineDays,
    resignationNoticeDays
  );
};
