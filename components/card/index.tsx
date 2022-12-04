import Link from "next/link";
import Image from "next/image";
import { Loader } from "../";
import { useState } from "react";

type PropTypes = {
	link: string;
	parentUrl: string;
	imgSrc?: string;
	title: string;
	desc: string;
	author?: string;
	date?: string;
	type: string;
};

export default function Card({
	imgSrc = "/assets/-pandacover-blog.jpg",
	title,
	desc,
	parentUrl,
	link,
	type,
	date,
	author,
}: PropTypes) {
	const [loading, setLoading] = useState(true);

	return (
		<li
			className='mb-4 w-full shadow-lg shadow-gray-400 dark:shadow-black rounded-sm
		bg-gray-200 dark:bg-[#171717]'
		>
			<Link href={parentUrl + "/" + link} className='relative block'>
				<div className='relative'>
					<Image
						quality={50}
						src={imgSrc}
						width={1000}
						height={600}
						className='rounded-sm'
						alt='One of my project'
						onLoadingComplete={() => setLoading(false)}
					/>
					{loading && <Loader />}
				</div>
				<article
					className='px-4 py-4 min-w-full min-h-full 
						rounded-b-md  text-[14px] '
				>
					<h1
						className='text-lg font-semibold mb-4 text-ellipsis whitespace-nowrap overflow-hidden'
						title={title}
					>
						{title}
					</h1>
					<section>
						<p className='text-container'>{desc}</p>
						{type === "blog" && (
							<p className='text-[#606060] text-xs mt-4'>
								{author} - {date}
							</p>
						)}
					</section>
				</article>
			</Link>
		</li>
	);
}
