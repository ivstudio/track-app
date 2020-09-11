export async function fetchData<T>(request: RequestInfo): Promise<T> {
	const res = await fetch(request);
	if (!res.ok) {
		throw new Error(res.statusText);
	}
	return res.json();
}
