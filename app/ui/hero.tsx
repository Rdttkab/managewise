import React from "react";

const Hero = () => {
  return (
    <section className="w-[90%] mx-auto">
      <div className="flex items-center justify-center flex-col">
        <div className="flex items-center justify-center flex-col">
          <div className="flex items-center justify-center gap-4 p-0 pb-[30px]">
            <div>
              <div className="flex items-center justify-center border border-solid bg-white py-1 px-[10px] rounded-lg max-w-max">
                <p>👋</p>
                <p className="text-[#8247FF] font-semibold text-sm">
                  Welcome to Manage Wise!
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <h1 className="font-medium text-[85px] text-center ">
              Empower your business with &nbsp;<span className="text-secondary">Strategic</span>
              &nbsp;insights
            </h1>
          </div>
        </div>
        <div className="max-w-[700px] w-[60%] ">
          <p className="text-center text-[20px] font-medium text-[#767575]">
            Powerful management platform designed to streamline your business
            operations, boost productivity, and drive success
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 mt-[30px]">
          <div>
            <div>
              <a
                aria-label="Primary"
                data-reset="button"
                href="https://templatesunit.lemonsqueezy.com/checkout/buy/181cb12c-ca54-44c6-bebd-46e3b656defc"
                target="_blank"
                rel="noopener"
                className="flex items-center justify-center gap-4 bg-[#8247FF] py-4 px-[26px] text-white rounded-[18px]">
                <div>
                  <p className="font-semibold text-[20px]">Get Started</p>
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
                className="flex items-center justify-center gap-2 py-4 px-[26px] border border-solid border-[#DDD9D4] bg-white rounded-[18px]">
                <p className="font-semibold text-[20px]">Watch Demo</p>

                <div>
                  <div>
                    <svg
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      width="24"
                      height="24">
                      <path
                        fill-rule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                        clip-rule="evenodd"></path>
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
