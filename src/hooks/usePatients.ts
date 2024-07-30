import { Patient } from "@/types/patients";
import { useEffect, useState } from "react";

const username = process.env.NEXT_PUBLIC_API_USERNAME;
const password = process.env.NEXT_PUBLIC_API_PASSWORD;

export default function usePatients() {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedPatientIndex, setSelectedPatientIndex] = useState<
    number | null
  >(null);

  useEffect(() => {
    const auth = btoa(`${username}:${password}`);

    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          "https://fedskillstest.coalitiontechnologies.workers.dev/",
          {
            headers: {
              Authorization: `Basic ${auth}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data: Patient[] = await response.json();
        setPatients(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        console.error("There was a problem with the fetch operation:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    // Buscar a Jessica Taylor en la lista de pacientes y establecerla como seleccionada por defecto
    const jessicaIndex = patients.findIndex(
      (patient) => patient.name === "Jessica Taylor"
    );
    if (jessicaIndex !== -1) {
      setSelectedPatientIndex(jessicaIndex);
    }
  }, [patients]);

  const handleSelectPatient = (index: number) => {
    setSelectedPatientIndex(index);
  };

  return {
    patients,
    error,
    loading,
    selectedPatientIndex,
    handleSelectPatient,
  };
}
