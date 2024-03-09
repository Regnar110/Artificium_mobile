import React, { useContext } from 'react';
import { Text } from 'react-native';
import { useSelector } from 'react-redux';
import { FormInputContext } from '../../store/context/FormContexts';
import { getFieldHintIfExist } from '../../store/redux/reducers/fieldsHintWarningsSlice';
import { RootState } from '../../store/redux/store';
import { styles } from '../Input/styles';
import { getFieldErrors } from '../../store/redux/reducers/fieldsSubmitPatternsErrors';

interface InputFieldHintType {
	isFocused: boolean
}

const InputFieldHint = ({ isFocused }:InputFieldHintType) => {
	const { id } = useContext(FormInputContext);
	const hint = useSelector((state:RootState) => getFieldHintIfExist(state, id));
	const error = useSelector((state:RootState) => getFieldErrors(state, id));
	return (isFocused && hint && !error) && <Text style={styles.inputLiveHint}>{hint.message}</Text>;
};

export default InputFieldHint;
