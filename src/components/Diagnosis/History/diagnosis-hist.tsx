'use client';

import { Line } from "react-chartjs-2";

import Systolic from "./systolic";
import Diastolic from "./diastolic";
import useChart from "@/hooks/useChart";
import { LoadingSpinner } from "@/components/Loading/loading";
import Cards from "./cards";
import { useHandleResize } from "@/hooks/useHandleResize";

export default function DiagnosisHistory() {
  const { data, options } = useChart();
  const { isMobile } = useHandleResize();

  return (
    <section className="mx-8 h-full md:h-[673px] bg-white rounded-2xl shadow mt-8">
      <h2 className="ml-5 mt-5 text-2xl font-extrabold text-dark">Diagnosis History</h2>
      <div className="h-[350px] md:h-[298px] mx-5 mt-10 pl-4 rounded-xl bg-[#F4F0FE]">
        <h3 className="pt-4 text-lg font-bold text-dark">Blood Pressure</h3>
        <div className="flex flex-col md:grid md:grid-cols-3">
          <div className="md:col-span-2">
            {
              !data || !options ? (
                <LoadingSpinner />
              ) : (
                <Line data={data} options={options} />
              )
            }
          </div>
          <div className="mt-5 flex text-center md:text-left md:mt-0 md:flex md:flex-col md:-translate-y-6 md:col-span-1 mr-4">
            <Systolic />
            {isMobile ? null : (<div className="w-full h-[1px] my-4 bg-[#CBC8D4] "></div>)}
            <Diastolic />
          </div>
        </div>
      </div>

      <div className="w-full md:w-auto mt-5 px-5">
        <Cards />
      </div>
    </section>
  )
}