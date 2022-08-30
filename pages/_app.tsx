import "../styles/globals.css";
import type { AppProps } from "next/app";
import ScrollObserver from "../utils/observer";
import dynamic from "next/dynamic";
import { Loader } from "../components";
import { Suspense } from "react";

const LazyLayout = dynamic(() => import("../components/Layout"), {
	suspense: true,
});

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ScrollObserver>
			<Suspense fallback={<Loader />}>
				<LazyLayout>
					<Component {...pageProps} />
				</LazyLayout>
			</Suspense>
		</ScrollObserver>
	);
}

export default MyApp;
