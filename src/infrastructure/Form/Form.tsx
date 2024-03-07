import React from 'react';
import { StyleSheet, View } from 'react-native';
import InputsContainer from './components/inputsContainer/InputsContainer';
import { FormContextProvider, FormThemeProvider } from './store/context/FormContexts';
import { FormType } from './form.model';
import SubFormContainer from './components/subFormContainer/SubFormContainer';
import CustomButton from '../CustomButton/CustomButton';
import { Provider } from 'react-redux';
import { store } from './store/redux/store';
import { FieldValueUpdateType } from './store/redux/models/actions.model';

const Form = ({ 
	fields,
	onSubmit,
	optionalStyles,
	sharedFieldProps,
	forgotPasswordRedirect = false, 
	rememberMeCheckbox = false,
}:FormType) => {

	const formContextValues = {
		forgotPasswordRedirect,
		rememberMeCheckbox,
		sharedFieldProps,
		onSubmit,
		fields,
	};
	
	const formThemeValues = {
		optionalStyles
	};

	const formSubmit = () => {
		const storedFieldDatas = store.getState().fields;
		const fieldsArray:FieldValueUpdateType[] = Object.values(storedFieldDatas);
		console.log(fieldsArray);
		return fieldsArray;
	};
	
	return (
		<FormContextProvider value={formContextValues}>
			<FormThemeProvider value={formThemeValues}>
				<Provider store={store}>
					<View style={styles.form}>
						<InputsContainer />
						<SubFormContainer />
						<CustomButton callback={formSubmit}/>
					</View>								
				</Provider>
			</FormThemeProvider>
		</FormContextProvider>
	
	);
};

export default Form;

const styles = StyleSheet.create({
	form: {
		width: '100%',
		gap: 35,
	},
});
