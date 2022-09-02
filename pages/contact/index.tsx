import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { Loader } from "../../components";
import { SendEmail } from "../../utils/contact";
import { motion, AnimatePresence } from "framer-motion";
import Meta from "../../utils/head";
import { variants as slideVariant } from "../../components/Layout";

const variants = {
	hidden: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1 },
};

const Alert: React.FC = () => {
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
			variants={variants}
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
};

const Contact: React.FC = () => {
	const formRef = useRef(null);
	const [isLoading, setIsLoading] = useState(false);
	const [isAlert, setIsAlert] = useState(false);
	const [email, setEmail] = useState("");
	const [message, setMessage] = useState("");

	const handleSubmit = (e: any) => {
		e.preventDefault();
		setIsLoading(true);
		setTimeout(() => {
			setIsLoading(false);
			setIsAlert(true);
			setMessage("");
			setEmail("");
			setTimeout(() => setIsAlert(false), 7000);
		}, 4000);
		SendEmail(formRef.current);
	};
	return (
		<motion.div
			className='w-full h-full pt-8'
			variants={slideVariant}
			initial='initial'
			animate='animate'
		>
			<Meta title='Contact' />
			<div className='mt-12'>
				<AnimatePresence>{isAlert && <Alert />}</AnimatePresence>
				<h1 className='text-xl font-bold border-b-4 w-fit dark:border-gray-400 border-black'>
					Send me message!
				</h1>
				<form
					ref={formRef}
					onSubmit={(e) => handleSubmit(e)}
					className='pt-8 flex flex-col gap-4'
				>
					<label className='sr-only' htmlFor='email'>
						Email
					</label>
					<input
						value={email}
						onChange={({ currentTarget: ct }) => setEmail(ct.value)}
						type='email'
						name='email'
						id='email'
						required
						placeholder='Type your email here...'
						maxLength={100}
						className='bg-transparent dark:text-white p-2'
					/>
					<label className='sr-only' htmlFor='message'>
						Message
					</label>
					<textarea
						value={message}
						onChange={({ currentTarget: ct }) => setMessage(ct.value)}
						required
						name='message'
						id='message'
						placeholder='Type your message here...'
						maxLength={300}
						className='bg-transparent dark:text-white p-2 h-32 resize-none'
					/>
					<button
						type='submit'
						className='font-medium hover:bg-transparent dark:hover:bg-transparent py-2
						bg-emerald-600 text-emerald-100 border-emerald-600 hover:text-emerald-600 
						dark:bg-indigo-700 dark:text-white dark:border-indigo-700 dark:hover:text-indigo-600 
						border-2 rounded-lg transition flex gap-4 justify-center items-center'
					>
						{isLoading ? "Sending" : "Send"} {isLoading ? <Loader /> : ""}
					</button>
				</form>
			</div>
			<div className='pt-12'>
				<h1 className='text-sm text-center text-gray-600 dark:text-gray-300'>
					Powered by{" "}
					<Link href='https://www.emailjs.com'>
						<a
							target='_blank'
							className='dark:text-indigo-600 text-emerald-700 hover:underline'
						>
							Email.js
						</a>
					</Link>
				</h1>
			</div>
		</motion.div>
	);
};

export default Contact;
