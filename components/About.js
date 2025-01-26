import React, { useEffect } from "react";
import Marquee from "react-fast-marquee";

const About = () => {
  React.useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://apply.devfolio.co/v2/sdk.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className="my-12 overflow-hidden">
      <Marquee speed={200}>
        <div className=" text-[32px] lg:text-[48px]   text-white">
          <div className="inline-flex gap-10 font-roboto-mono ">
            <span>INNOVATE,</span>
            <span className="text-[#91ff52]">CODE,</span>
            <span>CONQUER :</span>
            <span>
              UNLEASH THE FUTURE AT HACK
              <span className="text-[#91ff52]"> NOVA 2.0</span>
            </span>
            <span></span>
            <span></span>
          </div>
        </div>
      </Marquee>
      <h1 className="text-center font-bold my-8 text-5xl pt-8">WHO WE ARE!</h1>
      <div className="flex justify-center mx-2 overflow-hidden">
        <div className="">
          <div className="relative w-[800px] h-[600px] max-md:w-[450px] max-md:h-[500px] overflow-hidden">
            <img
              src="/aboutFrame.svg"
              alt="Frame"
              className="absolute w-full h-full object-contain max-md:hidden"
            />

            <div className="absolute w-[600px] max-md:w-[350px] top-1/4 md:top-1/2 left-1/2 mt-4 transform -translate-x-1/2 -translate-y-1/2 text-[#92FF52] text-justify overflow-hidden">
              <p className="text-xl max-md:text-sm font-bold leading-snug fira-code ">
                Welcome to HackNova 2.0, the Newton School of Coding Club at SRM's
                thrilling coding festival. We invite enthusiastic developers,
                creators, and tech lovers to join us in a vibrant environment of
                ingenuity and problem-solving that combines the thrill of a
                hackathon with the web development domain. HackNova 2.0 is a
                platform where bright minds get together to explore, brainstorm,
                and create innovative solutions, with a particular focus on web
                development difficulties. It's not simply a hackathon.
              </p>
            </div>
            <div className="w-full h-[180px] flex justify-center items-center  absolute bottom-7 ">
              <img
                src="\aboutAvatar.svg"
                width={140}
                height={100}
                className="md:hidden   "
              ></img>
            </div>
          </div>
        </div>

        <div className="pt-10 max-lg:hidden">
          <img src="aboutAvatar.svg" alt="Avatar" />
        </div>
      </div>

      {/* <div className="relative  h-[60px] group transition-transform duration-300 hover:scale-105 hover:shadow-glow overflow-hidden">

      <div className="relative  h-[60px] group transition-transform duration-300 hover:scale-105 hover:shadow-glow overflow-hidden">


        <img
          src="/regFrame.svg"
          alt="Frame"
          className="absolute w-full h-full object-contain"
        />

        <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-justify">
          <a
            href="#"
            className="text-2xl max-md:text-sm font-bold leading-snug transition-colors hover:text-white"
          >
            REGISTER
          </a>
        </div>
      </div> */}
      <div className="relative flex flex-col md:flex-row justify-around md:w-[40%]  mx-auto">
        {/* <div className="relative  h-[60px] group transition-transform duration-300 hover:scale-105 hover:shadow-glow overflow-hidden mb-2">
          <a href="#">
            <img
              src="/regFrame.svg"
              alt="Frame"
              className="relative w-full h-full object-contain"
            />

            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-justify">
              <img
                // src="/devfolio_logo.svg"
                src="/devfolio_dark.svg"
                alt="Frame"
                className="relative md:w-full md:h-full ml-5 md:ml-0 w-[80%] h-[80%] object-contain"
              />
            </div>
          </a>
        </div> */}
        <div className="relative flex justify-center items-center h-[60px] group transition-transform duration-300 hover:scale-105 hover:shadow-glow overflow-hidden mb-2">
          <div
            class="apply-button"
            data-hackathon-slug="hacknova"
            data-button-theme="dark-inverted"
            style={{ height: "44px", width: "312px" }}
          ></div>
        </div>

        {/* <div className="relative   h-[60px] group transition-transform duration-300 hover:scale-105 hover:shadow-glow overflow-hidden mb-2">
          <a href="#">
            <img
              src="/regFrame.svg"
              alt="Frame"
              className="relative w-full h-full object-contain"
            />

            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-black text-justify">
              <img
                src="/discord_dark_logo.svg"
                alt="Frame"
                className="relative w-full h-full object-contain"
              />
            </div>
          </a>
        </div> */}
        <div className="relative   h-[60px] group transition-transform duration-300 hover:scale-105 hover:shadow-glow overflow-hidden mb-2">
          <a href="https://discord.gg/UsnCsJKd6n" target="_blank">
            <img
              src="/regFrame.svg"
              alt="Frame"
              className="relative w-full h-full object-contain"
            />

            <div className="absolute inset-[-50%] flex items-center justify-center">
              <img
                src="/discord_dark_logo.svg"
                alt="Frame"
                className="relative w-full h-full object-contain"
              />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
