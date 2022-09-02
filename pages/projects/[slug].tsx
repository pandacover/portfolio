import { NextPage } from "next";
import { Projects, Project } from "../../components";

export const getStaticPaths = async () => {
  try {
    const paths = Projects.map((project) => {
      return {
        params: {
          slug: project.name,
        },
      };
    });
    return {
      paths,
      fallback: false,
    };
  } catch (err) {
    console.log(err);
  }
};

export const getStaticProps = async (context: any) => {
  try {
    const id = context.params.slug;
    const data = Projects.filter((project) => project.name == id)[0];

    return {
      props: { project: data },
    };
  } catch (err) {
    console.log(err);
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
