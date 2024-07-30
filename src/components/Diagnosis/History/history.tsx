'use client'

import { Line } from "react-chartjs-2";

import useChart from "@/hooks/useChart";
import { LoadingSpinner } from "@/components/Loading/loading";

export default function History() {
  const { data, options } = useChart();

  return (
    <section className="w-[766px] h-[673px] bg-white rounded-2xl shadow mt-8">
      <h2 className="ml-5 mt-5 text-2xl font-extrabold text-dark">Diagnosis History</h2>
      <div className="h-[298px] mx-5 mt-10 pl-4 rounded-xl bg-[#F4F0FE]">
        <h3 className="pt-4 text-lg font-bold text-dark">Blood Pressure</h3>
        <div className="grid grid-cols-3">
          <div className="chart-col border col-span-2">
            {
              !data || !options ? (
                <LoadingSpinner />
              ) : (
                <Line data={data} options={options} />
              )
            }
          </div>
          <div className="right-col border col-span-1">

          </div>
        </div>
      </div>
    </section>
  )
}