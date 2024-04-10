import React, { ReactNode, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { FormContext } from '../../store/context/FormContexts';
import { useDispatch } from 'react-redux';
import { enableHintWarnings } from '../../store/redux/reducers/fieldsHintWarningsSlice';
import { FormState } from '../../store/redux/models/actions.model';
import { initFields } from '../../store/redux/reducers/fieldsSlice';
import { ValidationPatterns } from '../../validationPatterns';
import { useFocusEffect } from '@react-navigation/native';

interface FormContainerType {
	children: ReactNode
}

const FormContainer = ({ children }:FormContainerType) => {
	const { fieldLiveHints, fields, hints, formId } = useContext(FormContext);
	const dispatch = useDispatch();

	const prepareFieldsToStore = () => {
		const preparedFields:FormState = {
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
			const enchancedHints:Array<{ id: keyof typeof ValidationPatterns, message:string, visible:boolean}> = [];
			hints.forEach(hint => {
				enchancedHints.push({...hint, visible: false});
			});
			dispatch(enableHintWarnings({enabled: fieldLiveHints, fieldsHints: enchancedHints}));
		}
	};

	useFocusEffect(() => {
		initializeStoreWithData();

		return () => console.log('UNFOCUS')
	});
	
	return (
		<View style={styles.form}>
			{ children }
		</View>
	);
};

export default FormContainer;
