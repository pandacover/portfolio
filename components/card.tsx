import Link from "next/link";
import Image from "next/image";

type PropTypes = {
	link: string;
	parentUrl: string;
	imgSrc: string;
	title: string;
	desc: string;
};

export default function Card({
	imgSrc,
	title,
	desc,
	parentUrl,
	link,
}: PropTypes) {
	const href = parentUrl + "/" + link;
	return (
		<li
			className='mb-4 w-full shadow-[0_0_4px_2.5px_#ccc] dark:shadow-[0_0_4px_2.5px_#0005] rounded-md 
					bg-gray-200 dark:bg-[#2128]'
		>
			<Link href={`${parentUrl}/[slug]`} passHref as={href}>
				<a className='relative block '>
					<div>
						<Image
							src={imgSrc}
							alt='One of my project'
							layout='responsive'
							width={1000}
							height={600}
							priority
							className='rounded-t-md'
						/>
					</div>
					<article
						className='px-4 py-2 min-w-full min-h-full 
						rounded-b-md font-mono text-[14px] '
					>
						<section className='py-2'>
							<h1 className='text-gray-600'>Name</h1>
							<p>{title}</p>
						</section>
						<div className='h-[2px] bg-gray-400 w-full rounded-xl' />
						<p className='pt-2'>{desc}</p>
					</article>
				</a>
			</Link>
		</li>
	);
}
