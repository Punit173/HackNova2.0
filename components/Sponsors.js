import Marquee from "react-fast-marquee";

const Sponsors = () => {
  return (
    <div className="my-20 space-y-20">
      {/* Previous Sponsors Section */}
      <div className="w-full">
        <div className="text-3xl font-roboto-mono font-bold text-center mb-10">
          <span>PREVIOUS SPONSORS</span>
        </div>

        {/* Marquee with Sponsors Logos */}
        <Marquee speed={100}>
          <div className="flex justify-center items-center gap-7">
            <a target="_blank" href="https://www.devfolio.co/">
              <img
                src="/sponsors/devfolio.png"
                alt="DEVFOLIO LOGO"
                className="h-20 object-contain"
              />
            </a>
            <a target="_blank" href="https://bit.ly/3uFZQpS">
              <img
                src="/sponsors/GD.png"
                alt="GD LOGO"
                className="h-20 object-contain"
              />
            </a>
            <a target="_blank" href="#">
              <img
                src="/sponsors/leap_geebee.png"
                alt="LG LOGO"
                className="h-20 object-contain"
              />
            </a>
            <a target="_blank" href="https://ethindia.co">
              <img
                src="/sponsors/ethindia.png"
                alt="ETHINDIA LOGO"
                className="h-20 object-contain"
              />
            </a>
            <a target="_blank" href="">
              <img
                src="/sponsors/polygon.png"
                alt="POLYGON LOGO"
                className="h-20 object-contain"
              />
            </a>
          </div>
        </Marquee>
      </div>

      {/* New Sponsors Section */}
      <div className="w-full">
        {/* Title */}
        <div className="text-3xl font-roboto-mono font-bold text-center mb-10">
          <span>NEW SPONSORS</span>
        </div>

        <div className="space-y-10">
          {/* Bronze Sponsors */}
          <div className="relative h-[75px]">
            <img
              src="/image.png"
              alt="Frame"
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-justify">
              <div className="text-lg leading-snug">
                Bronze Sponsors
              </div>
            </div>
          </div>
          <div className="text-center text-lg text-gray-500">Coming Soon...</div>

          {/* Silver Sponsors */}
          <div className="relative h-[75px]">
            <img
              src="/image.png"
              alt="Frame"
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-justify">
              <div className="text-lg leading-snug">
                Silver Sponsors
              </div>
            </div>
          </div>
          <div className="text-center text-lg text-gray-500">Coming Soon...</div>

          {/* Gold Sponsors */}
          <div className="relative h-[75px]">
            <img
              src="/image.png"
              alt="Frame"
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-justify">
              <div className="text-lg leading-snug">
                Gold Sponsors
              </div>
            </div>
          </div>
          <div className="text-center text-lg text-gray-500">Coming Soon...</div>

          {/* Platinum Sponsors */}
          <div className="relative h-[75px]">
            <img
              src="/image.png"
              alt="Frame"
              className="absolute w-full h-full object-contain"
            />
            <div className="absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-justify">
              <div className="text-lg leading-snug">
                Platinum Sponsors
              </div>
            </div>
          </div>
          <div className="text-center text-lg text-gray-500">Coming Soon...</div>
        </div>
      </div>
    </div>
  );
};

export default Sponsors;
