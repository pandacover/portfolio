import React from "react";
import Navbar from "./navbar";
import Footer from "./footer";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  children: React.ReactNode;
}

const variants = {
  initial: { y: "100%", opacity: 0 },
  animate: { y: 0, opacity: 1, transition: { delay: 0.5 } },
};

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className="bg-rose-50 dark:bg-neutral-900 dark:text-white min-h-screen max-w-screen">
      <div className="relative min-h-screen w-[50vw] mx-auto pb-4">
        <Navbar />
        <AnimatePresence>
          <motion.div
            className="w-full h-full"
            variants={variants}
            initial="initial"
            animate="animate"
          >
            {children}
          </motion.div>
        </AnimatePresence>
        <Footer />
      </div>
    </main>
  );
};

export default Layout;
