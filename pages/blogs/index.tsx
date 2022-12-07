import { Card, Head } from "../../components";
import { getSortedPostsData } from "../../lib/posts";

type propsType = {
	everyPostsData: Omit<PostType, "content">[];
};

export default function Blogs({ everyPostsData }: propsType) {
	return (
		<>
			<Head title='Blogs' />

			<div className='mt-8 w-full h-full'>
				<h1 className='text-5xl md:text-6xl font-extrabold mb-12'>
					My <span className='text-teal-600 dark:text-rose-400'>Blogs</span>
				</h1>
				<ul className='grid grid-cols-1 md:grid-cols-2 gap-6'>
					{everyPostsData.map((post) => (
						<Card
							type='blog'
							key={post.id}
							link={post.id}
							date={post.date}
							title={post.title}
							desc={post.excerpt}
							author={post.author}
							imgSrc={post.imgSrc}
							parentUrl='/blogs'
						/>
					))}
				</ul>
			</div>
		</>
	);
}

export const getStaticProps = () => {
	const everyPostsData = getSortedPostsData();

	return {
		props: {
			everyPostsData,
		},
	};
};
