"use client";

import React, { useState } from "react";
import Navbar from "./Navbar";
import MobileNavbar from "./MobileNavbar";

const ResponsiveNavbar = () => {
  const [showNav, setShowNav] = useState(false);
  const handleShowNav = () => setShowNav(true);
  const handleCloseNav = () => setShowNav(false);
  return (
    <div>
      <Navbar openNav={handleShowNav} />
      <MobileNavbar showNav={showNav} closeNav={handleCloseNav} />
    </div>
  );
};

export default ResponsiveNavbar;
