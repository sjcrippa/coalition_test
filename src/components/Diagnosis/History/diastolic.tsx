import { usePatientsContext } from "@/context/PatientsContext";
import ArrowDown from "@/svgs/arrow-down";

export default function Diastolic() {
  const { selectedPatient } = usePatientsContext();

  // getting the most recent value of blood_pressure (acording to ui provided)
  const latestDiagnosis = selectedPatient?.diagnosis_history[selectedPatient?.diagnosis_history.length - 1];

  return (
    <section className="h-[84px]">
      <div className="flex flex-col">
        <div className="flex items-center gap-x-1">
          <div className="w-[14px] h-[14px] rounded-full border border-white bg-[#8C6FE6]"></div>
          <h4 className="text-sm text-dark font-bold">Diastolic</h4>
        </div>
        {latestDiagnosis && (
          <div className="mt-2 flex flex-col text-dark">
            <p className="text-[22px] font-bold">{latestDiagnosis.blood_pressure.diastolic.value}</p>
            <div className="mt-2 flex items-center gap-x-2">
              <ArrowDown />
              <p className="text-sm">{latestDiagnosis.blood_pressure.diastolic.levels}</p>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}