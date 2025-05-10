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
		localStorage.getItem(key)
	);

	const setItem = useCallback(
		(newValue: LocalStorageSetValue) => {
			localStorage.setItem(key, newValue);
			setValue(newValue);
		},
		[key],
	);

	const removeItem = useCallback(() => {
		localStorage.removeItem(key);
		setValue(null);
	}, [key]);

	return [value, { setItem, removeItem }];
};
