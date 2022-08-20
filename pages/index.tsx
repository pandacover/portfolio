import type { NextPage } from "next";
import { About, Bio, Online } from "../components";
import { motion } from "framer-motion";
import { variants } from "../components/Layout";
import NewHead from "../utils/head";

const Home: NextPage = () => {
  return (
    <motion.div 
      className="w-full h-full"  
      variants={variants} initial='initial' animate='animate'>
      <NewHead title="Home" />
      <About />
      <Bio />
      <Online />
    </motion.div>
  );
};

export default Home;
