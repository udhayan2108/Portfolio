"use client";
import { getDataPath, getImgPath } from "@/utils/image";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const LatestWork = () => {
  const [workData, setWorkData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(getDataPath("/data/work-data.json"));
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        setWorkData(data?.workData);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };

    fetchData();
  }, []);

  if (!workData || workData.length === 0) return null;

  // Create infinite loop by duplicating array
  const infiniteWorkData = [...workData, ...workData];

  return (
    <section id="work">
      <div className="bg-softGray">
        <div className="container">
          <div className="py-16 xl:py-32 ">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7 mb-9 md:mb-16">
              <h2>Latest Works</h2>
              <p className="text-xl text-orange-500">( 04 )</p>
            </div>

            {/* Infinite Carousel */}
            <div className="overflow-hidden w-full">
              <style>{`
                @keyframes scroll-left {
                  0% {
                    transform: translateX(0);
                  }
                  100% {
                    transform: translateX(-50%);
                  }
                }
                
                .carousel-wrapper {
                  animation: scroll-left 10s linear infinite;
                }
                
                .carousel-wrapper:hover {
                  animation-play-state: paused;
                }
              `}</style>
              
              <div className="carousel-wrapper flex gap-8">
                {infiniteWorkData?.map((value: any, index: number) => (
                  <div
                    key={index}
                    className="group relative flex-shrink-0 min-w-[500px] h-80 bg-white overflow-hidden rounded-lg flex items-center justify-center"
                  >
                    <Image
                      src={getImgPath(value?.image)}
                      alt={value?.title}
                      width={500}
                      height={320}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-110"
                    />

                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestWork;
