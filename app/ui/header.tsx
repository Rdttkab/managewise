import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex w-full items-center justify-between px-6 py-4">
      <div>
        <div>
          <Image src="/managewise.webp" alt="logo" width={180} height={45} />
        </div>
      </div>
      <div className="hidden sm:block">
        <div className="flex items-center justify-center gap-4">
          <button>Features</button>
          <span className="h-1 w-1 rounded-[1px] bg-[#DACEC2]" />
          <button>FAQ</button>
          <span className="h-1 w-1 rounded-[1px] bg-[#DACEC2]" />
          <button>Pricing</button>
          <span className="h-1 w-1 rounded-[1px] bg-[#DACEC2]" />
          <button>Testimonials</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
