// infrastructure/adapters/MockContractRepository.ts
import { ContractRepository } from "../../core/repository/ContractRepository";
import { Contract } from "../../core/entities/Contract";
import { NaturalPerson } from "../../core/entities/NaturalPerson";
import { Enterprise } from "../../core/entities/Enterprise";
import { Warehouse } from "../../core/entities/Warehouse";

export class MockContractRepository implements ContractRepository {
  private contracts: Contract[] = [];

  async generateContract(
    party: NaturalPerson | Enterprise,
    warehouse: Warehouse,
    rentalPrice: number,
    materialDeliveryDate: Date,
    startDate: Date,
    endDate: Date,
    durationDays: number,
    extensionDeadlineDays: number,
    resignationNoticeDays: number
  ): Promise<Contract> {
    const contract: Contract = {
      id: `C-${Math.floor(Math.random() * 10000)}`,
      party,
      warehouse,
      rentalPrice,
      materialDeliveryDate,
      startDate,
      endDate,
      durationDays,
      extensionDeadlineDays,
      resignationNoticeDays,
      createdAt: new Date(),
      isActive: true,
    };
    this.contracts.push(contract);
    return contract;
  }
}
