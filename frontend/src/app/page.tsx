"use client";

import AuthTabs from "@/components/customUI/AuthTabs/AuthTabs";
import Image from "next/image";
import logo from "./../../public/images/logo.png";
import { useState, useEffect } from "react";
import PageLoaderCustom from "@/components/customUI/PageLoaderCustom/PageLoaderCustom";

export default function Home() {
  return (
    <>
      <PageLoaderCustom>
        <div className="flex">
          <div className="flex-1 min-h-[100vh] h-[100%] flex justify-center items-center">
            <Image src={logo} width={150} height={50} alt="logo of threads" />
            <h1 className="text-8xl font-black ml-[-30px]">Threads</h1>
          </div>

          <div className="border-l-[0.3pt] border-slate-300 flex flex-1 min-h-[100vh] h-[100%] justify-center items-center">
            <AuthTabs />
          </div>
        </div>
      </PageLoaderCustom>
    </>
  );
}
