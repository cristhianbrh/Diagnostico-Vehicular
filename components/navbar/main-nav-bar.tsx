"use client";

import { useContext } from "react";
import { NavigationButtons } from "./navigation-buttons";
import { UserSection } from "./user-section";
import MainNavBarLayout from "./main-nav-bar-layout";
import { UserAuthContext } from "@/contexts/user-auth-context";
import { AppViewContext } from "@/contexts/app-view-context";

export function MainNavBar() {
  const { currentView, setCurrentView } = useContext(AppViewContext);
  const { currentUser, setCurrentUser } = useContext(UserAuthContext);

  return (
    <MainNavBarLayout>
        <nav className="flex items-center gap-4">
          <NavigationButtons
              currentView={currentView}
              setCurrentView={setCurrentView}
              currentUser={currentUser}
          />
          <UserSection
              currentUser={currentUser}
              setCurrentUser={setCurrentUser}
          />
        </nav>
    </MainNavBarLayout>
  );
}
