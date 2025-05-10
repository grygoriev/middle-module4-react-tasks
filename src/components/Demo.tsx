import { useViewportSize } from '../hooks';

export function Demo() {
	const { height, width } = useViewportSize();

	return (
		<>
			Width: {width}, height: {height}
		</>
	);
}
