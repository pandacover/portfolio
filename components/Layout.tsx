import Navbar from "./navbar";
import Footer from "./footer";
import { AnimatePresence } from "framer-motion";

interface Props {
	children: React.ReactNode;
}

export const variants = {
	initial: { opacity: "0", y: "-100%" },
	animate: {
		opacity: "1",
		y: "0",
		transition: { delay: 0.1 },
	},
};

const Layout = ({ children }: Props) => {
	return (
		<div className='bg-rose-50 dark:bg-[#212121] dark:text-white min-h-screen max-w-screen'>
			<div className='relative min-h-screen md:w-[50vw] w-[80vw] mx-auto pb-4'>
				<Navbar />
				<AnimatePresence>{children}</AnimatePresence>
				<Footer />
			</div>
		</div>
	);
};

export default Layout;
