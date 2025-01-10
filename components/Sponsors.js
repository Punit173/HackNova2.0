import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div className="my-20 space-y-20">
      {/* Previous Sponsors Section */}
      <div className="w-full">
        {/* Title */}
        <div className="text-3xl font-roboto-mono font-bold text-center mb-10">
          <span>PREVIOUS SPONSORS</span>
        </div>

        {/* Title Sponsors */}
        <div className="space-y-10">
          <div className="relative h-[110px]">
            <img
              src="/image.png"
              alt="Frame"
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-justify">
              <div className="text-xl font-bold leading-snug">
                Title Sponsors
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col max-md:px-8 justify-center items-center gap-7">
            <a target="_blank" href="https://www.devfolio.co/">
              <img
                src="/sponsors/devfolio.png"
                alt="DEVFOLIO LOGO"
                className="h-20"
              />
            </a>
            <a target="_blank" href="https://bit.ly/3uFZQpS">
              <img src="/sponsors/GD.png" alt="GD LOGO" className="h-30 w-40" />
            </a>
            <a target="_blank" href="#">
              <img
                src="/sponsors/leap_geebee.png"
                alt="LG LOGO"
                className="h-28 w-50"
              />
            </a>
          </div>

          {/* Platinum Sponsors */}
          <div className="relative h-[110px]">
            <img
              src="/image.png"
              alt="Frame"
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-justify">
              <div className="text-xl font-bold leading-snug">
                Platinum Sponsors
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col max-md:px-8 justify-center items-center gap-7">
            <a target="_blank" href="https://polygon.technology/">
              <img
                src="/sponsors/polygon.png"
                alt="POLYGON LOGO"
                className="h-20"
              />
            </a>
            <a target="_blank" href="https://ethindia.co">
              <img
                src="/sponsors/ethindia.png"
                alt="ETHINDIA LOGO"
                className="h-20"
              />
            </a>
            <a target="_blank" href="">
              <img src="/sponsors/dei.png" alt="DEI LOGO" className="h-40" />
            </a>
          </div>

          {/* Gold Sponsors */}
          <div className="relative h-[110px]">
            <img
              src="/image.png"
              alt="Frame"
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-justify">
              <div className="text-xl font-bold leading-snug">
                Gold Sponsors
              </div>
            </div>
          </div>
          <div className="flex max-md:flex-col max-md:px-8 justify-center items-center gap-7">
            <a target="_blank" href="">
              <img
                src="/sponsors/belgian-waffle.png"
                alt="BELGIAN WAFFLE LOGO"
                className="h-40"
              />
            </a>
          </div>
        </div>
      </div>

      {/* New Sponsors Section */}
      <div className="w-full">
        {/* Title */}
        <div className="text-3xl font-roboto-mono font-bold text-center mb-10">
          <span>NEW SPONSORS</span>
        </div>

        {/* Empty Section */}
        <div className="flex justify-center items-center h-[110px] text-gray-500">
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
