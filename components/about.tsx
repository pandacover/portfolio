import React, { useContext, useRef } from "react";
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
			className={`transition-color duration-300 ease-in-out text-black dark:text-white
			${currentProgress >= lowerLimit && "text-cyan-500 dark:text-indigo-700"}`}
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

	return (
		<div ref={refContainer} className='pt-6'>
			<h1 className='transition min-h-fit text-7xl font-bold py-12'>
				<Span progress={progress} lowerLimit={0}>
					Hi{" "}
				</Span>
				<Span progress={progress} lowerLimit={1}>
					Stranger,
				</Span>
				<br />
				<Span progress={progress} lowerLimit={2}>
					This{" "}
				</Span>
				<Span progress={progress} lowerLimit={3}>
					is
				</Span>
				<br />
				<Span progress={progress} lowerLimit={4}>
					Luv{" "}
				</Span>
				<Span progress={progress} lowerLimit={5}>
					Makin
				</Span>
			</h1>
			<h3 className='font-bold tracking-wide text-lg pt-6 border-b-4 w-fit border-zinc-500'>
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
