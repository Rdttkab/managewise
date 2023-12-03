import Image from "next/image";

const Footer = () => {
  return (
    <footer className="bg-septenary flex items-center justify-center pb-[40px] pt-[80px]">
      <div className="flex w-[90%] max-w-7xl flex-col items-center justify-center gap-[40px] sm:justify-start sm:gap-[120px]">
        <div className="flex w-full max-w-7xl flex-col items-center justify-center gap-[40px] sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="relative h-[48px] w-[193px]">
              <Image src="/managewise.webp" alt="Logo" fill />
            </div>
          </div>
          <div>
            <div>
              <div className="flex flex-col items-center justify-start gap-2.5 sm:items-start">
                <div>
                  <p>
                    <a href="./#features" target="_blank">
                      Features
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    <a href="./#faq" target="_blank">
                      FAQ
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    <a href="./#pricing" target="_blank">
                      Pricing
                    </a>
                  </p>
                </div>
                <div>
                  <p>
                    <a href="./#testimonials">Testimonials</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col items-center justify-between gap-5 pt-10 sm:flex-col">
          <div>
            {/* --framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
            <div className="text-center text-base font-medium leading-[1.5em] tracking-normal text-[#333333]">
              © {new Date().getFullYear()} ManageWise, Inc.
            </div>
          </div>
          <div className="flex items-center justify-start gap-4">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener"
              role="img"
              aria-label="instagram"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                  width="24"
                  height="24"
                >
                  <defs>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="svg29100594"
                    >
                      <path
                        d="M 0 0 L 24 0 L 24 24 L 0 24 Z"
                        fill="#000000"
                        fillOpacity="0"
                      ></path>
                      <path
                        d="M 9 12 C 9 10.343 10.343 9 12 9 C 13.657 9 15 10.343 15 12 C 15 13.657 13.657 15 12 15 C 10.343 15 9 13.657 9 12 Z"
                        fill="#1C1C1C"
                      ></path>
                      <path
                        d="M 16.125 2.625 L 7.875 2.625 C 4.976 2.625 2.625 4.976 2.625 7.875 L 2.625 16.125 C 2.625 19.024 4.976 21.375 7.875 21.375 L 16.125 21.375 C 19.024 21.375 21.375 19.024 21.375 16.125 L 21.375 7.875 C 21.375 4.976 19.024 2.625 16.125 2.625 Z M 12 16.5 C 9.515 16.5 7.5 14.485 7.5 12 C 7.5 9.515 9.515 7.5 12 7.5 C 14.485 7.5 16.5 9.515 16.5 12 C 16.5 14.485 14.485 16.5 12 16.5 Z M 16.875 8.25 C 16.254 8.25 15.75 7.746 15.75 7.125 C 15.75 6.504 16.254 6 16.875 6 C 17.496 6 18 6.504 18 7.125 C 18 7.746 17.496 8.25 16.875 8.25 Z"
                        fill="#1C1C1C"
                      ></path>
                    </svg>
                  </defs>
                  <g>
                    <path
                      d="M 0 0 L 24 0 L 24 24 L 0 24 Z"
                      fill="#000000"
                      fillOpacity="0"
                    ></path>
                    <path
                      d="M 9 12 C 9 10.343 10.343 9 12 9 C 13.657 9 15 10.343 15 12 C 15 13.657 13.657 15 12 15 C 10.343 15 9 13.657 9 12 Z"
                      fill="#1C1C1C"
                    ></path>
                    <path
                      d="M 16.125 2.625 L 7.875 2.625 C 4.976 2.625 2.625 4.976 2.625 7.875 L 2.625 16.125 C 2.625 19.024 4.976 21.375 7.875 21.375 L 16.125 21.375 C 19.024 21.375 21.375 19.024 21.375 16.125 L 21.375 7.875 C 21.375 4.976 19.024 2.625 16.125 2.625 Z M 12 16.5 C 9.515 16.5 7.5 14.485 7.5 12 C 7.5 9.515 9.515 7.5 12 7.5 C 14.485 7.5 16.5 9.515 16.5 12 C 16.5 14.485 14.485 16.5 12 16.5 Z M 16.875 8.25 C 16.254 8.25 15.75 7.746 15.75 7.125 C 15.75 6.504 16.254 6 16.875 6 C 17.496 6 18 6.504 18 7.125 C 18 7.746 17.496 8.25 16.875 8.25 Z"
                      fill="#1C1C1C"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="https://twitter.com/home"
              target="_blank"
              rel="noopener"
              role="img"
              aria-label="twitter"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                  width="24"
                  height="24"
                >
                  <defs>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      id="svg3386787699"
                    >
                      <path
                        d="M 0 0 L 24 0 L 24 24 L 0 24 Z"
                        fill="#000000"
                        fillOpacity="0"
                      ></path>
                      <path
                        d="M 19.365 21.44 L 4.795 21.44 C 3.572 21.44 2.58 20.448 2.58 19.225 L 2.58 4.655 C 2.58 3.432 3.572 2.44 4.795 2.44 L 19.365 2.44 C 20.588 2.44 21.58 3.432 21.58 4.655 L 21.58 19.225 C 21.58 20.448 20.588 21.44 19.365 21.44 Z"
                        fill="#1C1C1C"
                      ></path>
                      <path
                        d="M 5.398 6.097 L 10.504 12.925 L 5.365 18.476 L 6.522 18.476 L 11.021 13.616 L 14.656 18.476 L 18.592 18.476 L 13.198 11.264 L 17.981 6.097 L 16.825 6.097 L 12.681 10.573 L 9.333 6.097 Z M 7.098 6.949 L 8.907 6.949 L 16.891 17.624 L 15.083 17.624 Z"
                        fill="#FFFFFF"
                      ></path>
                    </svg>
                  </defs>
                  <g>
                    <path
                      d="M 0 0 L 24 0 L 24 24 L 0 24 Z"
                      fill="#000000"
                      fillOpacity="0"
                    ></path>
                    <path
                      d="M 19.365 21.44 L 4.795 21.44 C 3.572 21.44 2.58 20.448 2.58 19.225 L 2.58 4.655 C 2.58 3.432 3.572 2.44 4.795 2.44 L 19.365 2.44 C 20.588 2.44 21.58 3.432 21.58 4.655 L 21.58 19.225 C 21.58 20.448 20.588 21.44 19.365 21.44 Z"
                      fill="#1C1C1C"
                    ></path>
                    <path
                      d="M 5.398 6.097 L 10.504 12.925 L 5.365 18.476 L 6.522 18.476 L 11.021 13.616 L 14.656 18.476 L 18.592 18.476 L 13.198 11.264 L 17.981 6.097 L 16.825 6.097 L 12.681 10.573 L 9.333 6.097 Z M 7.098 6.949 L 8.907 6.949 L 16.891 17.624 L 15.083 17.624 Z"
                      fill="#FFFFFF"
                    ></path>
                  </g>
                </svg>
              </div>
            </a>
            <a
              href="https://www.linkedin.com/feed/"
              target="_blank"
              rel="noopener"
              role="img"
              aria-label="linkedin"
            >
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  style={{ width: "100%", height: "100%" }}
                  width="24"
                  height="24"
                >
                  <path
                    d="M 0 0 L 24 0 L 24 24 L 0 24 Z"
                    fill="transparent"
                  ></path>
                  <path
                    d="M 21.908 22 L 21.908 21.999 L 21.913 21.999 L 21.913 14.664 C 21.913 11.076 21.14 8.312 16.945 8.312 C 14.929 8.312 13.575 9.418 13.023 10.467 L 12.964 10.467 L 12.964 8.647 L 8.987 8.647 L 8.987 21.999 L 13.129 21.999 L 13.129 15.387 C 13.129 13.647 13.459 11.963 15.614 11.963 C 17.739 11.963 17.77 13.95 17.77 15.499 L 17.77 22 Z M 2.243 8.648 L 6.389 8.648 L 6.389 22 L 2.243 22 Z M 4.314 2 C 2.989 2 1.913 3.076 1.913 4.402 C 1.913 5.728 2.989 6.826 4.314 6.826 C 5.64 6.826 6.716 5.728 6.716 4.402 C 6.715 3.076 5.64 2.001 4.314 2 Z"
                    fill="rgb(0,0,0)"
                  ></path>
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
