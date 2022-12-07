import { Blog } from "../../components";
import { getPostData, getPostsId } from "../../lib/posts";

type propsType = {
	postData: PostType;
};

export default function BlogPage({ postData }: propsType) {
	const { title, content, date, id, author } = postData;
	return (
		<Blog
			title={title}
			content={content}
			date={date}
			slug={id}
			author={author}
		/>
	);
}

export const getStaticPaths = () => {
	const paths = getPostsId();

	return {
		paths,
		fallback: false,
	};
};

export const getStaticProps = ({
	params,
}: {
	[key: string]: { id: string };
}) => {
	const postData = getPostData(params.id);
	return {
		props: {
			postData,
		},
	};
};
