import { Card, Blog } from "../../components";

const BlogItem = [
	{
		title: "Persisting Dark Mode - TailwindCSS",
		subtitle: ["TailwindCSS"],
		content: [
			"Tailwind is a utility-first css framework used to build custom user interfaces rapidly and efficiently. It is highly cusotmizable and uses classes instead of components which makes it very developer dependent.",
		],
	},
];

export default function Blogs() {
	return (
		<div className='mt-8'>
			{BlogItem.map((blog, idx) => (
				<Blog
					title={blog.title}
					subtitle={blog.subtitle}
					content={blog.content}
					key={idx}
				/>
			))}
		</div>
	);
}
