import React from "react"
import { LogoSection } from "./logo-section"

export default function MainNavBarLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="border-b bg-background">
        <div className="container mx-auto px-4">
            <div className="flex items-center justify-between h-16">
            <LogoSection/>
            {children}
            </div>
        </div>
    </div>
  )
}