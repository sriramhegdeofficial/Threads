"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import FeedItemPlain from "../FeedItemPlain/FeedItemPlain";
import { useIntersection } from "@mantine/hooks";
import React from "react";
import FeedItemWithImage from "../FeedItemWithImage/FeedItemWithImage";

const FeedTabXS = () => {
  return (
    <Tabs defaultValue="foryou" className="w-full max-w-[600px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="foryou" className="group">
          <div className="w-max py-2 group-data-[state=active]:border-b-4 group-data-[state=active]:border-b-black capitalize ">
            For you
          </div>
        </TabsTrigger>
        <TabsTrigger value="following" className="group">
          <div className="w-max py-2 focus-visible:bg-rose-400 group-data-[state=active]:border-b-4 group-data-[state=active]:border-b-black capitalize">
            Following
          </div>
        </TabsTrigger>
      </TabsList>
      <TabsContent value="foryou" className="overflow-y-scroll h-[600px] py-6">
        <FeedItemPlain />
        <FeedItemPlain />
        <FeedItemPlain />
        <FeedItemPlain />
        <FeedItemPlain />
        <FeedItemWithImage
          src="https://media1.giphy.com/media/7kn27lnYSAE9O/200.webp?cid=ecf05e47i7b1q3bxqe0nk8442kwt3her0anbvj3u3u6gdzgl&ep=v1_gifs_search&rid=200.webp&ct=g"
          alt="image of elon musk"
        />
        <FeedItemPlain />
        <FeedItemPlain />
        <FeedItemPlain />
        <FeedItemPlain />
      </TabsContent>
      <TabsContent value="following">hi</TabsContent>
    </Tabs>
  );
};

export default FeedTabXS;
