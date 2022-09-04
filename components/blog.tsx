type PropsType = {
	title: string;
	subtitle?: string[];
	content?: string[];
	image?: string[];
};

export default function Blogs({
	title = "Title",
	subtitle = ["Subtitle"],
	content = ["content"],
	image = ["image"],
}: PropsType) {
	return (
		<article className='prose lg:prose-xl'>
			<h1>{title}</h1>
			{subtitle.map((item: string, idx: number) => (
				<section key={idx}>
					<h2 className='underline'>{item}</h2>
					<p>{content[idx]}</p>
				</section>
			))}
		</article>
	);
}
