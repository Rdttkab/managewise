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
    <section className="p-0 pt-[80px] pb-[100px]">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-5 mb-[40px]">
          <div className="flex justify-center items-center gap-[6px] bg-white border border-solid border-[#DDD9D4] rounded-lg py-1 px-2.5">
            <p className="">💲</p>
            <p className="text-primary">Pricing</p>
          </div>
          <div className="max-w-7xl w-full">
            <h5 className="text-center text-[56px] font-medium tracking-[-1px] leading-[1em] not-italic text-[#1c1c1c]">
              Select your ideal &nbsp;
              <span className="text-secondary">Pricing</span>
            </h5>
          </div>
          <div className="max-w-[500px] w-full">
            <p className="text-center text-thirdly font-medium text-xl tracking-[-0.5px]">
              At Manage Wise, we believe in providing you with pricing plans
              that adapt to your unique needs.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center gap-5 max-w-7xl w-full">
          {pricing.map((item) => (
            <div
              key={item.name}
              className={clsx(
                "rounded-[30px] flex flex-col justify-center items-start gap-2.5 flex-2 py-[40px] px-[30px] bg-fourthly",
                item.recommended && "pt-[50px] bg-fifth"
              )}>
              <div className="flex flex-col justify-center items-start gap-4">
                <div className="px-2.5 py-1 rounded-lg bg-white">
                  {/* --font-selector: R0Y7T3V0Zml0LTYwMA==;
    --framer-font-family: "Outfit", sans-serif;*/}
                  <p className="uppercase text-secondary font-semibold text-xs">
                    {item.name}
                  </p>
                </div>
                <div className="flex justify-start items-end gap-1.5">
                  {/* framer-font-family: "Outfit", sans-serif; */}
                  <h2
                    className={clsx(
                      "text-center font-medium text-fifth text-[56px] tracking-[-1px] leading-[1em]",
                      item.recommended && "text-white"
                    )}>
                    $<span>{item.price}</span>
                  </h2>
                  {/*     --font-selector: SW50ZXItTWVkaXVt;
    --framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                  <p
                    className={clsx(
                      "text-start font-semibold text-base leading-[1.3em] text-[#333333]",
                      item.recommended && "text-white"
                    )}>
                    /month
                  </p>
                </div>
              </div>
              <div>
                {/*     
    height: 234px;
    
    width: 327px; */}
                <div className="flex flex-col justify-start items-start gap-2.5 w-[327px] h-[234px] py-5">
                  {item.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex justify-start items-center gap-2.5 ">
                      <div>
                        <svg
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          width="24"
                          height="24"
                          color='var(--token-7d9d6b70-3e5f-4b3e-ad0c-f37f53a2377b, rgb(93, 192, 133)) /* {"name":"Green"} */'>
                          <path
                            fill-rule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clip-rule="evenodd"></path>
                        </svg>
                      </div>
                      {/* framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                      <p className="text-start text-base font-medium tracking-normal leading-normal text-thirdly">
                        {feature}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <a
                  className={clsx(
                    "flex items-center justify-center rounded-xl bg-white py-4 px-5",
                    item.recommended && "bg-primary text-white"
                  )}
                  tabIndex={0}
                  href="#"
                  target="_blank"
                  rel="noopener">
                  <div>
                    {/*     --font-selector: R0Y7T3V0Zml0LTYwMA==;
    --framer-font-family: "Outfit", sans-serif;
    --framer-text-color: var(--extracted-r6o4lv);
} */}
                    <p className="text-start text-lg font-semibold leading-[1.2rem] tracking-normal">Get started</p>
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
