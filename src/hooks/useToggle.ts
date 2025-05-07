import { useCallback, useMemo, useReducer } from 'react';

type ToggleAction<T> = { type: 'cycle' } | { type: 'set'; value: T };

function toggleReducer<T>(state: number, action: ToggleAction<T>, list: T[]) {
	switch (action.type) {
		case 'cycle':
			return (state + 1) % list.length;
		case 'set': {
			const i = list.indexOf(action.value);
			return i === -1 ? state : i;
		}
	}
}

export function useToggle<T = boolean>(values?: T[]): [T, (next?: T) => void] {
	const list = useMemo<T[]>(() => {
		if (Array.isArray(values) && values.length) return values;
		return [false as unknown as T, true as unknown as T];
	}, [values]);

	const [index, dispatch] = useReducer(
		(state: number, action: ToggleAction<T>) => toggleReducer(state, action, list),
		0,
	);

	const toggle = useCallback(
		(next?: T) => {
			if (next !== undefined) {
				dispatch({ type: 'set', value: next });
			} else {
				dispatch({ type: 'cycle' });
			}
		},
		[dispatch],
	);

	return [list[index], toggle];
}
