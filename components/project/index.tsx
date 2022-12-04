import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsArrowLeft } from "react-icons/bs";
import { Head } from "../";

type Props = {
	title: string;
	content: string;
	liveHref: string;
	sourceHref: string;
	imageSrc: string;
};

const Project = ({ title, content, liveHref, sourceHref, imageSrc }: Props) => {
	return (
		<>
			<Head title={title} />
			<div className='min-w-full min-h-screen px-2'>
				<Link
					href='/projects'
					className='my-8 flex items-center height-fit gap-2 pointer-cursor'
					onClick={(e) => e.currentTarget.classList.add("animate-ping")}
				>
					{<BsArrowLeft />} Back
				</Link>
				<h1 className='text-7xl font-bold'>{title}</h1>
				<div className='py-4'>
					<Image
						src={imageSrc}
						alt={title}
						width={1000}
						height={468}
						priority
					/>
				</div>
				<hr className='h-4' />
				<p>{content}</p>
				<div className='pt-4'>
					<Link
						href={sourceHref}
						className='underline inline-flex items-center gap-2 mr-6 hover:text-blue-400'
					>
						Source code
					</Link>
					<Link
						href={liveHref}
						className='text-blue-600 dark:text-blue-400 group inline-flex items-center gap-2 hover:underline'
					>
						Check {title} live{" "}
						<span className='group-hover:animate-ping'>
							<BsArrowRight />
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Project;
