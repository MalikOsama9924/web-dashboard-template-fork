"use client";

import UserHeader from "@/components/ui/Header/UserHeader";
import Footer from "@/components/ui/Footer/Footer";
import React from "react";
import { DRAWER_WIDTH } from "@/theme/drawer";

const UnauthorizedLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="relative z-10">
        <UserHeader drawerWidth={DRAWER_WIDTH.CLOSED} />
      </div>
      <div className="relative flex-grow">{children}</div>
      <Footer />
    </div>
  );
};

export default UnauthorizedLayout;
