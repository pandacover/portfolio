import { NextPage } from "next";
import Image from "next/image";
import NewHead from "../../utils/head";
import { motion } from "framer-motion";
import { variants } from "../../components/Layout";

export const Works = [
	{
		id: "-project-item-1",
		image: "/assets/-pandacover-voidlist.png",
		title: "VoidList",
		desc: "A todo list app with user authentication and user friendly UI",
		link: "https://voidtodo.herokuapp.com/",
	},
	{
		id: "-project-item-2",
		image: "/assets/-pandacover-goalsetter.png",
		title: "GoalSetter",
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

type PropTypes = {
	link: string;
	imgSrc: string;
	title: string;
	desc: string;
};

const Card: React.FC<PropTypes> = ({ link, imgSrc, title, desc }) => {
	return (
		<li className='mb-4'>
			<a className='group' target='_blank' rel='noreferrer' href={link}>
				<figure className='relative w-full h-36 flex'>
					<Image
						className='object-cover ounded-lg group-hover:scale-110 transition'
						src={imgSrc}
						alt='One of my project'
						layout='fill'
					/>
				</figure>
				<div className='rounded-b-md p-2 h-28 bg-gradient-to-r from-indigo-400 to-indigo-600 dark:from-indigo-800 dark:to-indigo-900 text-white'>
					<h1 className='text-xl font-medium py-2'>{title}</h1>
					<p className='text-sm'>{desc}</p>
				</div>
			</a>
		</li>
	);
};

const Projects: NextPage = () => {
	return (
		<motion.div
			className='w-full h-full pt-8 mt-8'
			variants={variants}
			initial='initial'
			animate='animate'
		>
			<NewHead title='Projects' />
			<h1 className='font-bold text-xl pb-[2px] border-b-4 border-gray-400 w-fit'>
				My Personal Projects
			</h1>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-6 pt-8'>
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
