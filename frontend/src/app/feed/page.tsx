"use client";

import AuthTabs from "@/components/customUI/AuthTabs/AuthTabs";
import Image from "next/image";
import logo from "./../../public/images/logo.png";
import { useState, useEffect } from "react";
import PageLoaderCustom from "@/components/customUI/PageLoaderCustom/PageLoaderCustom";
import { useMediaQuery } from "@mantine/hooks";
import NavbarXS from "@/components/customUI/NavbarXS/NavbarXS";
import FeedTabXS from "@/components/customUI/FeedTabXS/FeedTabXS";

export default function Page() {
  const md = useMediaQuery("(min-width: 768px)");
  const lg = useMediaQuery("(min-width: 1024px)");
  const xl = useMediaQuery("(min-width: 1280px)");
  return (
    <>
      <PageLoaderCustom>
        <NavbarXS />
        <div className="flex flex-1 h-max justify-center items-center lg:border-[0.3pt] lg:border-l-gray-300">
          <FeedTabXS />
        </div>
      </PageLoaderCustom>
    </>
  );
}
