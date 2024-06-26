import React, { useContext, useState } from 'react';
import { View, TextInput } from 'react-native';
import { FormContext, FormInputContext } from '../../store/context/FormContexts';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { singleFieldSelector, updateFieldValue } from '../../store/redux/reducers/fieldsSlice';
import { RootState } from '../../store/redux/store';
import InputFieldHint from '../InputFieldHint/InputFieldHint';
import InputFieldError from '../inputFieldError/InputFieldError';

const Input = () => {

	const dispatch = useDispatch();
	const { sharedFieldProps, formId } = useContext(FormContext);
	const { id, iconRenderer, fieldSpecificProps } = useContext(FormInputContext);
	const storedField = useSelector((state:RootState) => singleFieldSelector(state, id, formId));
	const [ isFocused, setIsFocused ] = useState(false);
	const changeFocusState = () => setIsFocused(!isFocused);

	const handleInputValueChange = (value: string) => {
		dispatch(updateFieldValue({targetFormId: formId,  fieldPayload: {id, value} }));
	};

	return (
		<View id={id}>
			<View style={styles.inputWrapper}>
				{ iconRenderer && iconRenderer()}
				<TextInput
					onFocus={changeFocusState}
					onBlur={changeFocusState}
					onChangeText={handleInputValueChange}
					value={storedField?.value}
					{...sharedFieldProps}
					{...fieldSpecificProps}
					style={styles.input}
				/>
			</View>
			<InputFieldHint isFocused={isFocused} />
			<InputFieldError />
		</View>
	);
};

export default Input;
