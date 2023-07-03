import React from "react";

function Header() {
  return (
    <header className="select-none flex bg-[#282c34] text-white mb-6">
      <div className="container mx-auto py-4 px-2 flex justify-between max-w-6xl">
        <div className="flex">Header</div>
        <div className="flex space-x-3 ">
          <a className="text-white" href="/">
            Home
          </a>
          <a className="text-white" href="/about">
            About
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
