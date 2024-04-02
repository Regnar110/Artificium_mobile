import React from 'react';
import InputsContainer from './components/inputsContainer/InputsContainer';
import { FormContextProvider, FormThemeProvider } from './store/context/FormContexts';
import { FormType } from './form.model';
import SubFormContainer from './components/subFormContainer/SubFormContainer';
import CustomButton from '../CustomButton/CustomButton';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import FormContainer from './components/FormContainer/FormContainer';
import formRepository from './store/repository/formRepo';


const Form = ({
	fields,
	hints,
	fieldLiveHints,
	optionalStyles,
	sharedFieldProps,
	onSubmitCallback,
	submitButtonText,
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
		hints,
		fields,
	};
	
	const formThemeValues = {
		optionalStyles
	};

	const submit = () => formRepository.submitValidation(onSubmitCallback);
	
	return (
		<FormContextProvider value={formContextValues}>
			<FormThemeProvider value={formThemeValues}>
				<Provider store={store}>
					<FormContainer>
						<InputsContainer />
						<SubFormContainer />
						<CustomButton callback={submit}/>	
					</FormContainer>
				</Provider>
			</FormThemeProvider>
		</FormContextProvider>
	
	);
};

export default Form;