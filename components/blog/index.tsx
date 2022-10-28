import { H1 } from "../styled";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { ParseMarkdown, Head, Variant } from "../../lib";

type PropsType = {
	title: string;
	content: string;
	date: string;
	slug: string;
	author: string;
};

export default function Blogs({
	title = "Title",
	content = "Content",
	date = "Not Mentioned",
	author = "Luv Makin",
	slug = "404",
}: PropsType) {
	return (
		<motion.article
			className='prose lg:prose-xl dark:prose-invert mt-12 relative'
			initial='initial'
			animate='animate'
			variants={Variant("bounce")}
		>
			<Head>{title}</Head>
			<Link href='/blogs' passHref>
				<a
					className='my-8 flex items-center height-fit gap-2 pointer-cursor text-[1rem]'
					onClick={(e) => e.currentTarget.classList.add("animate-ping")}
				>
					{<BsArrowLeft />} Back
				</a>
			</Link>
			<H1>{title}</H1>
			<ParseMarkdown content={content} />
			<p className='text-right'>
				{author} - {date}
			</p>
		</motion.article>
	);
}
