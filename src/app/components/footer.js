import React from "react";
import Link from "next/link";
import Image from "next/image";

import {FiShoppingCart, FiDribbble, FiLinkedin, FiFacebook, FiInstagram, FiTwitter, FiMail, FiMapPin, FiPhone} from "../assets/icons/vander"

export default function Footer(){
    return (
      <>
        <section
          className="bg-building-pic d-table w-100"
          style={{ backgroundImage: "url('/images/building.png')" }}
        ></section>
        <footer className="bg-black">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-py-60 footer-border">
                  <div className="row">
                    <div className="col-lg-5 col-12 mb-0 mb-md-4 pb-0 pb-md-2">
                      <Link href="#" className="logo-footer">
                        <Image
                          src="/images/logo1.png"
                          width={132}
                          height={32}
                          alt=""
                        />
                      </Link>
                      <p className="mt-4">
                        The Royal Peak Real Estate | Dubai's Leading specialists
                        in villas, apartments, and commercial properties,
                        offering top-notch services in renting, buying, selling,
                        and consultancy.
                      </p>
                      <ul className="list-unstyled social-icon foot-social-icon mb-0 mt-4">
                        <li className="list-inline-item">
                          <Link
                            href="https://www.facebook.com/shreethemes"
                            target="_blank"
                            className="rounded-3"
                          >
                            <FiFacebook className="fea icon-sm align-middle text-[#C88927]" />
                          </Link>
                        </li>
                        <li className="list-inline-item">
                          <Link
                            href="https://www.instagram.com/theroyalpeak.ae/"
                            target="_blank"
                            className="rounded-3"
                          >
                            <FiInstagram className="fea icon-sm align-middle text-[#C88927]" />
                          </Link>
                        </li>

                        <li className="list-inline-item">
                          <Link
                            href="mailto:contact@theroyalpeak.com"
                            className="rounded-3"
                          >
                            <FiMail className="fea icon-sm align-middle text-[#C88927]" />
                          </Link>
                        </li>
                      </ul>
                    </div>

                    <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Discover More</h5>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            About us
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Our Services
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Our Team
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Off-Plan Properties
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Rental Properties
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Join us as Broker
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Latest Articles
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Top Tier Developers
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* <div className="col-lg-2 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Usefull Links</h5>
                      <ul className="list-unstyled footer-list mt-4">
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Terms of Services
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Privacy Policy
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Listing
                          </Link>
                        </li>
                        <li>
                          <Link href="#" className="text-foot">
                            <i className="mdi mdi-chevron-right align-middle me-1"></i>{" "}
                            Contact us
                          </Link>
                        </li>
                      </ul>
                    </div> */}

                    <div className="col-lg-3 col-md-4 col-12 mt-4 mt-sm-0 pt-2 pt-sm-0">
                      <h5 className="footer-head">Contact Details</h5>

                      <div className="d-flex mt-4">
                        <FiMapPin className="fea icon-sm text-[#C88927] mt-1 me-3" />
                        <div className="">
                          <p className="mb-2">
                            Azizi Riviera, <br /> Meydan One
                          </p>
                        </div>
                      </div>

                      <div className="d-flex mt-4">
                        <FiMail className="fea icon-sm text-[#C88927] mt-1 me-3" />
                        <Link
                          href="mailto:contact@example.com"
                          className="text-foot"
                        >
                          contact@theroyalpeak.com
                        </Link>
                      </div>

                      <div className="d-flex mt-4">
                        <FiPhone className="fea icon-sm text-[#C88927] mt-1 me-3" />
                        <Link href="tel:+152534-468-854" className="text-foot">
                          +971 52 788 8891
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-py-30 footer-bar">
            <div className="container text-center">
              <div className="row">
                <div className="col">
                  <div className="text-center">
                    <p className="mb-0">
                      © {new Date().getFullYear()} THE ROYAL PEAK | Real Estate
                      & Developers
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </>
    );
}