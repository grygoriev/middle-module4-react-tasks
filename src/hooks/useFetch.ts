import { useCallback, useEffect, useState } from 'react';

type QueryParams = Record<string, string | number | boolean>;

export interface RefetchOptions {
	params?: QueryParams;
}

export interface UseFetchOptions<T> {
	data: T | null;
	isLoading: boolean;
	error: Error | null;
	refetch: (options?: RefetchOptions) => void;
}

export function useFetch<T = unknown>(
	url: string,
	initialParams: QueryParams = {},
): UseFetchOptions<T> {
	const [data, setData] = useState<T | null>(null);
	const [error, setError] = useState<Error | null>(null);
	const [isLoading, setIsLoading] = useState<boolean>(false);

	const urlWithParams = (base: string, params?: QueryParams) =>
		!params || !Object.keys(params).length
			? base
			: `${base}?${new URLSearchParams(
					Object.entries(params).map(([k, v]) => [k, String(v)]),
				)}`;

	const fetchData = useCallback(
		async (options: RefetchOptions = {}) => {
			setIsLoading(true);
			setError(null);
			try {
				const res = await fetch(urlWithParams(url, options?.params));
				if (!res.ok) throw new Error('HTTP ' + res.status);
				const json: T = await res.json();
				setData(json);
			} catch (error) {
				setError(error instanceof Error ? error : new Error(String(error)));
			} finally {
				setIsLoading(false);
			}
		},
		[url],
	);

	useEffect(() => {
		fetchData({ params: initialParams });
	}, [fetchData]);

	const refetch = useCallback(
		(options?: RefetchOptions) => {
			fetchData(options);
		},
		[fetchData],
	);

	return { data, isLoading, error, refetch };
}
