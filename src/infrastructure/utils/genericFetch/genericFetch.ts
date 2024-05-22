import { ResponseDataModel } from './models';

type FetchMethods = 'GET' | 'POST' | 'DELETE' | 'PUT';

export const genericFetch = async <BodyT, ResponseT>(url: string, method:FetchMethods, body: BodyT ): Promise<ResponseDataModel<ResponseT>> => {
	const promise = await fetch(url, {
		method, // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors',
		headers: {
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(body), 
	});
	return await promise.json();
};