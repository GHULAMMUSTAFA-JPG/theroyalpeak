"use client";
import React from "react";
import { useState, useEffect } from "react";

const Faqs = () => {
  const questions = [
    "What makes Emaar a leading developer?",
    "How can I invest in Emaar Properties?",
    "What are the main communities by Emaar?",
    "What are Emaar’s major projects?",
    "How does Emaar ensure sustainability?",
    "What is Emaar's global presence?",
  ];

  const answers = [
    "Emaar’s success as a leading developer is due to its commitment to quality, innovation, and sustainability. The company’s iconic developments, high standards of construction, and customer-centric approach have made it a trusted name in the real estate industry.",
    "Investing in Emaar Properties is easy and can be done through the purchase of residential or commercial properties, or by investing in Emaar’s publicly traded shares on the Dubai Financial Market. Emaar also offers a range of investment opportunities through its various subsidiaries and developments.",
    "Some of the main communities developed by Emaar include Emirates Living, Dubai Hills Estate, Emaar Beachfront, and Arabian Ranches. Each of these communities offers a unique living experience, with a mix of residential options and amenities to suit different lifestyles.",
    "Emaar’s major projects include Burj Khalifa, The Dubai Mall, Dubai Marina, and Downtown Dubai. These developments have become iconic landmarks in Dubai, attracting millions of visitors and setting new standards in real estate development.",
    "Emaar is committed to sustainability through the use of green building practices, energy-efficient materials, and innovative technologies. The company also engages in social responsibility initiatives and community development programs to promote sustainability and improve the quality of life for residents.",
    "Emaar has a strong global presence, with projects in several international markets, including Egypt, Saudi Arabia, Turkey, India, and the United States. The company’s international projects showcase its ability to adapt its expertise to different markets and create developments that appeal to a global audience.",
  ];

  const [activeQuestion, setActiveQuestion] = useState(null);

  const shuffleQuestions = () => {
    for (let i = questions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [questions[i], questions[j]] = [questions[j], questions[i]];
      [answers[i], answers[j]] = [answers[j], answers[i]];
    }
  };

  useEffect(() => {
    shuffleQuestions();
  }, []);

  const toggleAnswer = (index) => {
    setActiveQuestion(index === activeQuestion ? null : index);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-10 offset-md-1" data-aos="">
          {/* Start Section Header Title */}
          <div className="section-header text-center  ">
            {/* Start Subtitle */}
            <div className=" section-title text-center">
              <h5 className="title mb-8">FAQ&apos;s</h5>
            </div>

            {/* /. End Subtitle */}
          </div>
          {/*/. End Section Header */}
        </div>
      </div>

      <div>
        <div className="container pb-4">
          <div className="row">
            <div className="col-md-10 offset-md-1">
              {/* Start Section Header Title */}
              <div className="section-header text-center mb-5" data-aos="">
                {/* Start Section Header title */}
                <h2 className="h4 fw-semibold mb-3 section-header__title text-capitalize">
                  Emaar Properties: <br /> Guide to Luxury Living in Dubai
                </h2>
                {/* /.End Section Header Title */}
                {/* Start Section Header Sub Title */}
                <div className="sub-title fs-16">
                  Emaar’s commitment to quality extends to its customer service,
                  with a dedicated team of professionals who are available to0
                  assist with all aspects of the buying, renting, and ownership
                  process. From the initial inquiry to after-sales support,
                  Emaar is committed to providing an exceptional customer
                  experience that exceeds expectations.
                </div>
                {/* /.End Section Header Sub Title */}
              </div>
              {/*/. End Section Header */}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-2 mb-5 max-w-3xl">
        <ul className="list-none space-y-4">
          {questions.map((question, index) => (
            <li key={index}>
              <button
                className={`w-full flex items-center justify-between focus:outline-none rounded-lg px-4 py-2 text-left shadow hover:shadow-md ${
                  activeQuestion === index
                    ? "bg-gray-100 text-gray-700"
                    : "text-gray-900"
                }`}
                onClick={() => toggleAnswer(index)}
              >
                <span className="text-lg font-medium">{`Q${
                  index + 1
                }: ${question}`}</span>
                <svg
                  className={`h-6 w-6 transform transition duration-200 ease-in-out ${
                    activeQuestion === index ? "rotate-180" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {activeQuestion === index && (
                <div className="text-base leading-6 mt-2 px-4 pb-4">
                  {answers[index]}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Faqs;
