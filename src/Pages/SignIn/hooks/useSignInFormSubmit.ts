import { useState } from 'react';
import { OnSubmitCallback } from '../../../infrastructure/Form/store/redux/models/form.model';
import { HttpStatus } from '../../../infrastructure/publicModels/HTTPStatuses';
import { genericFetch } from '../../../infrastructure/utils/genericFetch/genericFetch';
import { SignInRequestBody, SignInRequestResponseData } from '../signIn.model';
import { useTypedNavigation } from '../../../infrastructure/hooks/useTypedNavigation';
import { SecureStoreWorker } from '../../../secureStore/SecureStore';


export const useSignInFormSubmit = () => {
	const [ isWaiting, setIsWaiting ] = useState<boolean>(false);
	const { navigate } = useTypedNavigation();

	const submitSignIn:OnSubmitCallback = async ({ formData, isValid, triggerFormErrors, clearErrors }) => {
		if (!isValid) return;
		setIsWaiting(true);
		console.log(formData)
		const response = await genericFetch<SignInRequestBody, SignInRequestResponseData>('http://192.168.0.171:3000/user/signin', 'POST', formData);
		if (response.status === HttpStatus.UNAUTHORIZED) {
			triggerFormErrors(response.payload.data);
			setIsWaiting(false);
			return;
		} 
		clearErrors(formData.formId);
		setIsWaiting(false);
		
		if (response.payload.redirect) {
			if (!response.payload.data.jwt) return;
			
			await SecureStoreWorker.save('artificium_session', response.payload.data.jwt);
			navigate(response.payload.redirect);
		}
	};

	return { isWaiting, submitSignIn };
};