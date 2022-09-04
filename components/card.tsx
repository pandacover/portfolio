import Link from "next/link";
import Image from "next/image";

type PropTypes = {
	link?: string;
	imgSrc: string;
	title: string;
	desc: string;
};

export default function Card({ imgSrc, title, desc }: PropTypes) {
	let href = `/projects/${title}`;
	return (
		<li className='mb-4 flex-[230px]'>
			<Link href='/projects/[slug]' passHref as={href}>
				<a className='group relative'>
					<div>
						<Image
							src={imgSrc}
							alt='One of my project'
							layout='responsive'
							width={1000}
							height={600}
							priority
						/>
					</div>
					<div
						className='absolute top-0 left-0 px-4 py-2 backdrop-blur-md bg-black bg-opacity-20
									min-w-full min-h-full flex flex-col items-center justify-center
									group-hover:opacity-0 transition-all duration-200 mix-blend-difference text-white'
					>
						<h1 className='text-3xl py-2 font-bold'>{title}</h1>
						<p className='text-sm text-center'>{desc}</p>
					</div>
				</a>
			</Link>
		</li>
	);
}
