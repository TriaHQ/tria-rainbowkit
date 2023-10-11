import React from "react";
import "./Landing.css";

export default function Landing(props:any) {
  return (
    <section className="relative">
      {/* Glass background */}
      <div className="absolute inset-0 backdrop-blur-md"></div>

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          {/* Your SVG code */}
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-20 md:pb-20">
          {/* Section header */}
          <div className="pt-10 text-center bordered rounded-2xl pb-2 md:pb-8 backdrop-blur-sm bg-black/50">
            <h1 className="main_text font-sans font-bold leading-tighter tracking-tighter animate__animated animate__fadeIn animate__delay-1s text-white">
            Welcome to Acme  <div className="bg-clip-text text-transparent bg-gradient-to-r from-gray-500 to-teal-400 animate__animated animate__fadeIn animate__delay-1s pb-4">Marketplace</div>
            </h1>
            <div className="max-w-3xl mx-auto">
              <p className="text-xl font-bold font-serif text-gray-600 mb-8 animate__animated animate__fadeIn animate__delay-3s text-white">
              A single place to buy and sell any digital asset across any chain from Ethereum, Solana, Polygon, and more!
              </p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center animate__animated animate__fadeIn animate__delay-3s">
                <div className="animate__animated animate__fadeIn animate__delay-3s">
                  <a className="btn text-white bodered font-sans text-2xl rounded-lg bg-black p-4 hover:bg-blue-400 w-full mb-4 sm:w-auto sm:mb-0" href="#0">
                  Login
                  </a>
                </div>
                {/* <div className="animate__animated animate__fadeIn animate__delay-4s">
                  <a className="btn text-white p-2 bg-gray-900 hover:bg-gray-800 w-full sm:w-auto sm:ml-4" href="#0">
                    Learn more
                  </a>
                </div> */}
              </div>
            </div>
          </div>

          {/* Hero image */}
          <img className="mt-16 animate__animated animate__fadeIn animate__delay-3s" src="/images/hero-image.png" alt="Hero" />
        </div>
      </div>
    </section>
  );
}