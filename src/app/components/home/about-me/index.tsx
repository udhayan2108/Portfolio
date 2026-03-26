import { getImgPath } from "@/utils/image";
import Image from "next/image";

const AboutMe = () => {
  return (
    <section id="about">
      <div className="relative bg-softGray py-10 md:py-32">
        <div className="absolute top-0 w-full px-9">
          <Image
            src={getImgPath("/images/home/about-me/resume-bg-img.svg")}
            alt="resume-bg-img"
            width={1200}
            height={348}
            className="w-full"
          />
        </div>

        <div className="relative z-10">
          <div className="container">
            <div className="flex items-center justify-between gap-2 border-b border-black pb-7">
              <h2>About Me</h2>
              <p className="text-xl text-primary">( 01 )</p>
            </div>

            <div className="pt-10 xl:pt-16 flex gap-10 items-center justify-between">
              <div className="w-[303px] h-[440px] hidden lg:flex">
                <Image
                  src={getImgPath("/images/home/about-me/about-banner-img.svg")}
                  alt="about-banner"
                  width={303}
                  height={440}
                  className="w-full h-full"
                />
              </div>

              <div className="w-full lg:max-w-2xl flex-1">
                <p>
                  I am a passionate and motivated college student with a strong
                  interest in technology, design, and problem-solving. I enjoy
                  building creative and practical solutions, especially in web
                  development and software-based projects. My goal is to
                  continuously learn, improve my skills, and apply them to
                  real-world challenges.
                </p>
                <p className="mt-6">
                  I have experience working with HTML, CSS, JavaScript, and
                  React, along with a basic understanding of backend tools such
                  as Python and MySQL. I am particularly interested in
                  developing user-friendly and visually appealing applications
                  that deliver a great user experience.
                </p>
                <p className="mt-6">
                  I actively participate in projects and hackathons, exploring
                  innovative ideas and collaborating to build impactful
                  solutions. These experiences have helped me improve technical
                  skills, teamwork, and creative problem-solving under pressure.
                </p>
                <p className="mt-6">
                  I am always eager to learn new technologies and stay updated
                  with industry trends. I believe in continuous growth and
                  strive to become a skilled developer who can contribute
                  meaningfully to the tech world.
                </p>

                <div className="grid grid-cols-3 py-10 xl:py-16 gap-5 border-b border-mistGray">
                  {[
                    { count: "12+", label: "Projects completed" },
                    { count: "05+", label: "Hackathons participated" },
                    { count: "120+", label: "Algorithm problems solved" },
                  ].map((item, i) => (
                    <div key={i}>
                      <h3>{item.count}</h3>
                      <p className="text-base md:text-lg text-black">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="pt-8 xl:pt-14 flex flex-col sm:flex-row items-center gap-4">
                  <div className="flex items-center gap-3.5">
                    <Image
                      src={getImgPath("/images/icon/lang-icon.svg")}
                      alt="lang-icon"
                      width={30}
                      height={30}
                    />
                    <p className="text-base xl:text-xl text-black">Language</p>
                  </div>
                  <div className="flex flex-wrap justify-center items-center gap-2.5">
                    {["English", "Tamil"].map((lang) => (
                      <p
                        key={lang}
                        className="bg-white py-2 md:py-3.5 px-4 md:px-5 w-fit rounded-full text-base xl:text-xl"
                      >
                        {lang}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
