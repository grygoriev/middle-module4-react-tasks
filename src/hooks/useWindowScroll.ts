import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

interface ScrollPosition {
	x: number;
	y: number;
}

interface ScrollToArgs {
	x?: number;
	y?: number;
}

export function useWindowScroll():[
	ScrollPosition,
	(args: ScrollToArgs) => void
] {
	const read = (): ScrollPosition =>
		typeof window === 'undefined'
			? { x: 0, y: 0 }
			: { x: window.scrollX, y: window.scrollY };

	const [scroll, setPos] = useState<ScrollPosition>(read);

	useWindowEvent('scroll', () => setPos(read));

	const scrollTo = useCallback(
		({ x, y }: ScrollToArgs = {}) => {
			if (typeof window === 'undefined') return;

			window.scrollTo({
				left: x ?? window.scrollX,
				top: y ?? window.scrollY,
			});

			setPos({
				x: x ?? window.scrollX,
				y: y ?? window.scrollY,
			});
		},
		[]
	);

	return [scroll, scrollTo]
}
