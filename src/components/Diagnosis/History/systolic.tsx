import ArrowUp from "@/svgs/arrow-up";
import { usePatientsContext } from "@/context/PatientsContext";

export default function Systolic() {
  const { patients, selectedPatientIndex } = usePatientsContext();

  const selectedPatient = selectedPatientIndex !== null ? patients[selectedPatientIndex] : null;

  // getting the most recent value of blood_pressure
  const latestDiagnosis = selectedPatient?.diagnosis_history[selectedPatient?.diagnosis_history.length - 1];

  return (
    <section className="h-[84px]">
      <div className="flex flex-col">
        <div className="flex items-center gap-x-1">
          <div className="w-[14px] h-[14px] rounded-full border border-white bg-[#E66FD2]"></div>
          <h4 className="text-sm text-dark font-bold">Systolic</h4>
        </div>
        {latestDiagnosis && (
          <div className="mt-2 flex flex-col text-dark">
            <p className="text-[22px] font-bold">{latestDiagnosis.blood_pressure.systolic.value}</p>
            <div className="mt-2 flex items-center gap-x-2">
              <ArrowUp />
              <p className="text-sm">{latestDiagnosis.blood_pressure.systolic.levels}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}