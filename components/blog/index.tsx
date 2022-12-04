import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { useParseMarkdown } from "../../lib";
import { Head } from "../";

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
}: PropsType) {
	const markdown = useParseMarkdown({ content });

	return (
		<>
			<Head title={title} />
			<article className='prose lg:prose-lg dark:prose-invert relative'>
				<Link
					href='/blogs'
					className='mb-14 flex items-center height-fit gap-2 pointer-cursor text-[1rem] w-fit'
					onClick={(e) => e.currentTarget.classList.add("animate-ping")}
				>
					{<BsArrowLeft />} Back
				</Link>

				<div>
					<h1>{title}</h1>

					<p className='text-right text-sm'>
						{author} - {date}
					</p>
				</div>
				<div className='blog-container'>{markdown}</div>
			</article>
		</>
	);
}
