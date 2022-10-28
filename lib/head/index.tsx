import Head from "next/head";

type PropsType = {
	children: React.ReactNode;
};

export default function Meta({ children }: PropsType) {
	return (
		<Head>
			<title>LuvMakin - {children}</title>
			<meta
				name='description'
				content='Luv Makin a creative web developer portfolio. Luv Makin is a third year Computer Science undergraduate from Chitkara University of Engineering and Technologies, Punjab, Chandigarh.'
			/>
		</Head>
	);
}
