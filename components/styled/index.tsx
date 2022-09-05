type PropsType = {
	children: React.ReactNode;
	classname?: string;
};

export function H1({ children, classname = "" }: PropsType) {
	return (
		<h1 className={`text-black dark:text-rose-50 ${classname}`}>{children}</h1>
	);
}

export function H2({ children, classname = "" }: PropsType) {
	return (
		<h2 className={`text-black dark:text-rose-50 ${classname}`}>{children}</h2>
	);
}

export function P({ children, classname = "" }: PropsType) {
	return (
		<p className={`text-black dark:text-rose-100 ${classname}`}>{children}</p>
	);
}
