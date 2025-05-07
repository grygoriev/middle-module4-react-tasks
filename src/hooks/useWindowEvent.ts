import { useEffect } from 'react';

export function useWindowEvent<K extends keyof WindowEventMap>(
	type: K,
	listener: (this: Window, ev: WindowEventMap[K]) => unknown,
	options?: AddEventListenerOptions
) {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener(type, listener, options);
			return () => window.removeEventListener(type, listener, options);
		}
	}, [type, listener]);
}
