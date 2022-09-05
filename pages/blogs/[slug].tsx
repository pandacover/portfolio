import { BlogItem } from "./";
import { Blog } from "../../components";

export async function getStaticPaths() {
	try {
		const paths = BlogItem.map((blog) => {
			return {
				params: {
					slug: blog.link,
				},
			};
		});
		return {
			paths,
			fallback: false,
		};
	} catch (error) {
		console.error(error);
	}
}

export async function getStaticProps(context: any) {
	try {
		const id = context.params.slug;
		const data = BlogItem.filter((blog) => blog.link == id)[0];
		return {
			props: { blog: data },
		};
	} catch (error) {
		console.log(error);
	}
}

type Props = {
	blog: {
		link: string;
		title: string;
		subtitle: string[];
		content: string[];
	};
};

export default function BlogPage({
	blog: { title, subtitle, content, link },
}: Props) {
	return <Blog title={title} subtitle={subtitle} content={content} />;
}
