import React, { useContext } from 'react';
import CheckBlack from '../../../../public/svg/checkBlack.svg';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { Agreement } from '../../agreements.model';
import CustomCheckbox from '../../../CustomCheckbox/CustomCheckbox';
import { COLORS } from '../../../enums';
import { useDispatch, useSelector } from 'react-redux';
import { getAgreementFieldState, selectAllFields, setOppositeValueOnAgreementField } from '../../store/redux/reducers/agreementsFieldsSlice';
import { RootState } from '../../store/redux/store';
import { AgreementsPropsContext } from '../../store/context/AgreementsContext';
import { getFormAgreementsErrors } from '../../store/redux/reducers/agreementsFieldsErrorsSlice';

const AgreementField = ({ id, required, textNode, agreementChangeHandler }:Agreement) => {
	const { parentFormId } = useContext(AgreementsPropsContext);
	const dispatch = useDispatch();
	const fieldState = useSelector((state:RootState) => getAgreementFieldState(state, parentFormId, id));
	const agreementFieldsValidationErrors = useSelector((state:RootState) => getFormAgreementsErrors(state, parentFormId));
	const changeAgreementState = () => {
		if (id === 'selectAll') {
			dispatch(selectAllFields({ parentFormId, checked: !fieldState }));
		} else {
			dispatch(setOppositeValueOnAgreementField({ parentFormId, id }));
		}
		(agreementChangeHandler && typeof fieldState !== 'undefined') && agreementChangeHandler(id, fieldState);
	};
	const isFieldInvalid = agreementFieldsValidationErrors?.some(field => field.agreementField === id);
	return (
		<>
			<View style={styles.fieldOuterContainer}>
				<View style={styles.fieldWrapper}>
					<CustomCheckbox iconRenderer={() => <CheckBlack width={12} height={12} />} isChecked={fieldState!} callback={changeAgreementState}/>
					{ textNode() }
					{required && <Text style={{color: isFieldInvalid ? COLORS.RED_POWER_600 : COLORS.SUNGLOW_400, fontSize: 12}}>{' *'}</Text>}					
				</View>
				{isFieldInvalid && (
					<View>
						<Text style={{color: COLORS.RED_POWER_600, marginLeft: 24, fontSize: 12}}>This field is required</Text>
					</View>
				)}
			</View>
		</>
	);
};

export default AgreementField;
