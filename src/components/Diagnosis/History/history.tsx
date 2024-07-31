'use client';

import { Line } from "react-chartjs-2";

import Systolic from "./systolic";
import Diastolic from "./diastolic";
import useChart from "@/hooks/useChart";
import { LoadingSpinner } from "@/components/Loading/loading";
import Cards from "./cards";

export default function History() {
  const { data, options } = useChart();

  return (
    <section className="w-[766px] h-[673px] bg-white rounded-2xl shadow mt-8">
      <h2 className="ml-5 mt-5 text-2xl font-extrabold text-dark">Diagnosis History</h2>
      <div className="h-[298px] mx-5 mt-10 pl-4 rounded-xl bg-[#F4F0FE]">
        <h3 className="pt-4 text-lg font-bold text-dark">Blood Pressure</h3>
        <div className="grid grid-cols-3">
          <div className="col-span-2">
            {
              !data || !options ? (
                <LoadingSpinner />
              ) : (
                <Line data={data} options={options} />
              )
            }
          </div>
          <div className="-translate-y-6 col-span-1 mr-4">
            <Systolic />
            <div className="w-full h-[1px] my-4 bg-[#CBC8D4] "></div>
            <Diastolic />
          </div>
        </div>
      </div>

      <div className="w-full mt-5 px-5">
        <Cards />
      </div>
    </section>
  )
}