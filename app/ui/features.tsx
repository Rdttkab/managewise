import Image from "next/image";

const Features = () => {
  const features = [
    {
      imageSrc: "/feature-2.png",
      imageAlt: "Scheduling",
      name: "Flexible Scheduling",
      description: "Stay productive with our flexible scheduling system",
    },
    {
      imageSrc: "/feature-3.webp",
      imageAlt: "Chat",
      name: "Easy Communication",
      description: "Collaborate seamlessly with your team in real-time",
    },
    {
      imageSrc: "/feature-4.png",
      imageAlt: "Analytics",
      name: "Analytics",
      description: "Gain valuable insights with our advanced analytics feature",
    },
  ];
  return (
    <section>
      <div className="flex w-full flex-col items-center justify-center bg-white pb-[120px] pt-[80px]">
        <div className="flex w-[90%] max-w-7xl flex-col items-center justify-center gap-[60px]">
          <div className="flex flex-col items-center justify-center gap-5">
            <div>
              <div>
                <div className="flex items-center justify-center gap-1.5 rounded-lg border border-solid border-senary px-2.5 py-1">
                  <div>
                    <p>🔥</p>
                    {/* --framer-font-family: "Outfit", sans-serif; */}
                  </div>
                  <div>
                    <p className="text-start text-xs font-semibold uppercase leading-[0.08em] text-primary">
                      Premier features
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-full max-w-7xl flex-col items-center justify-start">
              {/* --framer-font-family: "Outfit", sans-serif; */}
              <h2 className="text-center text-[56px] font-medium leading-[1em] tracking-[-1px] text-quinary">
                Discover our product&apos;s&nbsp;
                <span className="text-secondary">Capabilities</span>
              </h2>
            </div>
            <div className="flex w-full max-w-[600px] shrink-0 flex-col justify-start">
              {/* --framer-font-family: "Inter", sans-serif; */}
              <p className="text-center text-xl font-medium leading-[1.5em] tracking-[-0.5px] text-tertiary">
                Don&apos;t settle for mediocrity - embrace the future of
                management with Manage Wise.
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center gap-10 ">
            <div className="w-[47%] max-w-[750px] flex-[1]">
              <div>
                <div className="flex h-min w-full max-w-full flex-col items-start justify-center gap-2.5 rounded-[20px] bg-quaternary px-10 pb-[35px] pt-[78px]">
                  {/* width: 580px; */}
                  <div className="flex h-[50px] w-[50px] items-center justify-center rounded-[20px] bg-white opacity-100">
                    <div className="flex shrink-0 items-center justify-center">
                      {/* --framer-font-family: "Outfit", sans-serif; */}
                      <p className="text-start text-[28px] font-semibold leading-[1.2em] tracking-normal">
                        ⭐️
                      </p>
                    </div>
                  </div>
                  <div>
                    {/*     --framer-font-family: "Outfit", sans-serif; */}
                    <h3 className="text-left text-[42px] font-medium leading-[1.3em] tracking-[-1px] text-quinary">
                      Boost productivity and streamline workflow with us. Enjoy
                      our intuitive interface and robust features.
                    </h3>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2 max-w-[750px] flex-[1]">
              <div>
                <div className="flex w-full max-w-full flex-col items-center justify-center rounded-[30px] border border-solid border-quaternary">
                  {/* width: 580px;*/}
                  <div className="relative h-[323px] w-full rounded-3xl">
                    <Image src="/feature.webp" alt="Task management" fill />
                  </div>
                  <div className="flex w-full flex-col items-start justify-end gap-2.5 p-[30px]">
                    <div>
                      {/*     --framer-font-family: "Outfit", sans-serif; */}
                      <p className="text-left text-[25px] font-semibold leading-[1.3em] tracking-[-0.5px] text-quinary">
                        Smart Task Management
                      </p>
                    </div>
                    <div>
                      {/* --framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                      <p className="text-start text-base font-medium leading-[1.5em] tracking-normal text-tertiary">
                        Say goodbye to chaos with our smart task management
                        system
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/*     display: grid;
    grid-auto-rows: minmax(0,1fr);
    grid-template-columns: repeat(3,minmax(200px,1fr));
    grid-template-rows: repeat(1,minmax(0,1fr));
    height: min-content;; */}
          <div className="flex w-full items-center justify-center gap-10">
            {features.map(
              ({ imageSrc, imageAlt, name, description }, index) => (
                <div key={index}>
                  <div>
                    <div className="flex flex-col items-center justify-center rounded-[30px] border border-solid border-quaternary">
                      <div>
                        <div className="relative h-[300px] w-[374px] ">
                          <Image src={imageSrc} alt={imageAlt} fill />
                        </div>
                      </div>

                      <div className="flex w-full flex-col items-start justify-end gap-2.5 p-[30px]">
                        <div>
                          {/* --framer-font-family: "Outfit", sans-serif; */}
                          <h3 className="text-left text-[25px] font-semibold leading-[1.3em] tracking-[-0.5px] text-quinary">
                            {name}
                          </h3>
                        </div>
                        <div>
                          {/* --framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                          <p className="text-start text-base font-medium leading-[1.5em] tracking-normal text-tertiary">
                            {description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ),
            )}
          </div>
        </div>
      </div>

      {/*     
    background-color: var(--token-d23dd5a9-b486-4fa3-8394-2cd7943f28da, #07061b);
    position: relative;
    transform: perspective(1200px);
    width: 100%; */}
      <div className="flex flex-col items-center justify-start gap-[80px] bg-quinary py-[120px]">
        <div className="flex w-[90%] max-w-7xl flex-col items-center justify-center gap-[60px]">
          <div className="flex w-full flex-col items-start justify-center gap-5">
            <div>
              <div>
                <div className="flex w-auto max-w-fit items-center justify-center gap-1.5 rounded-lg border border-solid border-senary bg-white px-2.5 py-1">
                  <div>
                    <p>🤩</p>
                  </div>
                  <div>
                    {/*  --framer-font-family: "Outfit", sans-serif; */}
                    <p className="text-start text-[18px] font-semibold uppercase leading-[1.2em] tracking-normal text-primary">
                      And more...
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              {/* --framer-font-family: "Outfit", sans-serif; */}
              <h3 className="text-left text-[56px] font-medium leading-[1em] tracking-[-1px] text-septenary">
                Explore an array of features that elevate your&nbsp;
                <span className="text-secondary">Productivity</span>&nbsp;to new
                heights
              </h3>
            </div>
            <div>
              {/* --framer-font-family: "Inter", sans-serif; */}
              <p className="text-left text-xl font-medium leading-[1.5em] tracking-[-0.5px] text-tertiary">
                Discover the tools that will revolutionize the way you manage
                and optimize your operations
              </p>
            </div>
          </div>

          <div className=" relative flex w-full items-start justify-start gap-10">
            <div>
              <div>
                <div className="flex flex-col items-center justify-start gap-5 rounded-[30px] border border-solid border-[rgb(255,255,255)]/[0.03] bg-[rgb(33,33,33)] px-[30px] pb-[60px] pt-[50px]">
                  <div className="flex items-center justify-center gap-2.5 rounded-[20px] bg-primary p-[13px]">
                    <div>
                      <div>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="24"
                          height="24"
                          color='var(--token-25b49406-73f2-421a-adb7-81b18f488918, rgb(253, 242, 236)) /* {"name":"Background"} */'
                          style={{ width: "100%", height: "100%" }}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M7 2a2 2 0 00-2 2v12a2 2 0 002 2h6a2 2 0 002-2V4a2 2 0 00-2-2H7zm3 14a1 1 0 100-2 1 1 0 000 2z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center justify-center gap-2.5">
                    <div>
                      {/*     --framer-font-family: "Outfit", sans-serif; */}
                      <p className="text-center text-[25px] font-semibold leading-[1.3em] tracking-[-0.5px] text-septenary">
                        Cross-Platform Compatibility
                      </p>
                    </div>
                    <div>
                      {/* framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                      <p className="text-center text-base font-medium leading-[1.5em] tracking-normal text-tertiary">
                        Enjoy the flexibility of cross-platform compatibility.
                        Our product works seamlessly across desktop, web, and
                        mobile devices, allowing you to work from your preferred
                        device.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="flex flex-col items-center justify-start gap-5 rounded-[30px] border border-solid border-[rgb(255,255,255)]/[0.03] bg-[rgb(33,33,33)] px-[30px] pb-[60px] pt-[50px]">
                  <div className="flex items-center justify-center gap-2.5 rounded-[20px] bg-primary p-[13px]">
                    <div>
                      <div>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="24"
                          height="24"
                          color='var(--token-25b49406-73f2-421a-adb7-81b18f488918, rgb(253, 242, 236)) /* {"name":"Background"} */'
                          style={{ width: "100%", height: "100%" }}
                        >
                          <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zm0 16a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center justify-center gap-2.5">
                    <div>
                      <p className="text-center text-[25px] font-semibold leading-[1.3em] tracking-[-0.5px] text-septenary">
                        Stay Informed with Essential Notifications
                      </p>
                    </div>
                    <div>
                      <p className="text-center text-base font-medium leading-[1.5em] tracking-normal text-tertiary">
                        Automate support from first customer contact to closing
                        the ticket. Drastically improve time to
                        resolution.Automate support from first customer contact
                        to closing the ticket.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div>
                <div className="flex flex-col items-center justify-start gap-5 rounded-[30px] border border-solid border-[rgb(255,255,255)]/[0.03] bg-[rgb(33,33,33)] px-[30px] pb-[60px] pt-[50px]">
                  <div className="flex items-center justify-center gap-2.5 rounded-[20px] bg-primary p-[13px]">
                    <div>
                      <div>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="24"
                          height="24"
                          color='var(--token-25b49406-73f2-421a-adb7-81b18f488918, rgb(253, 242, 236)) /* {"name":"Background"} */'
                          style={{ width: "100%", height: "100%" }}
                        >
                          <path
                            fill-rule="evenodd"
                            d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  <div className="flex w-full flex-col items-center justify-center gap-2.5">
                    <div>
                      <p className="text-center text-[25px] font-semibold leading-[1.3em] tracking-[-0.5px] text-septenary">
                        Secure Data Encryption at all times
                      </p>
                    </div>
                    <div>
                      <p className="text-center text-base font-medium leading-[1.5em] tracking-normal text-tertiary">
                        Trust in our robust data encryption to keep your
                        sensitive information safe and secure. Rest easy knowing
                        your data is protected at all times.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
