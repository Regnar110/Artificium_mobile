import React, { useEffect } from 'react';
import CheckBlack from '../../../../public/svg/checkBlack.svg';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Agreement } from '../../agreements.model';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import { COLORS } from '../../../enums';
import { useDispatch, useSelector } from 'react-redux';
import { getAgreementFieldState, getAgreementFields, selectAllFields, setOppositeValueOnAgreementField } from '../../store/redux/reducers/agreementsFieldsSlice';
import { RootState } from '../../store/redux/store';

const AgreementField = ({ id, required, textNode, agreementChangeHandler }:Agreement) => {
	const dispatch = useDispatch();
	const fieldState = useSelector((state:RootState) => getAgreementFieldState(state, id));
	const fieldsSt = useSelector((state:RootState) => getAgreementFields(state));
	console.log(fieldsSt)

	const changeAgreementState = () => {
		if (id === 'selectAll') {
			dispatch(selectAllFields(!fieldState));
		} else {
			dispatch(setOppositeValueOnAgreementField(id));
		}
		(agreementChangeHandler && typeof fieldState !== 'undefined') && agreementChangeHandler(id, fieldState);
	};
	
	return (
		<View style={styles.fieldWrapper}>
			<CustomCheckbox iconRenderer={() => <CheckBlack width={12} height={12} />} isChecked={fieldState!} callback={changeAgreementState}/>
			{ textNode() }
			{required && <Text style={{color:COLORS.SUNGLOW_400, fontSize: 12}}>{' *'}</Text>}
		</View>
	);
};

export default AgreementField;
