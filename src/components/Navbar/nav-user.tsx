import Image from "next/image";

import SettingsSvg from "../Svgs/settings";
import MoreSvg from "../Svgs/more";

export default function NavUser() {
  return (
    <section className="w-[241px] h-11 flex">
      <Image src='/doctor.png' alt="Doctor avatar image" width={44} height={44} />
      <div className="ml-2 w-[129px] flex flex-col text-xs items-start justify-center">
        <p className="font-bold text-dark">Dr. Jose Simmons</p>
        <p className="text-light2">General Practitioner</p>
      </div>
      <div className="w-[1px] h-full bg-[#EDEDED]"></div>
      <div className="ml-3 flex gap-x-3 justify-end items-center">
        <button className="hover:rotate-90 transition-all duration-300">
          <SettingsSvg />
        </button>
        <button className="hover:scale-110 transition-all">
          <MoreSvg />
        </button>
      </div>
    </section>
  )
}