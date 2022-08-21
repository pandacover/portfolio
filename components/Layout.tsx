import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

export const variants = {
  initial: {opacity: "0", x: "-100%"},
  animate: {opacity: "1", x: "0", transition: { delay: 0.5, type: "spring", damping: 12, spring: 70 }},
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="bg-rose-50 dark:bg-black dark:text-white min-h-screen max-w-screen">
      <div className="relative min-h-screen md:w-[50vw] mx-auto w-[80vw] pb-4">
        <Navbar />
        <AnimatePresence>
          {children}
        </AnimatePresence>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
