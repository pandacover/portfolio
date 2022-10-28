import React, { useEffect, useState, useCallback, createContext } from "react";

type ContextType = {
	scrollY: number;
};

export const ScrollContext = createContext<ContextType>({ scrollY: 0 });

interface PropsType {
	children: React.ReactNode;
}

const ScrollObserver = ({ children }: PropsType) => {
	const [scrollY, setScrollY] = useState(0);
	const observe = useCallback(() => {
		setScrollY(window.scrollY);
	}, []);

	useEffect(() => {
		document.addEventListener("scroll", observe, { passive: true });
		return () => document.removeEventListener("scroll", observe);
	}, [observe]);

	return (
		<ScrollContext.Provider value={{ scrollY }}>
			{children}
		</ScrollContext.Provider>
	);
};

export default ScrollObserver;
