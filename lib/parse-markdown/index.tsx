import { useRemark } from "react-remark";
import { useEffect } from "react";

type componentProps = {
	content: string;
};

export default function useParseMarkdown({ content }: componentProps) {
	const [markdown, setMarkdown] = useRemark();

	useEffect(() => {
		setMarkdown(content);
	}, [content, setMarkdown]);

	return markdown;
}
