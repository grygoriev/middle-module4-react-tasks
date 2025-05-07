import { useCallback, useState } from 'react';

export function useHover<T extends HTMLElement = HTMLElement>() {
	const [hovered, setHovered] = useState(false);

	const ref = useCallback((node: T | null) => {
		if (!node) return;

		const enter = () => setHovered(true);
		const leave = () => setHovered(false);

		node.addEventListener('mouseenter', enter);
		node.addEventListener('mouseleave', leave);

		return () => {
			node.removeEventListener('mouseenter', enter);
			node.removeEventListener('mouseleave', leave);
		};
	}, []);

	return { hovered, ref };
}
