import React, { useEffect, useState, useCallback, createContext } from "react";

type ObserveType = {
	scrollY?: number;
	children?: React.ReactNode;
};

export const ScrollContext = createContext<ObserveType>({ scrollY: 0 });

interface Props {
	children: React.ReactNode;
}

const ScrollObserver = ({ children }: ObserveType) => {
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
