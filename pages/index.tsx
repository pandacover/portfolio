import type { NextPage } from "next";
import { About, Bio, Online } from "../components";
import { motion } from "framer-motion";
import { Head, Variant } from "../lib";

const Home: NextPage = () => {
	return (
		<motion.div
			className='w-full h-full'
			variants={Variant("bounce")}
			initial='initial'
			animate='animate'
		>
			<Head>Home</Head>
			<About />
			<Bio />
			<Online />
		</motion.div>
	);
};

export default Home;
