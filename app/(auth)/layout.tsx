"use client";
import AuthLayout from "@/components/auth/auth-layout";
import { LoadingContext } from "@/contexts/loading-context";
import { useState } from "react";

export default function AuthLayoutData({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }}>
      <AuthLayout>{children}</AuthLayout>
    </LoadingContext.Provider>
  );
}
