import Link from "next/link";
import { useRouter } from "next/router";

type propsType = {
	href: string;
	children: React.ReactNode;
};

export default function NavLink({ href, children }: propsType) {
	const router = useRouter();

	return (
		<Link
			href={href}
			className={
				router.asPath.includes(href)
					? "nav-link mr-2 text-[#111] dark:text-white"
					: "nav-link mr-2 text-[#666] dark:text-gray-400"
			}
		>
			{children}
		</Link>
	);
}
