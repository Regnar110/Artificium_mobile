import { useState } from 'react';
import { OnSubmitCallback } from '../../../infrastructure/Form/store/redux/models/form.model';
import { HttpStatus } from '../../../infrastructure/publicModels/HTTPStatuses';
import { genericFetch } from '../../../infrastructure/utils/genericFetch/genericFetch';
import { InitFormTypePayload } from '../../../infrastructure/Form/store/redux/models/actions.model';


export const useSignInFormSubmit = () => {
	const [ isWaiting, setIsWaiting ] = useState<boolean>(false);

	const submitSignIn:OnSubmitCallback = async (formData, formValidationResult, isValid) => {
		if (!isValid) return;
		console.log(formData)
		const response = await genericFetch<InitFormTypePayload, unknown>('http://192.168.0.244:3000/user/signin', 'POST', formData);
		if (response.status === HttpStatus.UNAUTHORIZED) {
			console.log('UNAUTHORIZED');
		} 
		return 'OK';
	};

	return { isWaiting, submitSignIn };
};