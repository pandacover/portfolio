import React, { useContext, useState, useEffect } from "react";
import { ScrollContext } from "../utils/observer";
import Link from "next/link";

const About: React.FC = () => {
  const { scrollY } = useContext(ScrollContext);
  const [textSize, setTextSize] = useState(4);
  const collegeURL = "https://www.chitkara.edu.in/";
  const leetcodeURL = "https://www.leetcode.com/luvmakin";

  useEffect(() => {
    setTextSize(
      Math.floor(
        scrollY > 0 ? ((8 / scrollY) * 10 > 8 ? 8 : (8 / scrollY) * 10) : 8
      )
    );
  }, [scrollY]);

  return (
    <div className="pt-8 ">
      <h1
        className={`transition h-30 ${textSize <= 8 && textSize > 4
            ? "text-black dark:text-white"
            : textSize <= 4 && textSize > 0
              ? "text-emerald-400"
              : "text-red-400"
          } text-6xl`}
      >
        Hi Stranger, <br /> This is Luv Makin
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
