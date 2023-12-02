import React from "react";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4">
      <div>manageWise</div>
      <div className="flex items-center justify-center gap-4">
        <button>Features</button>
        <span className="h-1 w-1 rounded-[1px] bg-[#DACEC2]" />
        <button>FAQ</button>
        <span className="h-1 w-1 rounded-[1px] bg-[#DACEC2]" />
        <button>Pricing</button>
        <span className="h-1 w-1 rounded-[1px] bg-[#DACEC2]" />
        <button>Testimonials</button>
      </div>
    </header>
  );
};

export default Header;
