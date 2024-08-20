import React from "react";
import Link from "next/link";
import Image from "next/image";
import OurStory from "./ourstory";
import KeyProjects from "./keyProjects";
import Faqs from "./faqs";
import GetInTuch from "../components/getInTuch";
export const Hero = () => {
  return (
    <>
      <section
        className="w-full  bg-half-170 d-table"
        style={{
          backgroundImage: "url('/images/bg/1.jpg')",
        }}
      >
        <div className="bg-overlay bg-gradient-overlay-2"></div>
        <div className="container">
          <div className="row mt-5 justify-content-center">
            <div className="col-12">
              <div className="title-heading text-center">
                {/* <span className="badge bg-primary">Towntor</span> */}
                <p className="text-5xl font-medium title-dark mt-4 mb-0 text-white ">
                  {/* sub-heading heading fw-semibold  title-dark */}
                  Emaar Properties
                </p>
                <p className="text-white pt-3">
                  Emaar Properties, headquartered in Dubai, is a globally
                  renowned real estate developer, known for its innovative and
                  luxurious developments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="position-relative">
        <div className="shape overflow-hidden text-white">
          <svg
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <div className="mt-20">
        <OurStory />
      </div>
      <div className="mt-20">
        <KeyProjects />
      </div>
      <div className="mt-20 mb-0">
        <Faqs />
      </div>
      <div className="container mt-100 mt-60">
        <GetInTuch />
      </div>
    </>
  );
};
