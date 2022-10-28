import Link from "next/link";
import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SendEmail, Head, Loader, Variant } from "../../lib";
import { NextPage } from "next";
import Alert from "./alert";

const Contact: NextPage = () => {
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
			className='w-full h-full'
			variants={Variant("bounce")}
			initial='initial'
			animate='animate'
		>
			<Head>Contact</Head>
			<div className='mt-16'>
				<AnimatePresence>{isAlert && <Alert />}</AnimatePresence>
				<h1 className='text-6xl font-black w-fit dark:border-gray-400 border-black'>
					<span className='text-emerald-600 dark:text-indigo-700'>Contact</span>{" "}
					Me!
				</h1>
				<form
					ref={formRef}
					onSubmit={(e) => handleSubmit(e)}
					className='pt-12 flex flex-col gap-4'
				>
					<label className='' htmlFor='email'>
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
						className='bg-opacity-10 dark:bg-opacity-10 bg-gray-600 dark:bg-white dark:text-white p-2'
					/>
					<label className='' htmlFor='message'>
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
						className='bg-gray-600 dark:bg-white bg-opacity-10 dark:bg-opacity-10 b bg-transparent dark:text-white p-2 h-32 resize-none'
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
