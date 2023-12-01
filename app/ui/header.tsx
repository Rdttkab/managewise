import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between w-full px-6 py-4">
      <div>manageWise</div>
      <div className="flex items-center justify-center gap-4">
        <button>Features</button>
        <span className="w-1 h-1 rounded-[1px] bg-[#DACEC2]" />
        <button>FAQ</button>
        <span className="w-1 h-1 rounded-[1px] bg-[#DACEC2]" />
        <button>Pricing</button>
        <span className="w-1 h-1 rounded-[1px] bg-[#DACEC2]" />
        <button>Testimonials</button>
      </div>
    </header>
  );
};

export default Header;
