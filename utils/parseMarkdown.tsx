import { useEffect } from "react";
import { useRemark } from "react-remark";

export default function ParseMarkdown({ content }: any) {
	const [reactContent, setMarkdownSource] = useRemark();
	useEffect(() => {
		setMarkdownSource(content);
	}, [content, setMarkdownSource]);

	return reactContent;
}
