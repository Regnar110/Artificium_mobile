import React, { useContext } from 'react';
import { FormContext } from '../../store/context/FormContexts';
import { Text } from 'react-native';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { getFormError } from '../../store/redux/reducers/formErrorsSlice';
import { RootState } from '../../store/redux/store';
const FormError = () => {
	const { formId } = useContext(FormContext);
	const formError = useSelector((state: RootState) => getFormError(state, formId));
	return formError && (
		<Text style={styles.formError}>{formError.clientMessage}</Text>
	);
};

export default FormError;
