'use client';

import {
  createContext,
  useContext,
  ReactNode,
  useEffect,
  useState
} from "react";
import { Patient } from "@/types/patients";

interface PatientsContextType {
  patients: Patient[];
  loading: boolean;
  error: string | null;
  selectedPatient: Patient | null;
  selectedPatientIndex: number | null;
  handleSelectPatient: (index: number) => void;
}

const PatientsContext = createContext<PatientsContextType | undefined>(undefined);

const username = process.env.NEXT_PUBLIC_API_USERNAME;
const password = process.env.NEXT_PUBLIC_API_PASSWORD;

export const PatientsProvider = ({ children }: { children: ReactNode }) => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState<number | null>(null);

  useEffect(() => {
    const auth = btoa(`${username}:${password}`);

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev/", {
          headers: {
            Authorization: `Basic ${auth}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Patient[] = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("An unknown error occurred");
        }
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const jessicaIndex = patients.findIndex((patient) => patient.name === "Jessica Taylor");
    if (jessicaIndex !== -1) {
      setSelectedPatientIndex(jessicaIndex);
    }
  }, [patients]);

  const handleSelectPatient = (index: number) => {
    setSelectedPatientIndex(index);
  };

  const selectedPatient = selectedPatientIndex !== null ? patients[selectedPatientIndex] : null;

  return (
    <PatientsContext.Provider
      value={{ patients, loading, error, selectedPatient, selectedPatientIndex, handleSelectPatient }}
    >
      {children}
    </PatientsContext.Provider>
  );
};

export const usePatientsContext = () => {
  const context = useContext(PatientsContext);
  if (!context) {
    throw new Error("usePatientsContext must be used within a PatientsProvider");
  }
  return context;
};
