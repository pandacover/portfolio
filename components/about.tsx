import { useContext, useRef } from "react";
import { ScrollContext } from "../utils/observer";
import Link from "next/link";

type SpanProps = {
	children: React.ReactNode;
	progress: number;
	lowerLimit: number;
};

const Span: React.FC<SpanProps> = ({ children, progress, lowerLimit }) => {
	let currentProgress = progress;
	return (
		<span
			className={`transition-color duration-150 ease-linear text-black dark:text-white drop-shadow-[0_2px_1px_#0891b2] dark:drop-shadow-[0_2px_1px_#312e81] ${
				progress > lowerLimit && `text-cyan-600 dark:text-indigo-900`
			}`}
		>
			{children}
		</span>
	);
};

const About: React.FC = () => {
	const { scrollY } = useContext(ScrollContext);
	const collegeURL = "https://www.chitkara.edu.in/";
	const leetcodeURL = "https://www.leetcode.com/luvmakin";
	const refContainer = useRef<HTMLDivElement>(null);
	const { current: elContainer } = refContainer;
	let progress = 0;

	if (elContainer) {
		progress = Math.ceil((scrollY * 16) / elContainer.offsetHeight);
	}

	const content = ["Hi ", "Stranger, ", "This ", "is ", "Luv ", "Makin"];

	return (
		<div ref={refContainer} className='pt-6 relative'>
			<h1 className='transition min-h-fit text-7xl font-bold py-12'>
				{content.map((item, idx) => (
					<Span key={idx} progress={progress} lowerLimit={(idx - 1) * 1.2}>
						{item}
						{idx & 1 && idx < content.length - 2 ? <br /> : ""}
					</Span>
				))}
			</h1>
			<h3
				className={`font-bold tracking-wide text-lg pt-6 border-b-4 w-fit border-zinc-500 transition-color duration-200 ${
					scrollY > 280 && "border-red-500"
				}`}
			>
				About Me
			</h3>
			<p className='pt-2'>
				&nbsp;&nbsp;&nbsp;&nbsp;I am a full-stack web developer and an
				undergraduate in Computer Science at <br />{" "}
				<Link href={collegeURL}>
					<a className='text-red-500 hover:underline' target='_blank'>
						Chitkara University
					</a>
				</Link>
				. I have been constantly under the tech radar and am continuously trying
				to learn from this tech driven world. Besides development, I also have
				an interest in problem solving and have currently solved more than 300
				problems in{" "}
				<Link href={leetcodeURL}>
					<a className='text-amber-500 hover:underline' target='_blank'>
						Leetcode
					</a>
				</Link>
				. Whenever I&apos;m not coding, I love reading light-novels, playing
				games and/or listening to music.
			</p>
			<p className='pt-8'>
				<span className='text-lg opacity-50'>
					&#34;That&apos;s enough about me&#34;{" "}
					<em className='text-sm'>Pun intended</em>
				</span>
				<span>- Luv Makin, 2022</span>
			</p>
		</div>
	);
};

export default About;
