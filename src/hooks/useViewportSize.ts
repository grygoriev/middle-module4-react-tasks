import { useCallback, useState } from 'react';
import { useWindowEvent } from './useWindowEvent';

interface ViewportSize {
	width: number;
	height: number;
}

export function useViewportSize() {
	const read = () => ({ width: window.innerWidth, height: window.innerHeight });

	const [size, setSize] = useState<ViewportSize>(read);

	useWindowEvent('resize', () => setSize(read));
	return size;
}
