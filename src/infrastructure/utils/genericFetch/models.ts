import { HttpStatus } from '../../publicModels/HTTPStatuses';
import { RedirectRoutes } from '../../publicModels/navigatorTypes';

export interface ResponseDataModel<ResponseDataPayloadT> {
	message: string,
	payload: {
		data: ResponseDataPayloadT | null,
		redirect: RedirectRoutes | null,
	},
	status: HttpStatus
}