'use client';

import { DownloadIcon } from "lucide-react";

import { alert } from "@/lib/alert";
import { ScrollArea } from "../ui/scroll-area";
import { usePatientsContext } from "@/context/PatientsContext";

export default function LabResults() {
  const { selectedPatient } = usePatientsContext();

  return (
    <section className="h-[296px] mr-8 mt-8 mb-8 pb-[7px] bg-white rounded-2xl shadow overflow-y-hidden">
      <h4 className="mt-5 ml-5 mb-4 text-2xl font-extrabold text-dark">Lab Results</h4>
      <ScrollArea className="h-full">
        <div className="pl-[22px] pr-5">
          {selectedPatient?.lab_results.map((item, index) => (
            <div
              key={index}
              className="flex justify-between items-center pl-4 pr-5 py-[11px] text-dark hover:bg-[#F6F7F8] transition-all"
            >
              <p className="text-sm text-wrap ">{item}</p>
              <button
                onClick={alert}
                className="hover:scale-105 transition-all">
                <DownloadIcon />
              </button>
            </div>
          ))}
        </div>
      </ScrollArea>
    </section>
  )
}