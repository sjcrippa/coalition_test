import { Patient } from "@/types/patients";

export interface PatientsContextType {
  patients: Patient[];
  loading: boolean;
  error: string | null;
  selectedPatient: Patient | null;
  selectedPatientIndex: number | null;
  handleSelectPatient: (index: number) => void;
}
