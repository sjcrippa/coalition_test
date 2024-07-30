'use client'

import { useEffect, useState } from "react";

import SearchSvg from "@/svgs/search";
import Image from "next/image";

export default function SearchPatients() {
  const [patients, setPatients] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const username = 'coalition';
    const password = 'skills-test';
    const auth = btoa(`${username}:${password}`);

    const fetchData = async () => {
      try {
        const response = await fetch('https://fedskillstest.coalitiontechnologies.workers.dev/', {
          headers: {
            'Authorization': `Basic ${auth}`
          }
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPatients(data);
        console.log(data);
      } catch (error) {
        setError(error.message);
        console.error('There was a problem with the fetch operation:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <section className="h-screen w-[367px] bg-white mx-[18px] mt-8 rounded-2xl shadow">
      <div className="flex items-center w-full justify-between px-5 py-5">
        <h1 className="text-2xl font-extrabold">Patients</h1>
        <button className="hover:rotate-90 transition-all">
          <SearchSvg />
        </button>
      </div>
      {error && <div className="text-red-500">Error: {error}</div>}
      {!error && patients.length === 0 && <div>Loading...</div>}
      {patients.length > 0 && (
        <div>
          {patients.map((patient, index) => (
            <div key={index}>
              <Image src={patient.profile_picture} alt="image" width={48} height={48} />
              <p>{patient.name}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}