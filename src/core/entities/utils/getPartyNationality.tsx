import { NaturalPerson } from "../NaturalPerson";
import { Enterprise } from "../Enterprise";

export function getPartyNationality(party: NaturalPerson | Enterprise): string {
  return "rut" in party ? party.name : party.nationality;
}