import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FormContext, FormInputContext } from '../../store/context/FormContexts';
import { getFieldErrors } from '../../store/redux/reducers/fieldsSubmitPatternsErrors';
import { RootState } from '../../store/redux/store';
import { styles } from '../Input/styles';
import { Text } from 'react-native';
import { getFieldAfterRequestError } from '../../store/redux/reducers/errorsOnRequestSlice';

const InputFieldError = () => {
	const { id, patternError } = useContext(FormInputContext);
	const { formId } = useContext(FormContext);
	const error = useSelector((state:RootState) => getFieldErrors(state, formId, id));
	const afterRequestError = useSelector((state: RootState) => getFieldAfterRequestError(state, formId, id));
	const predicateError = () => {
		const selectedError = error ? patternError && patternError : afterRequestError;
		
		return selectedError && <Text style={styles.inputFieldSubmitError}>{selectedError}</Text>;
	};

	return predicateError();
};

export default InputFieldError;
