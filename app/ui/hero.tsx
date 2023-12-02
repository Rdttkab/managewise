import React from "react";

const Hero = () => {
  return (
    <section className="mx-auto w-[90%]">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center">
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
          <div className="flex items-center justify-center">
            <h1 className="text-center text-[85px] font-medium ">
              Empower your business with &nbsp;
              <span className="text-secondary">Strategic</span>
              &nbsp;insights
            </h1>
          </div>
        </div>
        <div className="w-[60%] max-w-[700px] ">
          <p className="text-center text-[20px] font-medium text-[#767575]">
            Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success
          </p>
        </div>
        <div className="mt-[30px] flex items-center justify-center gap-6">
          <div>
            <div>
              <a
                aria-label="Primary"
                data-reset="button"
                href="https://templatesunit.lemonsqueezy.com/checkout/buy/181cb12c-ca54-44c6-bebd-46e3b656defc"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-4 rounded-[18px] bg-[#8247FF] px-[26px] py-4 text-white"
              >
                <div>
                  <p className="text-[20px] font-semibold">Get Started</p>
                </div>
              </a>
            </div>
          </div>
          <div>
            <div>
              <a
                href="https://www.youtube.com/"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-2 rounded-[18px] border border-solid border-[#DDD9D4] bg-white px-[26px] py-4"
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
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
