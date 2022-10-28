import Navbar from "./navbar";
import Footer from "./footer";
import { AnimatePresence } from "framer-motion";

interface Props {
	children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
	return (
		<div className='bg-gray-200 dark:bg-[#212121] dark:text-white min-h-screen max-w-screen'>
			<div className='relative min-h-screen md:w-[50vw] w-[80vw] mx-auto pb-4'>
				<Navbar />
				<AnimatePresence>{children}</AnimatePresence>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;