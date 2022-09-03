type ListType = {
	id: string;
	date: string;
	details: string;
};

const BioList: ListType[] = [
	{ id: "-bio-item-1", date: "2001", details: "Born to my parents" },
	{
		id: "-bio-item-2",
		date: "2019",
		details:
			"Graduated my highschool from Cambrian Hall in Dehradun, Uttarakhand, India",
	},
	{
		id: "-bio-item-3",
		date: "2019 to present",
		details:
			"Pursuing my Computer Science degree from Chitkara University, Punjab, India",
	},
];

const Bio = () => {
	return (
		<div className='pt-8'>
			<h1 className='text-xl font-bold tracking-wide border-b-4 border-zinc-500 w-fit'>
				Bio
			</h1>
			<ul className='pt-4'>
				{BioList.map((item) => (
					<li key={item.id} className='pb-4'>
						<span className='font-bold pr-4'>{item.date}</span>
						<span>{item.details}</span>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Bio;
