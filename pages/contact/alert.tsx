import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Variant } from "../../lib";

export default function Alert() {
	const [progress, setProgress] = useState(0);

	useEffect(() => {
		if (progress === 100) return;
		const interval = setInterval(() => {
			setProgress(progress + 1);
		}, 50);
		return () => clearInterval(interval);
	}, [progress]);

	return (
		<motion.div
			variants={Variant("bounce")}
			initial='hidden'
			animate='visible'
			exit='hidden'
			className='pb-4 w-fit h-fit bg-transparent text-green-600 dark:text-green-100 '
		>
			<span className='pb-2'>Done! Your message was sent</span>
			<div
				className='dark:bg-green-300 bg-green-500 h-[2px]'
				style={{ width: `${progress}%` }}
			/>
		</motion.div>
	);
}
