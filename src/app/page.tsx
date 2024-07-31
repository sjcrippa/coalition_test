import History from "@/components/Diagnosis/History/history";
import PatientDetail from "@/components/Patient/patient-detaill";
import SearchPatients from "@/components/Search/search-patients";

export default function Home() {
  return (
    <main className="flex flex-col md:flex md:flex-row md:justify-center">
      <SearchPatients />
      <History />
      <PatientDetail />
    </main>
  )
}