'use client';

import Image from "next/image";
import { Calendar, PhoneIcon } from "lucide-react";

import FemaleSvg from "@/svgs/female";
import InsurenceSvg from "@/svgs/insurence";
import { usePatientsContext } from "@/context/PatientsContext";
import ShowAllBtn from "./show-all-btn";

export default function PatientDetail() {
  const { selectedPatient } = usePatientsContext();

  const profilePictureSrc = selectedPatient?.profile_picture || "/public/defaultImage.png"; // --> This is needed because Next.js Image requires the src property to be of type string or StaticImport.

  return (
    <section className="mt-8 mx-8 w-[367px] h-fit bg-white rounded-2xl shadow">
      <div className="mt-8 mb-8 w-full items-center flex flex-col justify-center">
        <Image
          src={profilePictureSrc}
          alt="Profile picture"
          width={200}
          height={200}
          quality={100}
          priority={true}
        />
        <h4 className="mt-6 text-2xl font-extrabold text-dark">{selectedPatient?.name}</h4>
        <div className="ml-5 mt-8 flex flex-col w-fit">
          <div className="flex gap-x-4 mb-8 ">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-light rounded-full">
              <Calendar />
            </div>
            <div className="flex flex-col text-sm text-dark">
              <p>Date Of Birth</p>
              <span className="font-bold">{selectedPatient?.date_of_birth}</span>
            </div>
          </div>

          <div className="flex gap-x-4 mb-8">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-light rounded-full">
              <FemaleSvg />
            </div>
            <div className="flex flex-col text-sm text-dark">
              <p>Gender</p>
              <span className="font-bold">{selectedPatient?.gender}</span>
            </div>
          </div>

          <div className="flex gap-x-4 mb-8">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-light rounded-full">
              <PhoneIcon />
            </div>
            <div className="flex flex-col text-sm text-dark">
              <p>Contact Info.</p>
              <span className="font-bold">{selectedPatient?.phone_number}</span>
            </div>
          </div>

          <div className="flex gap-x-4 mb-8">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-light rounded-full">
              <PhoneIcon />
            </div>
            <div className="flex flex-col text-sm text-dark">
              <p>Emergency Contacts</p>
              <span className="font-bold">{selectedPatient?.emergency_contact}</span>
            </div>
          </div>

          <div className="flex gap-x-4">
            <div className="flex justify-center items-center w-[42px] h-[42px] bg-light rounded-full">
              <InsurenceSvg />
            </div>
            <div className="flex flex-col text-sm text-dark">
              <p>Insurence Provider</p>
              <span className="font-bold">{selectedPatient?.insurance_type}</span>
            </div>
          </div>

        </div>
        <ShowAllBtn />
      </div>
    </section>
  );
};
