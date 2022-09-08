import { Blog } from "../../components";
import fs from "fs";
import path from "path";
import matter from "gray-matter";

export async function getStaticPaths() {
	const files = fs.readdirSync(path.join("public", "blogs"));
	const paths = files.map((filename) => {
		const slug = filename.replace(".md", "");
		return {
			params: {
				slug,
			},
		};
	});

	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps(context: any) {
	const mardownWithMeta = fs.readFileSync(
		path.join("public", "blogs", context.params.slug + ".md"),
		"utf-8"
	);
	const { data: frontmatter, content } = matter(mardownWithMeta);
	return {
		props: {
			frontmatter,
			slug: context.params.slug,
			content,
		},
	};
}

type Props = {
	frontmatter: {
		title: string;
		date: string;
		author: string;
	};
	slug: string;
	content: string;
};

export default function BlogPage({
	frontmatter: { title, date, author },
	slug,
	content,
}: Props) {
	return (
		<Blog
			title={title}
			content={content}
			date={date}
			slug={slug}
			author={author}
		/>
	);
}
