"use client";
import { MainNavBar } from "@/components/navbar/main-nav-bar";

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
