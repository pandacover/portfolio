import { NextPage } from "next";
import Meta from "../../utils/head";
import { motion } from "framer-motion";
import { variants } from "../../components/Layout";
import { Card, Projects as Work } from "../../components";

const Projects: NextPage = () => {
	return (
		<motion.div
			className='w-full h-full mt-16'
			variants={variants}
			initial='initial'
			animate='animate'
		>
			<Meta>Projects</Meta>
			<h1 className='font-black text-6xl pb-8 w-fit'>
				My <span className='text-cyan-500 dark:text-indigo-700'>Projects</span>
			</h1>
			<ul className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
				{Object.keys(Work).map((key) => {
					const item = Work[key];
					return (
						<Card
							link={item.name}
							parentUrl='/projects'
							key={item.id}
							imgSrc={item.image}
							title={item.name}
							type='project'
							desc={item.desc}
						/>
					);
				})}
			</ul>
		</motion.div>
	);
};

export default Projects;
