import { Card } from "../../components";
import { motion } from "framer-motion";
import { variants } from "../../components/Layout";

export const BlogItem = [
	{
		link: "tailwindcss-dark-mode",
		title: "Persisting Dark Mode - TailwindCSS",
		subtitle: ["TailwindCSS"],
		content: [
			"Tailwind is a utility-first css framework used to build custom user interfaces rapidly and efficiently. It is highly cusotmizable and uses classes instead of components which makes it very developer dependent.",
		],
	},
];

export default function Blogs() {
	return (
		<motion.div
			className='mt-8'
			initial='initial'
			animate='animate'
			variants={variants}
		>
			<h1 className='text-6xl font-extrabold mb-8'>
				My <span className='text-teal-600 dark:text-rose-400'>Blogs</span>
			</h1>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{BlogItem.map((blog, idx) => (
					<Card
						parentUrl='/blogs'
						link={blog.link}
						title={blog.title}
						desc={blog.subtitle[0]}
						imgSrc='/assets/-pandacover-blog.jpg'
						key={idx}
					/>
				))}
			</ul>
		</motion.div>
	);
}

// <Blog
// 	title={blog.title}
// 	subtitle={blog.subtitle}
// 	content={blog.content}
// 	key={idx}
// />
