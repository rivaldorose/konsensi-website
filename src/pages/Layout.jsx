
import React from "react";
import { Link, useLocation } from "react-router-dom";
import { createPageUrl } from "@/utils";

export default function Layout({ children, currentPageName }) {
  return (
    <div className="min-h-screen bg-white">
      <style>{`
        :root {
          --konsensi-green: #265e3e;
          --konsensi-light-green: #6B9F7F;
          --konsensi-accent: #b3fe78;
          --konsensi-cream: #F5F7F0;
        }
      `}</style>
      {children}
    </div>
  );
}
