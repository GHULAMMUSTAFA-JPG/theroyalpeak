import React from "react";
import Link from "next/link";
import {FiMail} from '../assets/icons/vander'

export default function GetInTuch(){
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center">
            <h4 className="title mb-3">
              Looking to buy, rent, or sell your property?
            </h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              We are your top-notch choice for Dubai real estate, specializing
              in Azizi Riviera. Get in touch today!
            </p>
            <div className="mt-4 pt-2">
              <Link
                href="/contactus"
                className="btn btn-pills hover:bg-yellow-500 bg-[#C18721]"
              >
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
}