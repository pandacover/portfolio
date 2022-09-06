import { H1, H2, P } from "./styled";
import { motion } from "framer-motion";
import { variants } from "./Layout";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";

type PropsType = {
	title: string;
	subtitle?: string[];
	content?: string[];
	image?: string[];
};

export default function Blogs({
	title = "Title",
	subtitle = ["Subtitle"],
	content = ["content"],
	image = ["image"],
}: PropsType) {
	return (
		<motion.article
			className='prose lg:prose-xl mt-12 relative'
			initial='initial'
			animate='animate'
			variants={variants}
		>
			<Link href='/blogs' passHref>
				<a
					className='my-8 flex items-center height-fit gap-2 pointer-cursor dark:text-white text-[1rem]'
					onClick={(e) => e.currentTarget.classList.add("animate-ping")}
				>
					{<BsArrowLeft />} Back
				</a>
			</Link>
			<H1>{title}</H1>
			{subtitle.map((item: string, idx: number) => (
				<section key={idx}>
					<H2 classname='underline'>{item}</H2>
					<P>{content[idx]}</P>
				</section>
			))}
			<p className='text-right dark:text-white'>
				<span className='text'>Author</span> - <span>Luv Makin </span>
			</p>
		</motion.article>
	);
}
