"use client";

import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NavigationButtons } from "./navigation-buttons";
import { UserSection } from "./user-section";
import MainNavBarLayout from "./main-nav-bar-layout";
import { getAccessTokenData, IAccessToken } from "@/utils/cookies";

export function MainNavBar({
  setLoading,
}: {
  setLoading: Dispatch<SetStateAction<boolean>>;
}) {
  const [user, setUser] = useState<IAccessToken | undefined>();

  const getUserData = async () => {
    setUser(await getAccessTokenData());
  };

  useEffect(() => {
    getUserData();
  }, []);

  useEffect(() => {
    if (user) setLoading(false);
  }, [user]);

  if (!user) return <p>Upps</p>;

  return (
    <MainNavBarLayout>
      <nav className="flex items-center gap-4">
        <NavigationButtons currentUser={user} />
        <UserSection currentUser={user} />
      </nav>
    </MainNavBarLayout>
  );
}
