import React, { ReactNode, useContext, useEffect } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { FormContext } from '../../store/context/FormContexts';
import { useDispatch } from 'react-redux';
import { enableHintWarnings } from '../../store/redux/reducers/fieldsHintWarningsSlice';
import { FieldsState } from '../../store/redux/models/actions.model';
import { initFields } from '../../store/redux/reducers/fieldsSlice';
import { ValidationPatterns } from '../../validationPatterns';

interface FormContainerType {
	children: ReactNode
}

const FormContainer = ({ children }:FormContainerType) => {
	const { fieldLiveHints, fields, hints } = useContext(FormContext);
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

	useEffect(() => {
		initializeStoreWithData();
	}, []);
	
	return (
		<View style={styles.form}>
			{ children }
		</View>
	);
};

export default FormContainer;
