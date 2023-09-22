"use client";
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
import { AxiosError } from "axios";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast, useToast } from "@/components/ui/use-toast";
import { authService } from "@/services/api/auth/auth.service";
import { ToastAction } from "@radix-ui/react-toast";
import { enqueueSnackbar } from "notistack";

const FormSchema = z.object({
  username: z
    .string()
    .min(4, {
      message: "Username must be at least 4 characters.",
    })
    .max(8, {
      message: "Username must be at most 8 characters.",
    })
    .trim(),
  email: z.string().email().trim().max(18).min(1),
  password: z
    .string()
    .min(4, {
      message: "Password must be at least 4 characters.",
    })
    .max(8, {
      message: "Password must be at most 8 characters.",
    }),
});

const AuthTabs = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { toast } = useToast();

  const [loading, setLoading] = React.useState<boolean>(false);
  const [errorMessage, setErrorMessage] = React.useState<string>("");
  const [alertType, setAlertType] = React.useState<string>("");
  const [hasError, setHasError] = React.useState<boolean>(false);

  const onSubmit = async (data: z.infer<typeof FormSchema>) => {
    setLoading(true);
    try {
      setHasError(false);
      setAlertType("alert-success");
      const result = await authService.signUp({
        username: data.username,
        email: data.email,
        password: data.password,
        avatarColor: "red",
        avatarImage: "",
      });
    } catch (error) {
      const err = error as AxiosError<any, any>;
      setLoading(false);
      setAlertType("alert-error");
      setHasError(true);
      // setErrorMessage(err?.response?.data.message);
      const snackbar = enqueueSnackbar(`${err?.response?.data.message}`, {
        variant: "error",
        anchorOrigin: {
          horizontal: "center",
          vertical: "top",
        },
        preventDuplicate: true,
        hideIconVariant: true,
      });
    }
  };

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
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <Card className="h-[440px] border-none shadow-none">
                <CardHeader>
                  <CardTitle>Create an account</CardTitle>
                  <CardDescription>It's always free.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-2">
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-full"
                            placeholder="Your email"
                            {...form.register("email")}
                          />
                        </FormControl>

                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Username</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-full"
                            placeholder="Your username"
                            {...form.register("username")}
                          />
                        </FormControl>

                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="password"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Password</FormLabel>
                        <FormControl>
                          <Input
                            className="rounded-full"
                            type="password"
                            placeholder="Your password"
                            {...form.register("password")}
                          />
                        </FormControl>
                        <FormMessage className="text-red-600" />
                      </FormItem>
                    )}
                  />
                </CardContent>
                <CardFooter>
                  <Button
                    type="submit"
                    className="bg-black text-white font-bold hover:bg-slate-900 transition rounded-full"
                  >
                    Create an account
                  </Button>
                </CardFooter>
              </Card>
            </form>
          </Form>
        </TabsContent>
      </Tabs>
    </>
  );
};

export default AuthTabs;
