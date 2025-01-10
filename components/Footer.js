const Footer = () => {
  return (
    <div className="mt-20">
      <div>
        <h1 className="text-3xl flex justify-center font-roboto mt-5 mb-8 md:text-5xl sm:mb-5">
          GET IN TOUCH WITH US
        </h1>
      </div>

      <div className="flex space-y-10 mb-20 justify-center sm:collapse">
        <img
          src="/images/circle.png"
          className=" flex justify-center relative sm:h-0 sm:w-0 sm:ml-0 h-72 w-72"
        />
        <img
          src="/images/boy.png"
          className=" flex justify-center absolute sm:h-0 sm:w-0 sm:ml-0 h-72 w-72 animate-bounce ml-[7%] md:ml-0"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-evenly m-7 sm:m-0 text-center">
        <div className="md:ml-10">
          <p className="text-2xl text-lime-400 font-holtwood tracking-widest mt-9 -mb-4 md:mb-0 sm:text-3xl  ">
            CONTACT
          </p>
          <p className="text-slate-200 text-lg sm:text-xl mt-7 font-inter">
            Krishna Yadav
          </p>
          <p className="mt-0.5 text-slate-200 text-lg sm:text-xl">
            99106 18509
          </p>
          <p className="mt-4 text-slate-200 text-lg sm:text-xl">Sanskar Diwedi</p>
          <p className="mt-0.5 text-slate-200 text-lg sm:text-xl">
            95694 89818
          </p>
        </div>

        <div className="flex collapse absolute md:static -z-10 sm:mb-10 sm:visible h-72 w-72 space-y-10 justify-center ml-6">
          <img
            src="/images/circle.png"
            className=" relative sm:flex justify-center mb-10 ml-0 h-72 w-72"
          />
          <img
            src="/images/boy.png"
            className="absolute sm:flex justify-center mb-10 ml-6  h-72 w-72 animate-bounce"
          />
        </div>

        <div className="md:ml-5 mt-10 md:mt-0 mb-7 md:mb-0 text-center">
          <p className="text-2xl font-black font-holtwood text-lime-400 tracking-widest mb-1 md:mb-6 sm:mt-10 sm:text-3xl">
            EMAIL
          </p>
          <a
            href="mailto:hacknova@nsccsrm.tech"
            className="text-lg text-slate-200 sm:text-xl"
          >
            nscc@srmist.edu.in
          </a>
        </div>
      </div>
      <div className="flex justify-evenly sm:mt-20 ">
        <a href="https://twitter.com/nsccsrm?lang=en">
          <img src="/images/twitter_icon.png" className="h-8 w-8 mb-16 ml-5" />
        </a>
        <a href="https://www.linkedin.com/company/newton-school-coding-club-srmist/mycompany/">
          <img src="/images/linkden_icon.png" className="h-9 w-9 mb-16" />
        </a>
        <a href="https://www.instagram.com/nscc_srm/?hl=en">
          <img src="/images/insta_icon.png" className="h-9 w-9 mb-16" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
