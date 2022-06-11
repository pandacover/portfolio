import type { NextPage } from "next";
import { About, Bio, Online } from "../components";
import NewHead from "../utilities/useHead";

const Home: NextPage = () => {
  return (
    <>
      <NewHead title="Home" />
      <About />
      <Bio />
      <Online />
    </>
  );
};

export default Home;
