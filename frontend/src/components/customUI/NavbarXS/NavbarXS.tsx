"use client";
import Image from "next/image";
import logo from "./../../../../public/images/logo.png";

const NavbarXS = () => {
  return (
    <>
      <div className="h-[80px] flex items-center justify-center md:hidden">
        <Image src={logo} width={60} height={40} alt="Image of threads logo" />
      </div>
    </>
  );
};

export default NavbarXS;
