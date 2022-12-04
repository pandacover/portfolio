import { Head } from "../";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";
import { BsArrowLeft } from "react-icons/bs";
import { useParseMarkdown } from "../../lib";
import { useScrollContext } from "../../lib/scroll-observer";

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
	const [topButton, setTopButton] = useState(false);
	const { scrollY } = useScrollContext();

	useEffect(() => {
		if (scrollY > screen.availHeight / 2) {
			setTopButton(true);
		} else {
			setTopButton(false);
		}
	}, [scrollY]);

	const onScrollTop = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		const topElement = document.querySelector("#top");
		topElement?.scrollIntoView();
	};

	return (
		<>
			<Head title={title} />
			<article
				className='prose lg:prose-lg dark:prose-invert relative'
				id='top'
			>
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

				<button
					className='w-8 h-8 rounded-full text-black dark:text-gray-300 fixed bottom-6 right-10 md:right-36'
					style={{ display: topButton ? "flex" : "none" }}
					onClick={onScrollTop}
				>
					<FaArrowUp />
				</button>
			</article>
		</>
	);
}
