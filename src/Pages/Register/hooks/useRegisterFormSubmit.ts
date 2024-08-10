import { useState } from 'react';
import { OnSubmitCallback } from '../../../infrastructure/Form/store/redux/models/form.model';
import { HttpStatus } from '../../../infrastructure/publicModels/HTTPStatuses';
import { genericFetch } from '../../../infrastructure/utils/genericFetch/genericFetch';
import { RegisterRequestBody, RegisterResponseDataTypeWithFieldErrors } from '../register.model';
import { useTypedNavigation } from '../../../infrastructure/hooks/useTypedNavigation';


export const useRegisterFormSubmit = () => {
	const [ isWaiting, setIsWaiting ] = useState<boolean>(false);
	const { navigate } = useTypedNavigation();

	const submitRegister:OnSubmitCallback = async ({formData, isValid, agreementsValidationData, triggerErrorOnField, clearErrors }) => {
		console.log(formData)
		if (!isValid) return null;
		setIsWaiting(true);
		const mixedFormAndAgreements = { ...formData, agreementFields: agreementsValidationData };
		const response = await genericFetch<RegisterRequestBody, RegisterResponseDataTypeWithFieldErrors>('http://192.168.0.244:3000/user/register', 'POST', mixedFormAndAgreements);
		setIsWaiting(false);
		if (response.status === HttpStatus.CONFLICT && response.payload.data) {
			const { field, clientMessage, formId } = response.payload.data;
			
			if (!field || !clientMessage) return;
			triggerErrorOnField({ field, clientMessage, formId});
			return response.payload.data;
		} 
		if (response.payload.redirect) {
			navigate(response.payload.redirect);
			clearErrors(formData.formId);
		}
	};

	return { isWaiting, submitRegister };
};