import React from "react";
import Link from "next/link";
import {FiMail} from '../assets/icons/vander'

export default function GetInTuch(){
    return (
      <div className="row justify-content-center">
        <div className="col-12">
          <div className="section-title text-center">
            <h4 className="title mb-3">Have Question ? Get in touch!</h4>
            <p className="text-muted para-desc mb-0 mx-auto">
              A great plateform to buy, sell and rent your properties without
              any agent or commisions.
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