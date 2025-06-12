"use client";
import AuthLayout from "@/components/auth/auth-layout";
import { MainNavBar } from "@/components/navbar/main-nav-bar";
import { AppViewContext } from "@/contexts/app-view-context";
import { LoadingContext } from "@/contexts/loading-context";
import { UserAuthContext } from "@/contexts/user-auth-context";
import { UserContext } from "@/contexts/user-context";

export default function HomeLayoutData({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <MainNavBar />
      {children}
    </div>
  );
}
