export interface BloodPressure {
  systolic: {
    value: number;
    levels: string;
  };
  diastolic: {
    value: number;
    levels: string;
  };
}

export interface VitalSigns {
  value: number;
  levels: string;
}

export interface DiagnosisHistory {
  month: string;
  year: number;
  blood_pressure: BloodPressure;
  heart_rate: VitalSigns;
  respiratory_rate: VitalSigns;
  temperature: VitalSigns;
}

export interface Diagnostic {
  name: string;
  description: string;
  status: string;
}

export interface Patient {
  name: string;
  gender: string;
  age: number;
  profile_picture: string;
  date_of_birth: string;
  phone_number: string;
  emergency_contact: string;
  insurance_type: string;
  diagnosis_history: DiagnosisHistory[];
  diagnostic_list: Diagnostic[];
  lab_results: string[];
}
