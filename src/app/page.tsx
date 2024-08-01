import DiagnosisHistory from "@/components/Diagnosis/History/diagnosis-hist";
import DiagnosisList from "@/components/Diagnosis/List/diagnosis-list";
import LabResults from "@/components/LabResults/lab-results";
import PatientDetail from "@/components/Patient/patient-detail";
import SearchPatients from "@/components/Search/search-patients";

export default function Home() {
  return (
    <main className="flex flex-col justify-center items-center lg:items-start lg:flex lg:flex-row lg:justify-center">
      <SearchPatients />
      <div className="flex flex-col">
        <DiagnosisHistory />
        <DiagnosisList />
      </div>
      <div className="flex flex-col">
        <PatientDetail />
        <LabResults />
      </div>
    </main>
  );
};
