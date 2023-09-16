"use client";
import { useState, useEffect } from "react";
import React from "react";
import FullPageLogoLoader from "../FullPageLogoLoader/FullPageLogoLoader";

interface IProps {
  children: React.ReactNode;
}
const PageLoaderCustom: React.FC<IProps> = ({ children }: IProps) => {
  const [pageLoaded, setPageLoaded] = useState<boolean>(false);

  useEffect(() => {
    setPageLoaded(true);
  }, []);

  return <>{pageLoaded ? children : <FullPageLogoLoader />}</>;
};

export default PageLoaderCustom;
