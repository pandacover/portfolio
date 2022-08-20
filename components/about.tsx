import React, { useContext, useState, useRef } from "react";
import { ScrollContext } from "../utils/observer";
import Link from "next/link";

const About: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const collegeURL = "https://www.chitkara.edu.in/";
  const leetcodeURL = "https://www.leetcode.com/luvmakin";
  const refContainer = useRef<HTMLDivElement>(null)
  const { current: elContainer } = refContainer
  let progress = 0;

  if(elContainer) {
    progress = Math.ceil(scrollY * 16 / elContainer.offsetHeight)
  }

  return (
    <div ref={refContainer} className="pt-6">
      <h1 className="transition min-h-fit text-7xl font-bold py-12">
        <span className={`${progress <= 1 ? 'emeraldGradientLeft' : ''} transition-all duration-300 ease-in-out`}>Hi </span>
        <span className={`${progress <= 2 && progress > 1 ? 'emeraldGradientRight' : ''} transition-all duration-300 ease-in-out`}>Stranger </span> <br />
        <span className={`${progress <= 3 && progress > 2 ? 'redGradientRight' : ''} transition-all duration-300 ease-in-out`}>This </span>
        <span className={`${progress <= 4 && progress > 3 ? 'redGradientLeft' : ''} transition-all duration-300 ease-in-out`}>is </span><br />
        <span className={`${progress > 4 ? 'blueGradientRight' : ''} transition-all duration-300 ease-in-out`}>Luv </span>
        <span className={`${progress > 5 ? 'blueGradientLeft' : ''} transition-all duration-300 ease-in-out`}>Makin</span>
      </h1>
      <h3 className="font-bold tracking-wide text-lg pt-6 border-b-4 w-fit border-zinc-500">
        About Me
      </h3>
      <p className="pt-2">
        &nbsp;&nbsp;&nbsp;&nbsp;I am a full-stack web developer and an
        undergraduate in Computer Science at <br />{" "}
        <Link href={collegeURL}>
          <a className="text-red-500 hover:underline" target="_blank">
            Chitkara University
          </a>
        </Link>
        . I have been constantly under the tech radar and am continuously trying
        to learn from this tech driven world. Besides development, I also have
        an interest in problem solving and have currently solved more than 300
        problems in{" "}
        <Link href={leetcodeURL}>
          <a className="text-amber-500 hover:underline" target="_blank">
            Leetcode
          </a>
        </Link>
        . Whenever I&apos;m not coding, I love reading light-novels, playing
        games and/or listening to music.
      </p>
      <p className="pt-8">
        <span className="text-lg opacity-50">
          &#34;That&apos;s enough about me&#34;{" "}
          <em className="text-sm">Pun intended</em>
        </span>
        <span>- Luv Makin, 2022</span>
      </p>
    </div>
  );
};

export default About;
