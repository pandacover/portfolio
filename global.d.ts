export {};

declare global {
	type PostType = {
		id: string;
		title: string;
		date: string;
		author: string;
		excerpt: string;
		imgSrc: string;
		content: string;
	};
}
