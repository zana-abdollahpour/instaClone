import React from "react";

import HeaderLogo from "./HeaderLogo";
import HeaderSearch from "./HeaderSearch";
import HeaderUser from "./HeaderUser";

export default function Header() {
  return (
    <div className="sticky top-0 z-30 bg-white border border-b shadow-md">
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <HeaderLogo />
        <HeaderSearch />
        <HeaderUser />
      </div>
    </div>
  );
}
