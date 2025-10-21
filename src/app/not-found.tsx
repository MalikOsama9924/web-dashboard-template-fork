"use client";

import { Button } from "@mui/material";
import { useRouter } from "next/navigation";
import React from "react";

const NotFound = () => {
  // router
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="flex items-center justify-center min-h-screen min-w-screen">
      <div className="flex flex-col items-center gap-3">
        <span className="text-red-500 text-7xl">404</span>
        <span>
          Oops. The page you requested could not be found or has been moved.
        </span>
        <Button variant="contained" disableElevation onClick={handleBack}>
          Go Back
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
