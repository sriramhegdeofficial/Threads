"use client";

import AuthTabs from "@/components/customUI/AuthTabs/AuthTabs";
import Image from "next/image";
import logo from "./../../public/images/logo.png";
import PageLoaderCustom from "@/components/customUI/PageLoaderCustom/PageLoaderCustom";
import { useMediaQuery } from "@mantine/hooks";
import NavbarXS from "@/components/customUI/NavbarXS/NavbarXS";

export default function Page() {
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const xl = useMediaQuery("(min-width: 1280px)");
  return (
    <>
      <PageLoaderCustom>
        <NavbarXS />
        <div className="md:flex md:h-[100%] h-[calc(100%-80px)]">
          <div className="hidden md:flex flex-1 justify-center items-center md:h-[100%]">
            <div className="h-max mt-[6px]">
              <Image
                src={logo}
                width={lg || xl ? 110 : 90}
                height={50}
                alt="Image of threads logo"
              />
            </div>

            <h1 className="md:text-6xl font-black md:ml-[-20px] lg:ml-[-18px] lg:text-7xl">
              Threads
            </h1>
          </div>
          <div className="flex flex-1 h-[100%] justify-center items-center lg:border-[0.3pt] lg:border-l-gray-300">
            <AuthTabs />
          </div>
        </div>
      </PageLoaderCustom>
    </>
  );
}
