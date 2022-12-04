import { NextPage } from "next";
import { Projects, Project } from "../../components";

export const getStaticPaths = async () => {
	try {
		const paths = Object.keys(Projects).map((key) => {
			return {
				params: {
					slug: Projects[key].name,
				},
			};
		});
		return {
			paths,
			fallback: false,
		};
	} catch (err) {
		console.error(err);
	}
};

export const getStaticProps = async (context: any) => {
	try {
		const id = context.params.slug;
		const data = Projects[id];

		return {
			props: { project: data },
		};
	} catch (err) {
		console.error(err);
	}
};

type Props = {
	project: {
		id: string;
		name: string;
		details: string;
		live: string;
		source: string;
		tech: any;
		image: string;
	};
};

const Template: NextPage<Props> = ({ project }) => {
	return (
		<Project
			title={project.name}
			content={project.details}
			liveHref={project.live}
			sourceHref={project.source}
			imageSrc={project.image}
		/>
	);
};

export default Template;
