export interface Warehouse {
  id: string;
  name: string; //EF o EP
  location: string; //Direccion bodega
  capacity: number; // m2
  capacityString: string; // m2
  number: string;   // n° bodega
  responsiblePerson: string;
  responsiblePersonPosition: string;
  emailResponsiblePerson: string;
}