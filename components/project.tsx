import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { variants } from "./Layout";
import { motion } from "framer-motion";
import Meta from "../utils/head";

type Props = {
	title: string;
	content: string;
	liveHref: string;
	sourceHref: string;
	imageSrc: string;
};

const Project = ({ title, content, liveHref, sourceHref, imageSrc }: Props) => {
	return (
		<motion.div
			variants={variants}
			animate='animate'
			initial='initial'
			className='min-w-full min-h-screen px-2'
		>
			<Meta>{title}</Meta>
			<Link href='/projects' passHref>
				<a
					className='my-8 flex items-center height-fit gap-2 pointer-cursor'
					onClick={(e) => e.currentTarget.classList.add("animate-ping")}
				>
					{<BsArrowLeft />} Back
				</a>
			</Link>
			<h1 className='text-7xl font-bold'>{title}</h1>
			<div className='py-4'>
				<Image src={imageSrc} alt={title} width={1000} height={468} priority />
			</div>
			<hr className='h-4' />
			<p>{content}</p>
			<div className='pt-4'>
				<Link href={sourceHref} passHref>
					<a
						target='_blank'
						className='underline inline-flex items-center gap-2 mr-6 hover:text-blue-400'
					>
						Source code
					</a>
				</Link>
				<Link href={liveHref} passHref>
					<a
						target='_blank'
						className='text-blue-600 dark:text-blue-400 group inline-flex items-center gap-2 hover:underline'
					>
						Check {title} live{" "}
						<span className='group-hover:animate-ping'>
							<BsArrowRight />
						</span>
					</a>
				</Link>
			</div>
		</motion.div>
	);
};

export default Project;
