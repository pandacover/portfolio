const BounceVariant = {
	initial: { opacity: "0", y: "-100%" },
	animate: {
		opacity: "1",
		y: "0",
		transition: { delay: 0.1 },
	},
};

const PopUpVariant = {
	hidden: { opacity: 0, scale: 0 },
	visible: { opacity: 1, scale: 1 },
};

export default function Variant(type: string) {
	return type === "bounce" ? BounceVariant : PopUpVariant;
}
