import React, { useContext } from 'react';
import { View, TextInput, Text } from 'react-native';
import { FormContext, FormInputContext } from '../../store/context/FormContexts';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { singleFieldSelector, updateFieldValue } from '../../store/redux/reducers/fieldsSlice';
import { RootState } from '../../store/redux/store';
import { getWarningIfExists } from '../../store/redux/reducers/fieldsHintWarningsSlice';

const Input = () => {
	const { id, iconRenderer, fieldSpecificProps } = useContext(FormInputContext);
	const dispatch = useDispatch();
	const storedField = useSelector((state:RootState) => singleFieldSelector(state, id));
	const warning = useSelector((state:RootState) => getWarningIfExists(state, id));
	const { sharedFieldProps } = useContext(FormContext);

	return (
		<View id={id}>
			<View style={styles.inputWrapper}>
				{ iconRenderer && iconRenderer()}
				<TextInput onChangeText={(value) => dispatch(updateFieldValue({id, value})) } value={storedField?.value} {...sharedFieldProps} {...fieldSpecificProps} style={styles.input}/>
			</View>
		
			{ warning && <Text style={styles.inputLiveHint}>{ warning.message }</Text> }
		</View>
	);
};

export default Input;
