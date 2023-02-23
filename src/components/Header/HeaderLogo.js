import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

import typedLogo from "../../assets/img/logos/logo_typed.png";
import imgLogo from "../../assets/img/logos/logo_img.png";

export default function HeaderLogo() {
  const router = useRouter();

  return (
    <>
      <div className="relative items-center hidden w-24 h-24 cursor-pointer lg:inline-grid">
        <Image
          onClick={() => router.push("/")}
          alt="instagram typed logo"
          src={typedLogo}
          className="object-contain"
        />
      </div>
      <div className="relative flex items-center w-10 h-24 cursor-pointer lg:hidden">
        <Image
          onClick={() => router.push("/")}
          alt="instagram typed logo"
          src={imgLogo}
          className="object-contain"
        />
      </div>
    </>
  );
}
