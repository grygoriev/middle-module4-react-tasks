import { useToggle } from '../hooks/useToggle';

export function Demo() {
	const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

	return <button onClick={() => toggle()}>{value}</button>;
}
