"use client";

import { Disclosure, Transition } from "@headlessui/react";
import { PlusIcon, XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";

const FAQ = () => {
  const faqs = [
    {
      title: "What is Manage Wise and what does it offer?",
      content:
        "Manage Wise is a comprehensive management platform designed to streamline your business operations, enhance productivity, and drive success. It offers a range of features including task management, scheduling, communication tools, analytics, and more.",
    },
    {
      title:
        "Is Manage Wise suitable for small businesses and larger enterprises alike?",
      content:
        "Yes, Manage Wise is designed to cater to the needs of both small businesses and larger enterprises. Its scalable features and customizable options make it versatile for various business sizes.",
    },
    {
      title: "Can I access Manage Wise from different devices and platforms?",
      content:
        "We provide responsive customer support via chat and email to assist you with any inquiries, issues, or guidance you may need while using Manage Wise.",
    },
    {
      title: "What kind of support options do you offer to users?",
      content:
        "Yes, Manage Wise offers cross-platform compatibility, allowing you to access and use the platform seamlessly on desktops, web browsers, and mobile devices.",
    },
    {
      title: "How secure is the data stored within Manage Wise?",
      content:
        "Your data's security is a top priority. Manage Wise employs robust data encryption and follows industry best practices to ensure your sensitive information is safe and protected.",
    },
  ];
  return (
    <section className="flex w-full items-center justify-center bg-white pb-[120px] pt-[150px]">
      <div className="flex w-[90%] max-w-7xl items-start justify-center gap-2.5">
        <div className="flex w-full max-w-[465px] flex-col items-start justify-center gap-5">
          <div className="flex items-center justify-center gap-1.5 rounded-lg border border-solid border-senary px-2.5 py-1">
            <p>🙋‍♀️</p>
            <p className="uppercase text-primary">faq</p>
          </div>
          <div className="flex">
            {/* --framer-font-family: "Outfit", sans-serif; */}
            <h5 className="text-start text-[56px] font-medium leading-[1em] tracking-[-1px] text-secondary">
              <span className="block text-quinary">Need</span>
              Answers?
            </h5>
          </div>
          <div className="flex w-[70%] max-w-[550px] flex-col">
            {/*     --framer-font-family: "Inter", sans-serif; */}
            <p className="text-start text-[20px] font-medium leading-[1.5em] tracking-[-0.5px] text-tertiary">
              Check out our most commonly asked questions below to find the
              information you need.
            </p>
          </div>
        </div>
        <div className="flex w-3/5 max-w-full items-center justify-center">
          <div className="flex w-full flex-col items-start justify-start gap-3">
            {faqs.map((faq, index) => (
              <Disclosure
                key={index}
                as="div"
                className="w-full rounded-[20px] bg-[#F7F8FD] pb-4 pl-8 pr-4 pt-0"
              >
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={clsx(
                        "flex w-full items-start justify-between gap-6 py-5",
                        open && "text-primary",
                      )}
                    >
                      <h6 className="text-left text-2xl font-semibold leading-[1.3em] tracking-[-0.5px]">
                        {faq.title}
                      </h6>
                      {open ? (
                        <XMarkIcon className="h-5 w-5 text-primary" />
                      ) : (
                        <PlusIcon className="h-5 w-5 text-primary" />
                      )}
                    </Disclosure.Button>
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="">
                        {/* framer-font-family: "Inter-Medium", "Inter", sans-serif; */}
                        <p className="text-start text-base font-medium leading-6 tracking-normal text-tertiary">
                          {faq.content}
                        </p>
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
