import { NextPage } from "next";
import Meta from "../../utils/head";
import { motion } from "framer-motion";
import { variants } from "../../components/Layout";
import { Card } from "../../components";

export const Works = [
	{
		id: "-project-item-1",
		image: "/assets/-pandacover-voidlist.png",
		title: "Void List",
		desc: "A todo list app with user authentication and user friendly UI",
		link: "https://voidtodo.herokuapp.com/",
	},
	{
		id: "-project-item-2",
		image: "/assets/-pandacover-goalsetter.png",
		title: "Goal Setter",
		desc: "A goal setting app with user authentication and goal tracking feature.",
		link: "https://goalsetterluv.herokuapp.com/",
	},
	{
		id: "-project-item-3",
		image: "/assets/-pandacover-tracker.png",
		title: "Expense Tracker",
		desc: "An app that track your expenses so you don't have to.",
		link: "https://tracker-expense-pandacover.netlify.app/",
	},
	{
		id: "-project-item-4",
		image: "/assets/-pandacover-swiggy.png",
		title: "Swiggy Clone",
		desc: "Swiggy website's homepage clone website.",
		link: "https://swiggy-clone-edyst.netlify.app/",
	},
	{
		id: "-project-item-5",
		image: "/assets/-pandacover-sudoku.png",
		title: "Sudoku",
		desc: "A simple sudoku game with validation option.",
		link: "https://sudoku-pandacover.netlify.app/",
	},
	{
		id: "-project-item-6",
		image: "/assets/-pandacover-pokemon.png",
		title: "Pokemon Wiki",
		desc: "Pokemon wiki website.",
		link: "https://pokemon-wiki-pandacover.netlify.app/",
	},
];

const Projects: NextPage = () => {
	return (
		<motion.div
			className='w-full h-full mt-16'
			variants={variants}
			initial='initial'
			animate='animate'
		>
			<Meta title='Projects' />
			<h1 className='font-black text-6xl pb-8 w-fit'>
				My <span className='text-cyan-500 dark:text-indigo-700'>Projects</span>
			</h1>
			<ul className='mt-8 grid grid-cols-1 md:grid-cols-2 gap-6'>
				{Works.map((item) => (
					<Card
						key={item.id}
						link={item.link}
						imgSrc={item.image}
						title={item.title}
						desc={item.desc}
					/>
				))}
			</ul>
		</motion.div>
	);
};

export default Projects;
