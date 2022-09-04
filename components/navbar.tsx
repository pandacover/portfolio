import React, { useState, useContext, useEffect } from "react";
import Link from "next/link";
import { HiOutlineSun } from "react-icons/hi";
import { IoMdMoon } from "react-icons/io";
import { ScrollContext } from "../utils/observer";
import { motion } from "framer-motion";

const NavbarItems = [
	{ id: "-nav-item-1", name: "Projects", link: "/projects" },
	{ id: "-nav-items-2", name: "Contact", link: "/contact" },
	{
		id: "-nav-items-3",
		name: "Source",
		link: "https://github.com/pandacover/portfolio-v3",
	},
];

const Navbar = () => {
	const [darkMode, setDarkMode] = useState(false);
	const { scrollY } = useContext(ScrollContext);

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
		<motion.nav
			variants={variants}
			animate='animate'
			initial='initial'
			className={`z-[999] w-[110%] ml-[-5%] h-14 top-0 sticky flex flex-wrap items-center text-black transition-all
    dark:text-white bg-[#0001] dark:bg-[#fff1] px-5 md:px-[6%] rounded-b-[.6rem] backdrop-blur-md
    ${scrollY > 250 ? "dark:bg-black bg-rose-100" : ""}`}
		>
			<ul className='flex flex-[2] gap-2 h-full items-center'>
				<li className='mr-4 group'>
					<Link href='/' passHref>
						<a className='font-semibold'>
							L
							<span className='text-blue-500 group-hover:text-blue-300 transition-all'>
								M
							</span>
						</a>
					</Link>
				</li>
				{NavbarItems.map(({ id, name, link }) => (
					<li key={id} className='nav-link mr-2'>
						<Link href={link}>
							<a>{name}</a>
						</Link>
					</li>
				))}
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
		</motion.nav>
	);
};

export default Navbar;
