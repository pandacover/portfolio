import React, { useState, useContext, useEffect } from "react";
import { ScrollContext } from "../../../lib/scroll-observer";
import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";
import { NavbarItems } from "./nav-items";

import { HiOutlineSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(false);
	const { scrollY } = useContext(ScrollContext);
	const router = useRouter();

	const toggleTheme = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		e.preventDefault();
		setDarkMode(!darkMode);
		document.querySelector("body")?.classList.toggle("dark");
		window.localStorage.setItem("dark", "" + !darkMode);
	};

	const variants = {
		initial: { opacity: 0 },
		animate: { opacity: 1, transition: { delay: 0.2 } },
	};

	useEffect(() => {
		const body = document.body;
		const isDarkMode = window.localStorage.getItem("dark");
		if (isDarkMode && isDarkMode === "true") {
			body.classList.add("dark");
			setDarkMode(true);
		}
	}, []);

	return (
		<nav
			className={`z-[999] w-[110%] ml-[-5%] h-14 top-0 sticky flex flex-wrap items-center transition-all bg-[#0001] dark:bg-[#fff1] px-5 md:px-[6%] rounded-b-[.6rem] backdrop-blur-md
    ${scrollY > 280 ? "dark:bg-[#000] bg-gray-300" : ""}`}
		>
			<ul className='flex flex-[2] gap-2 h-full items-center'>
				<li className='mr-4 group'>
					<Link href='/' className='font-semibold'>
						L
						<span
							className='text-blue-500 hover:opacity-60'
							style={router.asPath === "/" ? {} : { color: "rgba(239 68 68)" }}
						>
							M
						</span>
					</Link>
				</li>
				{NavbarItems.map(({ id, name, link }) => {
					const regexLink = new RegExp(`${link}?[a-zA-Z]((/)[a-zA-Z]*)*`);
					return (
						<li
							key={id}
							className='nav-link mr-2'
							style={
								regexLink.test(router.asPath)
									? {}
									: { color: "rgba(113 112 113)" }
							}
						>
							<Link href={link} passHref>
								{name}
							</Link>
						</li>
					);
				})}
			</ul>
			<div className='flex justify-end flex-1'>
				{darkMode ? (
					<button
						type='button'
						onClick={(e) => toggleTheme(e)}
						className='p-[.4rem] bg-amber-200 rounded-full text-black text-lg hover:bg-amber-400 transition'
					>
						{<HiOutlineSun />}
					</button>
				) : (
					<button
						type='button'
						onClick={(e) => toggleTheme(e)}
						className='p-[.4rem] bg-violet-500 rounded-full text-white text-lg hover:bg-violet-700 transition'
					>
						{<IoMdMoon />}
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
