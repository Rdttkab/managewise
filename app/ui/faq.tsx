import React from "react";

const FAQ = () => {
  const faqs = [
    {
      title: "What is Manage Wise and what does it offer?",
      answer:
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
    <section className="py-[150px] px-[120px]">
      <div className="max-w-7xl w-full"></div>
    </section>
  );
};

export default FAQ;
