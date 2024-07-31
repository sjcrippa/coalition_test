import History from "@/components/Diagnosis/History/history";
import DiagnosisList from "@/components/Diagnosis/List/diagnosis-list";
import LabResults from "@/components/LabResults/lab-results";
import PatientDetail from "@/components/Patient/patient-detail";
import SearchPatients from "@/components/Search/search-patients";

export default function Home() {
  return (
    <main className="flex flex-col md:flex md:flex-row md:justify-center">
      <SearchPatients />
      <div className="flex flex-col">
        <History />
        <DiagnosisList />
      </div>
      <div className="flex flex-col">
        <PatientDetail />
        <LabResults />
      </div>
    </main>
  );
};
