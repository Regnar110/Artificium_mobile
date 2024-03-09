import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { FormInputContext } from '../../store/context/FormContexts';
import { getFieldErrors } from '../../store/redux/reducers/fieldsSubmitPatternsErrors';
import { RootState } from '../../store/redux/store';
import { styles } from '../Input/styles';
import { Text } from 'react-native';

const InputFieldError = () => {
	const { id, patternError } = useContext(FormInputContext);
	const error = useSelector((state:RootState) => getFieldErrors(state, id));
	return error && <Text style={styles.inputFieldSubmitError}>{patternError}</Text>;
};

export default InputFieldError;
