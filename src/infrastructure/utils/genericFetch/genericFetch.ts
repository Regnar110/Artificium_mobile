import { AuthorizationService } from '../../../Repositories/AuthorizationService';
import { ResponseDataModel } from './models';

type FetchMethods = 'GET' | 'POST' | 'DELETE' | 'PUT';

export const genericFetch = async <BodyT, ResponseT>(url: string, method:FetchMethods, body?: BodyT ): Promise<ResponseDataModel<ResponseT>> => {
	const token = await AuthorizationService.getUserTokenIfExist();
	const promise = await fetch(url, {
		method, // *GET, POST, PUT, DELETE, etc.
		mode: 'no-cors',
		headers: {
			'Authorization': `Bearer ${token}`,
			'Content-Type': 'application/json',
		},
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: JSON.stringify(body), 
	});
	return await promise.json();
};