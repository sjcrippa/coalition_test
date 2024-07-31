'use client';

import { usePatientsContext } from "@/context/PatientsContext";
import FemaleSvg from "@/svgs/female";
import { Calendar } from "lucide-react";
import Image from "next/image";

export default function PatientDetail() {
  const { selectedPatient } = usePatientsContext();

  return (
    <section className="mt-8 mx-8 w-[367px] h-[740px] bg-white rounded-2xl shadow">
      <div className="mt-8 w-full items-center flex flex-col justify-center">
        <Image
          src={selectedPatient?.profile_picture}
          alt="Profile picture"
          width={200}
          height={200}
          quality={100}
          priority={true}
        />
        <h4 className="mt-6 text-2xl font-extrabold text-dark">{selectedPatient?.name}</h4>
        <div className="ml-5 mt-8 w-full flex flex-col">
          <div className="flex gap-x-4 mb-8 ">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-[#F6F7F8] rounded-full">
              <Calendar />
            </div>
            <div className="flex flex-col text-sm text-dark">
              <p>Date Of Birth</p>
              <span className="font-bold">{selectedPatient?.date_of_birth}</span>
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-[#F6F7F8] rounded-full">
              <FemaleSvg />
            </div>
            <div className="flex flex-col text-sm text-dark">
              <p>Gender</p>
              <span className="font-bold">{selectedPatient?.gender}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
