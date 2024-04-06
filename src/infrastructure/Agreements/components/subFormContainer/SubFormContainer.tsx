import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Agreement } from '../../agreements.model';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import { COLORS } from '../../../enums';
import { useDispatch, useSelector } from 'react-redux';
import { getAgreementFieldState, selectAllFields, setOppositeValueOnAgreementField } from '../../store/redux/reducers/agreementsFieldsSlice';
import { RootState } from '../../store/redux/store';

const AgreementField = ({ id, required, textNode, agreementChangeHandler }:Agreement) => {
	const dispatch = useDispatch();
	const fieldState = useSelector((state:RootState) => getAgreementFieldState(state, id));

	const changeAgreementState = (cs) => {
		if (id === 'selectAll') {
			dispatch(selectAllFields(cs));
		} else {
			dispatch(setOppositeValueOnAgreementField(id));
		}
		(agreementChangeHandler && typeof fieldState !== 'undefined') && agreementChangeHandler(id, fieldState);
	};
	
	return (
		<View style={styles.fieldWrapper}>
			<CustomCheckbox isChecked={fieldState!} callback={changeAgreementState}/>
			{ textNode() }
			{required && <Text style={{color:COLORS.SUNGLOW_400, fontSize: 12}}>{' *'}</Text>}
		</View>
	);
};

export default AgreementField;
