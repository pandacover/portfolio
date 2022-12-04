import Head from "next/head";

type PropsType = {
	title: string;
};

export default function Meta({ title }: PropsType) {
	return (
		<Head>
			<title>{`LuvMakin - ${title}`}</title>
			<meta
				name='description'
				content='Luv Makin a creative web developer portfolio. Luv Makin is a third year Computer Science undergraduate from Chitkara University of Engineering and Technologies, Punjab, Chandigarh.'
			/>
		</Head>
	);
}
