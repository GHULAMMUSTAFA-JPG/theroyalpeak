import React from "react";
import Link from "next/link";
import Image from "next/image";

import Navbar from "../components/navbar";
import { Hero } from "./sideComponent";
import Footer from "../components/footer";
import ScrollTop from "../components/scrollTop";

import { blogData } from "../data/data";

export default function BlogDetail() {
  return (
    <>
      <Navbar
        navClass="defaultscroll sticky"
        logolight={true}
        menuClass="navigation-menu nav-left nav-light"
      />
      <Hero />
      <div>
        {/* className="section" */}
        <div className="pt-[100px] px-5 ">
          {/* className="container" */}
          <div className="row g-4">
            {/* flex-cols-2  */}
            {/* all of component seen going down */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* <BlogDetailContent
              blogData={blogData}
              commentsData={commentsData}
            /> */}
            {/* Side Component about search and recent post and tags */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}
            {/* -------------------------------------------------------- */}

            {/* <SideComponent resentData={resentData} /> */}
          </div>
        </div>
      </div>
      <Footer />
      <ScrollTop />
    </>
  );
}
