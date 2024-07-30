'use client';

import { MoreHorizontal } from "lucide-react";

import Image from "next/image";
import SearchSvg from "@/svgs/search";
import usePatients from "@/hooks/usePatients";
import { ScrollArea } from "../ui/scroll-area";
import { LoadingSpinner } from "../Loading/loading";

export default function SearchPatients() {
  const { patients, loading, error, handleSelectPatient, selectedPatientIndex } = usePatients();

  return (
    <section className="w-[367px] bg-white mx-[18px] mt-8 rounded-2xl shadow">
      <ScrollArea className="h-screen">
        <div className="flex items-center w-full justify-between px-5 mb-10">
          <h1 className="mt-5 text-2xl font-extrabold">Patients</h1>
          <button className="hover:rotate-90 transition-all">
            <SearchSvg />
          </button>
        </div>
        {error && <div className="text-red-500">Error: {error}</div>}
        {loading && <LoadingSpinner />}
        {patients.length > 0 && (
          <div className="w-full">
            {patients.map((patient, index) => (
              <div
                key={index}
                onClick={() => handleSelectPatient(index)}
                className={`flex items-center px-5 mb-8 cursor-pointer ${selectedPatientIndex === index ? 'bg-active2 w-full h-20' : ''}`}
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
    </section>
  );
};