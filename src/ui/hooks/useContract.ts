// src/ui/hooks/useContract.ts
import { useState } from "react";
import { MockContractRepository } from "../../infrastructure/adapters/MockContractRepository";
// import { HttpContractRepository } from "../../infrastructure/adapters/HttpContractRepository";
import { generateContractUseCase } from "../../core/useCases/generateContract";
import { Contract } from "../../core/entities/Contract";
import { NaturalPerson } from "../../core/entities/NaturalPerson";
import { Enterprise } from "../../core/entities/Enterprise";
import { Warehouse } from "../../core/entities/Warehouse";

export const useContract = () => {
  const [loading, setLoading] = useState(false);
  const [contract, setContract] = useState<Contract | null>(null);
  const [error, setError] = useState<string | null>(null);

  const repo = new MockContractRepository(); // 🧩 Cambia a HttpContractRepository cuando tengas backend

  const generateContract = async (
    party: NaturalPerson | Enterprise,
    warehouse: Warehouse,
    rentalPrice: number,
    materialDeliveryDate: Date,
    startDate: Date,
    endDate: Date,
    durationDays: number,
    extensionDeadlineDays: number,
    resignationNoticeDays: number,
    terms: string
  ) => {
    setLoading(true);
    setError(null);
    try {
      const newContract = await generateContractUseCase(
        repo,
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
      setContract(newContract);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return {
    contract,
    loading,
    error,
    generateContract,
  };
};
