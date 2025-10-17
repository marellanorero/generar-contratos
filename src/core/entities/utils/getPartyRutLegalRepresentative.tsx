import { NaturalPerson } from "../NaturalPerson";
import { Enterprise } from "../Enterprise";

export function getPartyRutLegalRepresentative(party: NaturalPerson | Enterprise): string {
  return "rut" in party ? party.name : party.rutLegalRepresentative;
}