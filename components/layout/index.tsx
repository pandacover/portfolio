import Navbar from "./navbar";
import Footer from "./footer";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	const router = useRouter();
	const [hideNavbar, setHideNavbar] = useState(false);

	useEffect(() => {
		const expressions = [/\/projects\/[\s\S]+/g, /\/blogs\/[\s\S]+/g];
		setHideNavbar(
			expressions[0].test(router.asPath) || expressions[1].test(router.asPath)
		);
	}, [router]);

	return (
		<div className='bg-gray-200 dark:bg-[#121212] dark:text-white min-h-screen max-w-screen'>
			<div className='relative min-h-screen md:w-[50vw] w-[80vw] mx-auto pb-4'>
				{hideNavbar ? <div className='h-14' /> : <Navbar />}
				{children}
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
