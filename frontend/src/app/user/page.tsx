// frontend/src/app/user/page.tsx
'use client';
import React from "react";
import useTheme from "@/hooks/useTheme";

export default function UserPage() {
  const { primaryColor, backgroundColor, textColor } = useTheme();

  return (
    <div className={`container mx-auto px-6 py-12 text-center ${useTheme().isDarkMode ? 'dark-mode' : ''}`}  style = {{backgroundColor : backgroundColor}}>
      <h1 className="text-2xl font-bold text-primary mb-6">
         پنل کاربری 
      </h1>
      <br />
      <hr />
    </div>
  );
}