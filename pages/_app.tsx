import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../lib/scroll-observer";
import { Layout } from "../components";

const MyApp = ({ Component, pageProps }: AppProps) => {
	return (
		<ScrollObserver>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ScrollObserver>
	);
};

export default MyApp;
