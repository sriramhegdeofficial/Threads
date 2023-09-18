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

const AuthTabs = () => {
  return (
    <>
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger
            className="data-[state=active]:shadow-none data-[state=active]:text-black text-gray-400"
            value="login"
          >
            Login
          </TabsTrigger>
          <TabsTrigger
            className="data-[state=active]:shadow-none data-[state=active]:text-black text-gray-400"
            value="signup"
          >
            Create an account
          </TabsTrigger>
        </TabsList>
        <TabsContent value="login">
          <Card className="h-[440px] border-none shadow-none">
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>Fill in the credentials.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Email</Label>
                <Input
                  className="rounded-full"
                  id="username"
                  placeholder="Your username"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Password</Label>
                <Input
                  className="rounded-full"
                  type="password"
                  id="password"
                  placeholder="Your password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-black text-white font-bold hover:bg-slate-900 transition rounded-full">
                Login
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
        <TabsContent value="signup">
          <Card className="h-[440px] border-none shadow-none">
            <CardHeader>
              <CardTitle>Create an account</CardTitle>
              <CardDescription>It's always free.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="fullname">FullName</Label>
                <Input
                  className="rounded-full"
                  id="fullname"
                  placeholder="Your fullname"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  className="rounded-full"
                  id="username"
                  placeholder="Your username"
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="password">Password</Label>
                <Input
                  className="rounded-full"
                  id="password"
                  placeholder="Your password"
                  type="password"
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button className="bg-black text-white font-bold hover:bg-slate-900 transition rounded-full">
                Create an account
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AuthTabs;
