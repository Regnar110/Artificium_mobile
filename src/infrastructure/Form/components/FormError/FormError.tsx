import React, { useContext } from 'react'
import { FormContext } from '../../store/context/FormContexts'
import { Text } from 'react-native';
import { styles } from './styles';
const FormError = () => {

	const { enableFormError, defaultFormError } = useContext(FormContext);
	return (enableFormError && defaultFormError) && (
		<Text style={styles.formError}>{defaultFormError}</Text>
	);
};

export default FormError;
