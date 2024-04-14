import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { FormContext, FormInputContext } from '../../store/context/FormContexts';
import { getFieldHintIfExist } from '../../store/redux/reducers/fieldsHintWarningsSlice';
import { RootState } from '../../store/redux/store';
import { styles } from '../Input/styles';
import { getFieldErrors } from '../../store/redux/reducers/fieldsSubmitPatternsErrors';

interface InputFieldHintType {
	isFocused: boolean
}

const InputFieldHint = ({ isFocused }:InputFieldHintType) => {
	const { id } = useContext(FormInputContext);
	const { formId } = useContext(FormContext);
	const hint = useSelector((state:RootState) => getFieldHintIfExist(state, { id, formId }));
	const error = useSelector((state:RootState) => getFieldErrors(state, id));
	return (isFocused && hint && !error) && <Text style={styles.inputLiveHint}>{hint.message}</Text>;
};

export default InputFieldHint;
