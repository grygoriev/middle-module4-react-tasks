import { useCallback, useState } from 'react';

type LocalStorageSetValue = string;
type LocalStorageReturnValue = LocalStorageSetValue | null;

type UseLocalStorage = (key: string) => [
	value: LocalStorageReturnValue,
	{
		setItem: (value: LocalStorageSetValue) => void;
		removeItem: () => void;
	},
];

export const useLocalStorage: UseLocalStorage = (key) => {
	const [value, setValue] = useState<LocalStorageReturnValue>(
		localStorage.getItem(key),
	);

	const setItem = useCallback(
		(v: LocalStorageSetValue) => {
			localStorage.setItem(key, v);
			setValue(v);
		},
		[key],
	);

	const removeItem = useCallback(() => {
		localStorage.removeItem(key);
		setValue(null);
	}, [key]);

	return [value, { setItem, removeItem }];
};
