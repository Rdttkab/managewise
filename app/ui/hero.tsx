import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="bg-hero-pattern flex w-full flex-col items-center justify-center pt-[80px]">
      <div className="flex w-[90%] max-w-7xl flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center pb-2.5">
          <div className="flex flex-col items-center justify-center gap-2 pb-5">
            <div className="flex items-center justify-center gap-4 p-0 pb-[30px]">
              <div>
                <div className="flex max-w-max items-center justify-center rounded-lg border border-solid bg-white px-[10px] py-1">
                  <p>👋</p>
                  <p className="text-sm font-semibold text-[#8247FF]">
                    Welcome to Manage Wise!
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-shrink-0 flex-col justify-start">
              <h1 className="text-center text-[54px] font-medium leading-[1em] tracking-[-2px] sm:text-[85px]">
                Empower your business with &nbsp;
                <span className="text-secondary">Strategic</span>
                &nbsp;insights
              </h1>
            </div>
          </div>
          <div className="w-[60%] max-w-[700px]">
            <p className="text-center text-[20px] font-medium text-[#767575]">
              Powerful management platform designed to streamline your business
              operations, boost productivity, and drive success
            </p>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-6 pt-[20px] sm:w-fit sm:flex-row sm:pt-[30px]">
            <div className="w-full sm:w-fit">
              <div className="w-full sm:w-fit">
                <a
                  aria-label="Primary"
                  data-reset="button"
                  href="https://templatesunit.lemonsqueezy.com/checkout/buy/181cb12c-ca54-44c6-bebd-46e3b656defc"
                  target="_blank"
                  rel="noopener"
                  className="flex w-full items-center justify-center gap-4 rounded-[18px] bg-[#8247FF] px-[26px] py-4 text-white sm:w-fit"
                >
                  <div>
                    <p className="text-[20px] font-semibold">Get Started</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="w-full sm:w-fit">
              <div className="w-full sm:w-fit">
                <a
                  href="https://www.youtube.com/"
                  target="_blank"
                  rel="noopener"
                  className="flex w-full items-center justify-center gap-2 rounded-[18px] border border-solid border-[#DDD9D4] bg-white px-[26px] py-4 sm:w-fit"
                >
                  <p className="text-[20px] font-semibold">Watch Demo</p>

                  <div>
                    <div>
                      <svg
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        width="24"
                        height="24"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-[90%] flex-col items-center justify-center gap-2.5 pb-[10px] pt-[60px]">
          {/* height: 824px; */}
          <div className="flex w-full max-w-7xl flex-col items-center justify-center rounded-[27px] ">
            {/* a
    box-shadow: 0 0.6021873017743928px 0.36131238106463576px -0.9166666666666666px #fafcff14, 0 2.288533303243457px 1.3731199819460744px -1.8333333333333333px #fafcff14, 0 10px 6.000000000000001px -2.75px #fafcff11, 0 34px 30px -16px #e3e7ed;
   
    flex: 1 0 0px;
    
    gap: 10px;
    height: 1px;
    
    overflow: hidden;
    padding: 0;
    position: relative;
    transform: perspective(1200px);
    
    will-change: transform;
    z-index: 1; */}
            <div className="relative rounded-[27px]">
              <Image
                src="/hero.webp"
                alt="Graph"
                width={1200}
                height={664}
                className="rounded-[27px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
