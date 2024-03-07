import React, { useContext, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { FormContext, FormInputProvider } from '../../store/context/FormContexts';
import Input from '../Input/Input';
import { initFields } from '../../store/redux/reducers/fieldsSlice';
import { useDispatch } from 'react-redux';
import { FieldsState } from '../../store/redux/models/actions.model';

const InputsContainer = () => {
	const { fields } = useContext(FormContext);
	const dispatch = useDispatch();

	const prepareFieldsToStore = () => {
		const preparedFields:FieldsState = {};
		for(const field of fields) {
			preparedFields[field.id] = {
				id: field.id,
				value: ''
			};
		}
		return preparedFields;
	};

	useEffect(() => {
		const initialStoreFields = prepareFieldsToStore();
		dispatch(initFields(initialStoreFields));
	},[fields]);

	return (
		<View style={styles.inputsContainer}>
			{
				fields.map(({id}, index) => (
					<FormInputProvider key={`${id}_${index}`} value={{...fields[index]}}>
						<Input />	
					</FormInputProvider>	
				))
			}
		</View>
	);
};

export default InputsContainer;

const styles = StyleSheet.create({
	inputsContainer: {
		gap: 15,
	},
});
