import React from "react";
import Image from "next/image";
import Link from "next/link";
// import VideoOne from "./components/modalVideo/videoOne";
export default function OurStory() {
  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-lg-6 col-md-6">
          <div className="about-left">
            <div className="position-relative shadow p-2 rounded-top-pill rounded-5 bg-white img-one">
              <Image
                src="/images/2a.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="img-fluid rounded-top-pill rounded-5"
                alt=""
              />

              {/* <VideoOne /> */}

              <div className="position-absolute top-0 start-0 z-n1">
                <Image
                  src="/images/svg/dots.svg"
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: "100%", height: "auto" }}
                  className="avatar avatar-xl-large"
                  alt=""
                />
              </div>
            </div>

            <div className="img-two shadow rounded-3 overflow-hidden p-2 bg-white">
              <Image
                src="/images/1a.jpg"
                width={0}
                height={0}
                sizes="100vw"
                style={{ width: "100%", height: "auto" }}
                className="img-fluid rounded-3"
                alt=""
              />
            </div>
          </div>
        </div>

        <div className="col-lg-6 col-md-6 mt-4 mt-sm-0 pt-2 pt-sm-0">
          <div className="section-title ms-lg-5">
            <h6 className="text-[#E7A91E] fw-medium mb-2">
              Our Vision : Mission of Emaar
            </h6>
            <h4 className="text-black mb-3">
              Efficiency. <br /> Transparency. Control.
            </h4>
            <p className="text-black para-desc mb-0">
              Emaar’s vision is to create value-added, master-planned
              communities that meet the full spectrum of lifestyle needs. Its
              mission is to shape new lifestyles, build communities that promote
              well-being, and contribute to the economic and social development
              of the regions where it operates. This vision is evident in the
              company’s commitment to creating sustainable developments that
              enrich the lives of residents and visitors alike.
            </p>
            <p>
              Emaar has expanded its footprint beyond Dubai to become a global
              real estate leader with a presence in several international
              markets, including the Middle East, North Africa, Pan-Asia,
              Europe, and North America. The company&apos;s international
              projects showcase its ability to blend local culture with modern
              architecture, creating iconic developments that appeal to a global
              audience.
            </p>
            <div className="mt-4">
              <Link
                href="/"
                className="btn btn-pills bg-[#CA8E25] hover:bg-white"
              >
                Read More
                <i className="mdi mdi-arrow-right align-middle"></i>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
