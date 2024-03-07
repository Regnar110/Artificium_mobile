import React, { useContext } from 'react';
import { View, TextInput } from 'react-native';
import { FormContext, FormInputContext } from '../../store/context/FormContexts';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { singleFieldSelector, updateFieldValue } from '../../store/redux/reducers/fieldsSlice';
import { RootState } from '../../store/redux/store';

const Input = () => {
	const { id, iconRenderer, fieldSpecificProps } = useContext(FormInputContext);
	const dispatch = useDispatch();
	const storedField = useSelector((state:RootState) => singleFieldSelector(state, id));
	const { sharedFieldProps } = useContext(FormContext);

	return (
		<View id={id} style={styles.inputWrapper}>
			{ iconRenderer && iconRenderer()}
			<TextInput onChangeText={(value) => dispatch(updateFieldValue({id, value})) } value={storedField?.value} {...sharedFieldProps} {...fieldSpecificProps} style={styles.input}/>
		</View>
	);
};

export default Input;
