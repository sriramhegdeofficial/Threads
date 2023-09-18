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

const FeedTabXS = () => {
  return (
    <Tabs defaultValue="foryou" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="foryou">For you</TabsTrigger>
        <TabsTrigger value="following">Following</TabsTrigger>
      </TabsList>
      <TabsContent value="foryou">hello</TabsContent>
      <TabsContent value="following">hi</TabsContent>
    </Tabs>
  );
};

export default FeedTabXS;
