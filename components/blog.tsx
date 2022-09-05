import { H1, H2, P } from "./styled";
import { motion } from "framer-motion";
import { variants } from "./Layout";

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
			className='prose lg:prose-xl mt-12'
			initial='initial'
			animate='animate'
			variants={variants}
		>
			<H1>{title}</H1>
			{subtitle.map((item: string, idx: number) => (
				<section key={idx}>
					<H2 classname='underline'>{item}</H2>
					<P>{content[idx]}</P>
				</section>
			))}
		</motion.article>
	);
}
