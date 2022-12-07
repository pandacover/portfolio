import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "public", "blogs");

export const getSortedPostsData = () => {
	const fileNames = fs.readdirSync(postsDirectory);
	const everyPostsData = fileNames.map((fileName) => {
		const id = fileName.replace(/\.md$/, "");
		const fullPath = path.join(postsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		const matterResult = matter(fileContents);
		return {
			id,
			...matterResult.data,
		};
	});
	return everyPostsData.sort(
		(
			{ date: a }: { [key: string]: string },
			{ date: b }: { [key: string]: string }
		) => {
			if (a < b) return 1;
			if (a > b) return -1;
			return 0;
		}
	);
};

export const getPostsId = () => {
	const fileNames = fs.readdirSync(postsDirectory);

	return fileNames.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
};

export const getPostData = (id: string) => {
	const fullPath = path.join(postsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath);

	const matterResult = matter(fileContents);
	const content = matterResult.content;

	return {
		id,
		content,
		...matterResult.data,
	};
};
