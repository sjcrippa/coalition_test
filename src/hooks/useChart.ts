"use client";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useMemo } from "react";

import { usePatientsContext } from "@/context/PatientsContext";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function useChart() {
  const { patients, selectedPatient, selectedPatientIndex } =
    usePatientsContext();

  const chartData = useMemo(() => {
    if (!selectedPatient) {
      return { data: null, options: null };
    }

    // Labels for X axis
    const labels = selectedPatient.diagnosis_history.map(
      (entry) => `${entry.month}, ${entry.year}`
    );

    // Data for Y axis
    const systolicData = selectedPatient.diagnosis_history.map(
      (entry) => entry.blood_pressure.systolic.value
    );
    const diastolicData = selectedPatient.diagnosis_history.map(
      (entry) => entry.blood_pressure.diastolic.value
    );

    const data = {
      labels,
      datasets: [
        {
          label: "Systolic",
          data: systolicData,
          borderColor: "#E66FD2",
          backgroundColor: "#E66FD2",
          fill: false,
          tension: 0.5,
        },
        {
          label: "Diastolic",
          data: diastolicData,
          borderColor: "#8C6FE6",
          backgroundColor: "#8C6FE6",
          fill: false,
          tension: 0.5,
        },
      ],
    };

    const options = {
      responsive: true,
      scales: {
        y: {
          min: 60,
          max: 180,
        },
      },
    };

    return { data, options };
  }, [patients, selectedPatientIndex]);

  return chartData;
}
