import React from "react";
import Image from "next/image";
import Link from "next/link";
import Carousel from "./corousal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

const KeyProjects = () => {
  return (
    <div className="py-2">
      <div className="container pt-2">
        <div className="row">
          <div className="col-md-10 offset-md-1">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-5" data-aos="">
              {/* Start Subtitle */}
              <div className="row">
                <div className="col-md-10 offset-md-1" data-aos="">
                  {/* Start Section Header Title */}
                  <div className="section-header text-center mb-3">
                    <div className="mt-4 section-title text-center mb-4 pb-2">
                      {/* <h5 className="btn btn-pills bg-[#CA8E25] hover:bg-white"> */}
                      <h5 className="title mb-10">OUR KEY PROJECTS</h5>
                    </div>
                    {/* /. End Subtitle */}
                  </div>
                  {/*/. End Section Header */}
                </div>
              </div>

              <div className="sub-title fs-16">
                <p>
                  Emaar has redefined luxury living and urban landscapes with
                  global icons like Burj Khalifa and Dubai Marina. Their
                  visionary developments, including The Dubai Mall and Dubai
                  Creek Harbour, continue to set new benchmarks in architectural
                  excellence.
                </p>
              </div>
              {/* /.End Section Header Sub Title */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <Carousel />
        {/* OUR FUTURE PROSPECTS */}
        <div className="row">
          <div className="col-md-10 offset-md-1" data-aos="">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-3 mt-5">
              {/* Start Subtitle */}
              <div className="mt-4 section-title text-center mb-4 pb-2">
                <h4 className="title mb-8"> OUR FUTURE PROSPECTS</h4>
              </div>
              {/* /. End Subtitle */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="container mx-auto mb-5">
          <div className="flex flex-col md:flex-row overflow-hidden">
            <div className="md:w-1/2 p-6 flex flex-col justify-center">
              <p className="text-gray-700 mb-4">
                Emaar is advancing real estate with new residential, commercial,
                and hospitality projects, setting high standards in quality and
                innovation. Leveraging the latest technologies, Emaar enhances
                its developments and customer experience with smart home tech
                and advanced construction methods. Looking forward, Emaar aims
                for continued growth in Dubai and globally, exploring new
                markets, launching innovative projects, and focusing on
                sustainability and community development.
              </p>

              <ul className="list-checked pl-0">
                <li className="flex items-start space-x-4">
                  <span>
                    Emaar Hospitality Group leads luxury hospitality under Emaar
                    Properties.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span>
                    Address Hotels + Resorts offers luxury and prime locations
                    in Dubai.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span>
                    Vida Hotels and Resorts caters to modern travelers with
                    stylish designs.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span>
                    Emaar Entertainment manages top attractions like Dubai
                    Aquarium and Reel Cinemas.
                  </span>
                </li>
                <li className="flex items-start space-x-4">
                  <span>
                    Emaar sets benchmarks in hospitality, blending luxury with
                    innovation.
                  </span>
                </li>
              </ul>
            </div>
            <div className="md:w-1/2 h-64 md:h-auto relative">
              <Image
                width={500}
                height={500}
                src="/images/bg/New folder/nn.png" // Assuming assets folder is at root
                alt="Blog Image"
                className="responsive-img absolute inset-0 w-full rounded-xl h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
        {/* Why Emaar Properties */}
        <div className="row">
          <div className="col-md-10 offset-md-1" data-aos="">
            {/* Start Section Header Title */}
            <div className="section-header text-center mb-3 mt-5">
              {/* Start Subtitle */}
              <div className="mt-4 section-title text-center mb-4 pb-2">
                <h5 className="title mb-8">Why Emaar Properties</h5>
              </div>

              {/* /. End Subtitle */}
            </div>
            {/*/. End Section Header */}
          </div>
        </div>
        <div className="about-text align-items-center g-4 justify-content-between row">
          <div className="col-md-12 col-lg-7">
            <div className="row g-3 g-sm-4 align-items-center">
              {/* Image */}
              <div className="col-6">
                <div className="position-relative">
                  <div className="line-shape" />
                  <Image
                    width={500}
                    height={500}
                    src="/images/bg/New folder/10.jpeg"
                    className="img-fluid rounded-3 position-relative"
                    alt=""
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="row g-3 g-sm-4">
                  {/* Image */}
                  <div className="col-12">
                    <Image
                      height={500}
                      width={500}
                      src="/images/bg/New folder/8.jpeg"
                      className="img-fluid rounded-3"
                      alt=""
                    />
                  </div>
                  {/* Image */}
                  <div className="col-12">
                    <Image
                      width={500}
                      height={500}
                      src="/images/bg/New folder/11.jpeg"
                      className="img-fluid rounded-3"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-12 col-lg-5 ps-xxl-5">
            <div className="text-block">
              <h2 className="mb-2 text-lg font-bold">Social Responsibility</h2>
              <p className="mb-4">
                Emaar believes in giving back to the communities in which it
                operates. The company engages in a range of social
                responsibility initiatives, including community development
                programs, education and training, and charitable activities.
                These initiatives are designed to improve the quality of life
                for residents and contribute to the overall well-being of
                society.
              </p>
              <hr className="mt-3 mb-3" />
              <h2 className="mb-2 text-lg font-bold">
                Green Building Practices
              </h2>
              <p className="mb-4">
                Emaar employs green building practices in its developments,
                using energy-efficient materials, sustainable construction
                methods, and innovative technologies to reduce the carbon
                footprint of its projects. The company’s commitment to
                sustainability is evident in the numerous green certifications
                it has received for its buildings.
              </p>
            </div>
          </div>
        </div>
        {/* /.End Aspects */}
      </div>
    </div>
  );
};

export default KeyProjects;
