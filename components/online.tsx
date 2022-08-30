import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import Link from "next/link";

interface SocialInterface {
	id: string;
	name: string;
	icon: any;
	link: string;
}

type SocialType = Array<SocialInterface>;

const Social: SocialType = [
	{
		id: "-social-item-1",
		name: "@pandacover",
		icon: <FaGithub />,
		link: "https://github.com/pandacover",
	},
	{
		id: "-social-item-2",
		name: "@luvmakin",
		icon: <FaLinkedinIn />,
		link: "/",
	},
	{
		id: "-social-item-3",
		name: "@luvmakin",
		icon: <SiLeetcode />,
		link: "https://leetcode.com/luvmakin",
	},
];

const Online: React.FC = () => {
	return (
		<div className='pt-8'>
			<h1 className='text-xl font-bold tracking-wide border-b-4 border-zinc-500 w-fit'>
				Find me online
			</h1>
			<ul className='pt-4 flex flex-col gap-2'>
				{Social.map((item) => (
					<li key={item.id} className='pl-2 text-emerald-600 font-semibold'>
						<Link href={item.link}>
							<a
								target='_blank'
								className='flex items-center w-fit px-4 py-2 hover:bg-emerald-100 rounded-lg transition'
							>
								<span className='pr-2'>{item.icon}</span>
								<span>{item.name}</span>
							</a>
						</Link>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Online;
