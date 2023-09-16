"use client";

import Image from "next/image";
import Logo from "./../../../../public/images/logo.png";

const FullPageLogoLoader: React.FC = () => {
  return (
    <>
      <div className="w-[100vw] h-[100vh] flex items-center justify-center">
        <Image
          src={Logo}
          alt="Loader with threads Image"
          width={200}
          height={200}
        />
      </div>
    </>
  );
};

export default FullPageLogoLoader;
