import { NaturalPerson } from "../NaturalPerson";
import { Enterprise } from "../Enterprise";

export function getPartyGiro(party: NaturalPerson | Enterprise): string {
  return "rut" in party ? "" : party.giro;
}
