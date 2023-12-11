import React from "react";
import Nav from "../components/Nav";
import Footer from "../components/Footer";

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <main>
      <Nav />
      {children}
      <Footer />
    </main>
  );
};

export default Layout;
