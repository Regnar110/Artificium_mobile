import { InitFormTypePayload } from '../../infrastructure/Form/store/redux/models/actions.model';

export type SignInRequestBody = InitFormTypePayload;

export interface SignInRequestResponseData {
	formError: boolean,
	formId: string,
	clientMessage: string | null,
	jwt: string,
}

