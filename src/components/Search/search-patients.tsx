'use client';

import Image from "next/image";
import { MoreHorizontal, Search } from "lucide-react";

import { alert } from "@/lib/alert";
import { ScrollArea } from "../ui/scroll-area";
import { LoadingSpinner } from "../Loading/loading";
import { usePatientsContext } from "@/context/PatientsContext";

export default function SearchPatients() {
  const { patients, loading, error, handleSelectPatient, selectedPatientIndex } = usePatientsContext();

  return (
    <section className="mt-8 w-full xl:w-[367px] lg:ml-[18px] pb-2">
      <div className="mx-8 lg:mx-0 h-[500px] lg:h-[1054px] bg-white rounded-2xl shadow overflow-hidden ">
        <div className="flex items-center w-full justify-between px-5 mb-10">
          <h1 className="mt-5 text-2xl font-extrabold text-dark">Patients</h1>
          <button
            onClick={alert}
            className="hover:rotate-90 transition-all"
          >
            <Search />
          </button>
        </div>
        {error && <div className="text-red-500">Error: {error}</div>}
        {loading && <LoadingSpinner />}
        <ScrollArea className="h-full">
          {patients.length > 0 && (
            <div className="w-full">
              {patients.map((patient, index) => (
                <div
                  key={index}
                  onClick={() => handleSelectPatient(index)}
                  className={`flex items-center px-5 mb-8 cursor-pointer ${selectedPatientIndex === index ? 'bg-active2 w-full h-20 transition-all' : ''}`}
                >
                  <Image src={patient.profile_picture} alt="image" width={48} height={48} />
                  <div className="w-full flex justify-between items-center">
                    <div className="ml-3 py-[3px] flex flex-col">
                      <p className="text-sm text-dark font-bold">{patient.name}</p>
                      <div className="flex gap-1 text-sm text-light2">
                        <p>{patient.gender},</p>
                        <p>{patient.age}</p>
                      </div>
                    </div>
                    <button>
                      <MoreHorizontal />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </ScrollArea>
      </div>
    </section>
  );
};