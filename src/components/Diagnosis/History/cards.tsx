import Image from "next/image";

import { cardStyles, DiagnosisKey } from "../utils/cardStyles";
import { usePatientsContext } from "@/context/PatientsContext";
import { LoadingSpinner } from "@/components/Loading/loading";

export default function Cards() {
  const { selectedPatient } = usePatientsContext();

  const latestDiagnosis = selectedPatient?.diagnosis_history[selectedPatient?.diagnosis_history.length - 1];

  if (!selectedPatient) {
    return <LoadingSpinner />;
  }

  const diagnosisKeys: DiagnosisKey[] = ['respiratory_rate', 'temperature', 'heart_rate'];

  return (
    <section className="flex flex-col items-center gap-y-5 md:flex md:flex-row md:space-x-[21px] pb-5">
      {diagnosisKeys.map((key) => (
        <div key={key} className={`w-[228px] h-[242px] pl-4 pt-4 ${cardStyles[key].backgroundColor} rounded-xl flex flex-col justify-start text-dark`}>
          <Image src={cardStyles[key].image} alt={key} className="mb-4" width={96} height={96} />
          <h4 className="text-base font-medium">{cardStyles[key].label}</h4>
          <div className="flex items-center gap-x-2 text-3xl font-extrabold">
            <p>{latestDiagnosis![key].value}</p>
            <p>{cardStyles[key].valueType}</p>
          </div>
          <p className="mt-[17px] text-sm text-dark">{latestDiagnosis![key].levels}</p>
        </div>
      ))}
    </section>
  );
};
