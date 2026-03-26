"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const EducationSkills = () => {
  const [educationData, setEductionData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/page-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setEductionData(data?.educationData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <section id="skills">
      <div className="border-t border-softGray overflow-hidden">
        <div className="container relative z-10">
          <Image
            src={getImgPath(
              "/images/home/education-skill/edu-skill-vector.svg"
            )}
            alt="vector"
            width={260}
            height={170}
            className="no-print absolute top-0 left-0 transform -translate-y-1/2"
          />
          <div className="relative z-10 py-16 md:py-32">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 xl:mb-16">
              <h2>Education & Skills</h2>
              <p className="text-xl text-orange-500">( 03 )</p>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-10 xl:gap-20">
              <div className="w-full lg:max-w-md flex flex-col gap-0 xl:gap-8">
                {educationData?.education?.map((value: any, index: any) => {
                  return (
                    <div key={index} className="flex items-start gap-6">
                      <div className="no-print mt-2.5 w-3.5 h-3.5 rounded-full border-1 bg-white flex items-center justify-center border-black">
                        <div className="w-1.5 h-1.5 rounded-full bg-black"></div>
                      </div>
                      <div className="flex-1 flex flex-col gap-2">
                        <h5>{value?.title}</h5>
                        <p className="font-normal">
                          <strong>{value?.institution}</strong>
                        </p>
                        <ul className="ml-4 list-disc text-sm font-normal text-gray-600">
                          {value?.points?.map((point: string, pIndex: number) => (
                            <li key={pIndex}>{point}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="w-full">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 xl:gap-6">
                  {educationData?.skillsDetails?.map((section: any, idx: number) => {
                    const colors = [
                      "from-blue-500 via-cyan-500 to-indigo-500",
                      "from-green-500 via-emerald-500 to-lime-500",
                      "from-orange-500 via-amber-500 to-rose-500",
                      "from-purple-500 via-fuchsia-500 to-pink-500",
                      "from-sky-500 via-violet-500 to-indigo-500"
                    ];
                    const color = colors[idx % colors.length];

                    return (
                      <div
                        key={idx}
                        className="p-5 border border-transparent rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 bg-white bg-opacity-95"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <span
                            className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-br ${color} text-white shadow-md`}
                          >
                            {section.icon ? (
                              <Image
                                src={getImgPath(section.icon)}
                                alt={`${section.category} icon`}
                                width={24}
                                height={24}
                                className="w-6 h-6"
                              />
                            ) : (
                              <span className="text-sm font-bold">{section.category[0]}</span>
                            )}
                          </span>
                          <h5 className="font-bold text-xl text-slate-900">
                            {section.category}
                          </h5>
                        </div>
                        <ul className="space-y-2 ml-4 text-sm text-slate-700 list-disc">
                          {section.items?.map((item: string, itemIndex: number) => (
                            <li key={itemIndex}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    );
                  })}
                </div>
                <div className="mt-8 p-4 rounded-xl bg-gradient-to-r from-orange-100 to-red-100 border border-orange-200">
                  <p className="text-base font-semibold text-orange-700 text-center">
                    {educationData?.skillNote}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSkills;
