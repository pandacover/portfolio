import Link from "next/link";
import Image from "next/image";

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
	return (
		<li
			className='mb-4 w-full shadow-[0_0_4px_2.5px_#ccc] dark:shadow-[0_0_4px_2.5px_#0005] rounded-sm
		bg-gray-200 dark:bg-[#101010]'
		>
			<Link href={parentUrl + "/" + link} className='relative block'>
				<div className=''>
					<Image
						src={imgSrc}
						width={1000}
						height={600}
						className='rounded-sm'
						alt='One of my project'
					/>
				</div>
				<article
					className='px-4 py-2 min-w-full min-h-full 
						rounded-b-md  text-[14px] '
				>
					<h1
						className='text-lg font-semibold text-ellipsis whitespace-nowrap overflow-hidden'
						title={title}
					>
						{title}
					</h1>
					<section>
						<p className='text-container'>{desc}</p>
						{type === "blog" && (
							<p className='opacity-75'>
								{author} - {date}
							</p>
						)}
					</section>
				</article>
			</Link>
		</li>
	);
}
