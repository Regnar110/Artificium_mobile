import { useState } from 'react';
import { OnSubmitCallback } from '../../../infrastructure/Form/store/redux/models/form.model';
import { HttpStatus } from '../../../infrastructure/publicModels/HTTPStatuses';
import { genericFetch } from '../../../infrastructure/utils/genericFetch/genericFetch';
import { InitFormTypePayload } from '../../../infrastructure/Form/store/redux/models/actions.model';


export const useSignInFormSubmit = () => {
	const [ isWaiting, setIsWaiting ] = useState<boolean>(false);

	const submitSignIn:OnSubmitCallback = async ({ formData, isValid, triggerFormErrors, clearErrors }) => {
		if (!isValid) return;
		const response = await genericFetch<InitFormTypePayload, unknown>('http://192.168.0.244:3000/user/signin', 'POST', formData);
		if (response.status === HttpStatus.UNAUTHORIZED) {
			triggerFormErrors(response);
		} 
		clearErrors(formData.formId);
	};

	return { isWaiting, submitSignIn };
};