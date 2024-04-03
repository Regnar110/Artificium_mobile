import React from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Agreement } from '../../agreements.model';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import { COLORS } from '../../../enums';
import { useDispatch } from 'react-redux';
import { setOppositeValueOnAgreementField } from '../../store/redux/reducers/agreementsFieldsSlice';

const AgreementField = ({ id, required, textNode, agreementChangeHandler }:Agreement) => {
	const dispatch = useDispatch();

	const changeAgreementState = () => {
		dispatch(setOppositeValueOnAgreementField(id))
	}
	return (
		<View style={styles.fieldWrapper}>
			<CustomCheckbox callback={changeAgreementState}/>
			{ textNode() }
			{required && <Text style={{color:COLORS.SUNGLOW_400, fontSize: 12}}>{' *'}</Text>}
		</View>
	);
};

export default AgreementField;
