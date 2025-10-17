import { NaturalPerson } from "../NaturalPerson";
import { Enterprise } from "../Enterprise";

export function getPartyRut(party: NaturalPerson | Enterprise): string {
  return "rut" in party ? party.rut : party.rutEmpresa;
}


