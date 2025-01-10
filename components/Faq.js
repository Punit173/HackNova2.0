import React, { useState } from "react";
import faqData from "@/assets/faqData";
import {
  IoIosArrowDropdownCircle,
  IoIosArrowDropupCircle,
} from "react-icons/io";

const Faq = () => {
  const [openAnswer, setOpenAnswer] = useState(null);

  const toggleDropdown = (index) => {
    setOpenAnswer(openAnswer === index ? null : index);
  };

  return (
    <div className="my-20">
      <div className="overflow-hidden">
        <h1 className="text-5xl font-roboto font-bold text-center mb-16">
          FREQUENTLY ASKED QUESTIONS
        </h1>
        <div className="flex flex-col items-center">
          {faqData.map((item, index) => (
            <div
              key={index}
              className="border-2  mx-2 transition-transform ease-in-out duration-300 transform "
              style={{ borderColor: "#374151", width: "90%" }}
            >
              <div
                className={`cursor-pointer`}
                onClick={() => toggleDropdown(index)}
              >
                <div
                  className={`flex items-center justify-between p-4 transition-bg ease-in-out duration-700 ${
                    openAnswer === index ? "bg-lime-300" : ""
                  }`}
                >
                  <span
                    className={`text-lg ${
                      openAnswer === index ? "text-lime-700 fira-code font-bold" : ""
                    }`}
                  >
                    {item.question}
                  </span>
                  <span className={`text-xl`}>
                    {openAnswer === index ? (
                      <IoIosArrowDropupCircle />
                    ) : (
                      <IoIosArrowDropdownCircle />
                    )}
                  </span>
                </div>
              </div>
              {openAnswer === index && (
                <div
                  className="p-4 fira-code text-lime-300 transition-bg ease-in-out duration-300"
                  style={{ backgroundColor: "#354B30" }}
                >
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
