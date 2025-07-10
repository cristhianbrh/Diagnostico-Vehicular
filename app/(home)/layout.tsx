"use client";
import { MainNavBar } from "@/components/navbar/main-nav-bar";
import { useState } from "react";

export default function HomeLayoutData({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState(true);
  return (
    <div className="min-h-screen bg-background">
      <MainNavBar setLoading={setLoading} />
      {!loading && children}
    </div>
  );
}
