import History from "@/components/Diagnosis/History/history";
import SearchPatients from "@/components/Search/search-patients";

export default function Home() {
  return (
    <main className="h-screen w-full flex">
      <SearchPatients />
      <History />
    </main>
  )
}