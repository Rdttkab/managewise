import clsx from "clsx";

const Pricing = () => {
  const pricing = [
    {
      name: "free",
      price: 0,
      recommended: false,
      features: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
      ],
    },
    {
      name: "standard",
      price: 25,
      recommended: true,
      features: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
        "3+ integrations",
        "Account performance reporting",
      ],
    },
    {
      name: "business",
      price: 42,
      recommended: false,
      features: [
        "Access to all basic features",
        "Reporting and analytics",
        "Up to 5 individual users",
        "Chat and email support",
        "3+ integrations",
      ],
    },
  ];
  return (
    <section className="bg-white p-0 pb-[100px] pt-[80px]">
      <div className="flex flex-col items-center justify-center">
        <div className="mb-[40px] flex flex-col items-center justify-center gap-5">
          <div className="flex items-center justify-center gap-[6px] rounded-lg border border-solid border-[#DDD9D4] bg-white px-2.5 py-1">
            <p className="">💲</p>
            <p className="text-primary">Pricing</p>
          </div>
          <div className="w-full max-w-7xl">
            <h5 className="text-center text-[56px] font-medium not-italic leading-[1em] tracking-[-1px] text-[#1c1c1c]">
              Select your ideal &nbsp;
              <span className="text-secondary">Pricing</span>
            </h5>
          </div>
          <div className="w-full max-w-[500px]">
            <p className="text-center text-xl font-medium tracking-[-0.5px] text-tertiary">
              At Manage Wise, we believe in providing you with pricing plans
              that adapt to your unique needs.
            </p>
          </div>
        </div>
        <div className="flex w-full max-w-7xl items-center justify-center gap-5">
          {pricing.map((item) => (
            <div
              key={item.name}
              className={clsx(
                "flex flex-2 flex-col items-start justify-center gap-2.5 rounded-[30px] bg-quaternary px-[30px] py-[40px]",
                item.recommended && "bg-quinary pt-[50px]",
              )}
            >
              <div className="flex flex-col items-start justify-center gap-4">
                <div className="rounded-lg bg-white px-2.5 py-1">
                  {/* --font-selector: R0Y7T3V0Zml0LTYwMA==;
    --framer-font-family: "Outfit", sans-serif;*/}
                  <p className="text-xs font-semibold uppercase text-secondary">
                    {item.name}
                  </p>
                </div>
                <div className="flex items-end justify-start gap-1.5">
                  {/* framer-font-family: "Outfit", sans-serif; */}
                  <h2
                    className={clsx(
                      "text-center text-[56px] font-medium leading-[1em] tracking-[-1px] text-quinary",
                      item.recommended && "text-white",
                    )}
                  >
                    $<span>{item.price}</span>
                  </h2>
                  {/*     --font-selector: SW50ZXItTWVkaXVt;
    --framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                  <p
                    className={clsx(
                      "text-start text-base font-semibold leading-[1.3em] text-[#333333]",
                      item.recommended && "text-white",
                    )}
                  >
                    /month
                  </p>
                </div>
              </div>
              <div>
                {/*     
    height: 234px;
    
    width: 327px; */}
                <div className="flex h-[234px] w-[327px] flex-col items-start justify-start gap-2.5 py-5">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center justify-start gap-2.5 "
                    >
                      <div>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="24"
                          height="24"
                          color='var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {"name":"Green"} */'
                        >
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"
                          ></path>
                        </svg>
                      </div>
                      {/* framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                      <p className="text-start text-base font-medium leading-normal tracking-normal text-tertiary">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <a
                  className={clsx(
                    "flex items-center justify-center rounded-xl bg-white px-5 py-4",
                    item.recommended && "bg-primary text-white",
                  )}
                  tabIndex={0}
                  href="#"
                  target="_blank"
                  rel="noopener"
                >
                  <div>
                    {/*     --font-selector: R0Y7T3V0Zml0LTYwMA==;
    --framer-font-family: "Outfit", sans-serif;
    --framer-text-color: var(--extracted-r6o4lv);
} */}
                    <p className="text-start text-lg font-semibold leading-[1.2rem] tracking-normal">
                      Get started
                    </p>
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
