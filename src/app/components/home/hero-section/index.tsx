"use client";
import { getImgPath } from "@/utils/image";
import Image from "next/image";
import { useEffect, useState } from "react";

const index = () => {
  const titles = [
    "Full Stack Developer",
    "Video Editor",
    "Web Developer",
    "Photo Editor",
    "Basic App Designer",
  ];

  const [activeTitle, setActiveTitle] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTitle((prev) => (prev + 1) % titles.length);
    }, 2500);
    return () => clearInterval(timer);
  }, [titles.length]);

  return (
    <section id="hero" className="relative hero-section overflow-hidden pt-24 md:pt-32 pb-12 lg:pb-20 xl:pt-40">
      {/* Tech-style background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-indigo-950 to-sky-900 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.06),transparent_50%),radial-gradient(circle_at_80%_80%,rgba(255,255,255,0.04),transparent_40%)] pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:35px_35px] opacity-25 pointer-events-none -z-10"></div>
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:35px_35px] opacity-20 pointer-events-none -z-10"></div>
      <div className="absolute top-0 right-10 w-40 h-40 border border-cyan-300/30 rounded-full blur-[28px] -z-10"></div>
      <div className="absolute bottom-10 left-20 w-56 h-56 border border-purple-300/30 rounded-full blur-[32px] -z-10"></div>

      <div className="container">
        <div className="lg:flex grid grid-cols-1 sm:grid-cols-2 gap-7 md:gap-4 items-center justify-between">
          {/* Left Content */}
          <div className="flex flex-col gap-4 md:gap-7 max-w-2xl">
            <div>
              <div className="flex items-center gap-4 md:gap-8">
                <h1 className="text-white text-5xl md:text-6xl font-extrabold">I'm Udhayan</h1>
                <div className="wave animate-bounce">
                  <Image
                    src={getImgPath("/images/home/banner/wave-icon.svg")}
                    alt="wave-icon"
                    width={50}
                    height={50}
                    className="w-10 md:w-16"
                  />
                </div>
              </div>
              <div className="min-h-[80px] md:min-h-[90px]">
                <h1 className="transition-all duration-500 text-orange-500 font-bold text-3xl md:text-4xl lg:text-5xl">
                  {titles[activeTitle]}
                </h1>
              </div>
            </div>
            <p className="text-secondary font-normal max-w-md xl:max-w-xl text-sm md:text-base leading-relaxed">
              I am a passionate Full Stack Developer with a strong interest in building 
              responsive and user-friendly web applications. I specialize in developing 
              dynamic front-end interfaces and scalable backend systems using modern 
              technologies. I enjoy turning ideas into real-world solutions and 
              continuously improving my skills through projects and hands-on experience.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-4 pt-6 md:pt-8">
              <a
                href="https://www.linkedin.com/in/udhayan-b-b70394325?utm_source=share_via&utm_content=profile&utm_medium=member_android"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white hover:bg-white/30 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/25"
                title="LinkedIn"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.722-2.006 1.422-.103.249-.129.597-.129.946v5.437h-3.554s.05-8.814 0-9.752h3.554v1.381c.43-.664 1.199-1.61 2.915-1.61 2.132 0 3.732 1.391 3.732 4.384v5.597zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.707 0-.956.77-1.708 1.963-1.708 1.192 0 1.915.752 1.94 1.708 0 .949-.748 1.707-1.988 1.707zm1.667 11.597H3.67V9.557h3.334v10.895zM22.224 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.224 0z"/>
                </svg>
              </a>
              <a
                href="https://github.com/udhayan2108"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white hover:bg-white/30 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/25"
                title="GitHub"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white hover:bg-white/30 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/25"
                title="Twitter"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 0a10.5 10.5 0 00-10-5.5.5.5 0 001-.5A4.5 4.5 0 0023 3z"/>
                </svg>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full border-2 border-white/60 bg-white/10 text-white hover:bg-white/30 hover:text-slate-900 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-white/25"
                title="Instagram"
              >
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.266.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163C8.756 0 8.334.012 7.053.07 2.695.272.273 2.69.07 7.052C.012 8.333 0 8.756 0 12c0 3.244.012 3.667.07 4.947.202 4.358 2.623 6.78 6.985 6.984 1.281.058 1.703.07 4.947.07 3.244 0 3.666-.012 4.947-.07 4.358-.202 6.78-2.627 6.984-6.984.058-1.28.07-1.702.07-4.947 0-3.244-.012-3.667-.07-4.947-.202-4.358-2.627-6.78-6.984-6.984C15.667.012 15.244 0 12 0z"/>
                  <path d="M12 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8z"/>
                  <circle cx="18.406" cy="5.594" r="1.44"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Right Image - Enhanced */}
          <div className="flex justify-center lg:justify-end items-center">
            <div className="relative w-64 sm:w-80 md:w-96 h-auto group">
              {/* Glow effect background */}
              {/* Main image with solid panel */}
              <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl group-hover:shadow-3xl transition-all duration-500 transform group-hover:scale-105 border border-slate-200">
                <Image
                  src={getImgPath("/images/home/banner/banner-img.png")}
                  alt="banner-img"
                  width={400}
                  height={380}
                  className="block w-full h-auto object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default index;
