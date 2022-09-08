import { Card } from "../../components";
import { motion } from "framer-motion";
import { variants } from "../../components/Layout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Meta from "../../utils/head";

type PostType = {
	posts: {
		slug: string;
		frontmatter: {
			title: string;
			excerpt: string;
			author: string;
			date: string;
			imgSrc?: string;
		};
	}[];
};

export default function Blogs({ posts }: PostType) {
	return (
		<motion.div
			className='mt-8 w-full h-full'
			initial='initial'
			animate='animate'
			variants={variants}
		>
			<Meta>Blogs</Meta>
			<h1 className='text-6xl font-extrabold mb-12'>
				My <span className='text-teal-600 dark:text-rose-400'>Blogs</span>
			</h1>
			<ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
				{posts.map((post, idx: number) => (
					<Card
						parentUrl='/blogs'
						link={post.slug}
						title={post.frontmatter.title}
						desc={post.frontmatter.excerpt}
						key={idx}
						type='blog'
						author={post.frontmatter.author}
						date={post.frontmatter.date}
						imgSrc={post.frontmatter.imgSrc}
					/>
				))}
			</ul>
		</motion.div>
	);
}

export async function getStaticProps() {
	const files = fs.readdirSync(path.join("public", "blogs"));
	const posts = files.map((filename) => {
		const slug = filename.replace(".md", "");
		const mardownWithMeta = fs.readFileSync(
			path.join("public", "blogs", filename),
			"utf-8"
		);
		const { data: frontmatter } = matter(mardownWithMeta);
		return {
			slug,
			frontmatter,
		};
	});
	return {
		props: {
			posts,
		},
	};
}
