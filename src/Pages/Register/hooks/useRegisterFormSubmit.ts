import React, { useState } from 'react';
import { OnSubmitCallback } from '../../../infrastructure/Form/store/redux/models/form.model';
import { HttpStatus } from '../../../infrastructure/publicModels/HTTPStatuses';
import { genericFetch } from '../../../infrastructure/utils/genericFetch/genericFetch';
import { RegisterRequestBody, RegisterResponseDataTypeWithFieldErrors } from '../register.model';
import { useNavigation } from '@react-navigation/native';


export const useRegisterFormSubmit = () => {
	const [ isWaiting, setIsWaiting ] = useState<boolean>(false);
	const { navigate } = useNavigation();

	const submitRegister:OnSubmitCallback = async (formData, formValidationResult, isValid, agreementsValidatedData) => {
		if (!isValid) return null;
		setIsWaiting(true);
		const mixedFormAndAgreements = { ...formData, agreementFields: agreementsValidatedData! };
		const response = await genericFetch<RegisterRequestBody, RegisterResponseDataTypeWithFieldErrors>('http://192.168.0.244:3000/user/register', 'POST', mixedFormAndAgreements);
		setIsWaiting(false);
		if (response.status === HttpStatus.CONFLICT) {
			return response.payload.data;
		} 
		if (response.payload.redirect) {
			/**
			 * @TODO - type naviagate hook callback
			 */
			navigate(response.payload.redirect);
		}
		return 'OK';
	};

	return { isWaiting, submitRegister };
}