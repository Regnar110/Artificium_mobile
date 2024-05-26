import React, { ReactNode, useContext } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { FormContext } from '../../store/context/FormContexts';
import { useDispatch } from 'react-redux';
import { enableHintWarnings } from '../../store/redux/reducers/fieldsHintWarningsSlice';
import { InitFormTypePayload } from '../../store/redux/models/actions.model';
import { initFields } from '../../store/redux/reducers/fieldsSlice';
import { useFocusEffect } from '@react-navigation/native';
import { StateStoredHint } from '../../store/redux/models/form.model';
interface FormContainerType {
	children: ReactNode
}

const FormContainer = ({ children }:FormContainerType) => {
	const { fieldLiveHints, fields, hints, formId } = useContext(FormContext);
	const dispatch = useDispatch();

	const prepareFieldsToStore = () => {
		const preparedFields:InitFormTypePayload = {
			formId,
			fields: {}
		};
		for(const field of fields) {
			preparedFields.fields[field.id] = {
				id: field.id,
				value: ''
			};
		}
		return preparedFields;
	};
	
	const initializeStoreWithData = () => {
		const initialStoreFields = prepareFieldsToStore();
		dispatch(initFields(initialStoreFields));
		if( fieldLiveHints && hints){
			const enchancedHints:Array<StateStoredHint> = [];
			hints.forEach(hint => {
				enchancedHints.push({...hint, visible: false});
			});
			dispatch(enableHintWarnings({formId, enabled: fieldLiveHints, hints: enchancedHints}));
		}
	};

	useFocusEffect(() => {
		initializeStoreWithData();
	});
	
	return (
		<View style={styles.form}>
			{ children }
		</View>
	);
};

export default FormContainer;
