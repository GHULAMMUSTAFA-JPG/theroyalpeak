"use client";
import dynamic from "next/dynamic";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import Link from "next/link";
import { FaLocationArrow, FaLocationPin, FaPhone } from "react-icons/fa6";
import { PiBriefcaseFill } from "react-icons/pi";
import localFont from "next/font/local";
import Image from "next/image";
FaLocationPin;

// const stroma = localFont({ src: "../fonts/Stroma-Regular.ttf" });
// const roboto = localFont({ src: "../fonts/Roboto-Black.ttf" });

var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}

// This is for Next.js. On Rect JS remove this line
const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

const Carousel = () => {
  const options = {
    loop: true,
    margin: 20,
    nav: true,
    dots: false,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
      992: {
        items: 3,
      },
    },
  };

  return (
    <OwlCarousel className="owl-theme blog-carousel" {...options}>
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4 bg-red-500">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/images/bg/New folder/burj-khalifa_wallpaper.jpg"
              className=" object-contain h-fit "
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/aziziriviera">
              <span className="text-lg">Burj Khalifa</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <FaLocationPin />
            Downtown Dubai, Dubai
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4 bg-red-500">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/images/bg/New folder/Dubai-Mall1.jpg"
              className=" object-contain h-fit"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/aziziriviera">
              <span className="text-lg">Dubai Mall</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <FaLocationPin />
            Downtown Dubai, Dubai
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4 bg-red-500">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/images/bg/New folder/dubai-marina1.jpg"
              className="object-contain h-full"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}
        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/azizimina">
              <span className="text-lg">Dubai Marina</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <FaLocationPin />
            Persian Gulf coast
          </div>
        </div>
        {/* /.End Avatar Info */}
      </div>

      {/* /.End Grid Post */}
      {/* Start Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4 bg-red-500">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/images/bg/New folder/Dubai Creek Harbour (2).jpg"
              className=" object-contain h-fit"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/azizialiyah">
              <span className="text-lg">Dubai Creek Harbour</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <FaLocationPin />
            Ras Al Khor, Dubai
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
      {/* /.End Grid Post */}
      <div className="team-member">
        <div className="member-header overflow-hidden position-relative rounded-4 bg-red-500">
          <div className="w-full h-[45vh] overflow-hidden">
            <Image
              layout="responsive"
              src="/images/bg/New folder/Opera District dubai.jpg"
              className=" object-contain h-fit"
              alt=""
              width={100}
              height={100}
              loading="eager"
            />
          </div>
        </div>
        {/* Start Avatar Info */}

        <div className="flex items-center flex-col">
          <h5 className="mt-3 mb-1">
            <Link href="/azizialiyah">
              <span className="text-lg">Opera District Dubai</span>
            </Link>
          </h5>
          <div className="flex items-center gap-x-2">
            <FaLocationPin />
            Downtown Dubai,Dubai
          </div>
        </div>

        {/* /.End Avatar Info */}
      </div>
    </OwlCarousel>
  );
};
export default Carousel;
