import type { NextPage } from "next";
import { About, Bio, Online } from "../components";
import { Head } from "../components";

const Home: NextPage = () => {
	return (
		<>
			<Head title='Home' />

			<div className='w-full h-full'>
				<About />
				<Bio />
				<Online />
			</div>
		</>
	);
};

export default Home;
