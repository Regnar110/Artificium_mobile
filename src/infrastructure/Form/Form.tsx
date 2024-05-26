import React from 'react';
import InputsContainer from './components/inputsContainer/InputsContainer';
import { FormContextProvider, FormThemeProvider } from './store/context/FormContexts';
import { FormType } from './store/redux/models/form.model';
import CustomButton from '../CustomButton/CustomButton';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import FormContainer from './components/FormContainer/FormContainer';
import formRepository from './store/repository/formRepo';
import Agreements from '../Agreements/Agreements';


const Form = ({
	formId,
	fields,
	hints,
	agreements,
	fieldLiveHints,
	optionalStyles,
	sharedFieldProps,
	onSubmitCallback,
	submitButtonText,
	isLoading = false,
	forgotPasswordRedirect = false, 
	rememberMeCheckbox = false,
}:FormType) => {

	const formContextValues = {
		forgotPasswordRedirect,
		rememberMeCheckbox,
		sharedFieldProps,
		fieldLiveHints,
		onSubmitCallback,
		submitButtonText,
		isLoading,
		hints,
		fields,
		formId
	};
	
	const formThemeValues = {
		optionalStyles
	};

	const submit = () => formRepository.submitValidation(formId, onSubmitCallback);
	
	return (
		<FormContextProvider value={formContextValues}>
			<FormThemeProvider value={formThemeValues}>
				<Provider store={store}>
					<FormContainer>
						<InputsContainer />
						{
							agreements && <Agreements
								parentFormId={formId}
								selectAllField={agreements.selectAllField}
								agreementFields={agreements.agreementFields}
							/>
						}
						<CustomButton callback={submit}/>	
					</FormContainer>
				</Provider>
			</FormThemeProvider>
		</FormContextProvider>
	
	);
};

export default Form;