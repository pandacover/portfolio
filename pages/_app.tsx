import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../lib/scroll-observer";
import { Layout, Loader } from "../components";
import { useEffect, useState } from "react";
import Router from "next/router";

const MyApp = ({ Component, pageProps }: AppProps) => {
	const [loading, setLoading] = useState(false);

	Router.events.on("routeChangeStart", () => setLoading(true));
	Router.events.on("routeChangeError", () => setLoading(false));
	Router.events.on("routeChangeComplete", () => setLoading(false));

	return (
		<ScrollObserver>
			<Layout>{loading ? <Loader /> : <Component {...pageProps} />}</Layout>
		</ScrollObserver>
	);
};

export default MyApp;
