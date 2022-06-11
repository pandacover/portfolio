import type { NextPage } from "next";
import { About, Bio, Online } from "../components";
import NewHead from "../utils/head";

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
