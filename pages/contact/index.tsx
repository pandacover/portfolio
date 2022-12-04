import Link from "next/link";
import { useRef, useState } from "react";
import { sendEmail } from "../../lib";
import { Loader, Head, Alert } from "../../components";
import { NextPage } from "next";

const Contact: NextPage = () => {
	const formRef = useRef(null);
	const [loading, setLoading] = useState(false);
	const [isAlert, setIsAlert] = useState(false);
	const [[email, message], setData] = useState(["", ""]);

	const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		setLoading(true);
		setIsAlert(true);
		sendEmail(formRef.current);
		setIsAlert(false);
		setLoading(false);
		setData(["", ""]);
	};

	return (
		<>
			<Head title='Contact' />
			<div className='md-[26rem] md:w-[38rem] mx-auto'>
				<div className='mt-16'>
					{isAlert && <Alert />}

					<h1 className='text-5xl md:text-6xl mb-6 font-black w-fit dark:border-gray-400 border-black'>
						<span className='text-emerald-600 dark:text-indigo-700'>
							Contact
						</span>{" "}
						Me!
					</h1>
					<form ref={formRef} onSubmit={handleSubmit} className=''>
						<div className='flex flex-col gap-2 mb-8'>
							<label className='text-sm' htmlFor='email'>
								Email
							</label>
							<input
								required
								id='email'
								type='email'
								name='email'
								maxLength={100}
								className='input'
								disabled={loading}
								placeholder='john@doe.com'
								onChange={(e) => setData([e.target.value, message])}
							/>
						</div>
						<div className='flex flex-col gap-2 mb-8'>
							<label className='text-sm' htmlFor='message'>
								Message
							</label>
							<textarea
								required
								id='message'
								name='message'
								maxLength={300}
								disabled={loading}
								className='input h-32 resize-none'
								placeholder='Nice website :)'
								onChange={(e) => setData([email, e.target.value])}
							/>
						</div>
						<div className='h-11'>
							<button type='submit' className='primary-btn' disabled={loading}>
								{loading ? <Loader /> : "Send"}
							</button>
						</div>
					</form>
				</div>
				<div className='pt-12'>
					<h1 className='text-sm text-center text-gray-600 dark:text-gray-300'>
						Powered by{" "}
						<Link
							href='https://www.emailjs.com'
							target='_blank'
							className='dark:text-indigo-600 text-emerald-700 hover:underline'
						>
							Email.js
						</Link>
					</h1>
				</div>
			</div>
		</>
	);
};

export default Contact;
