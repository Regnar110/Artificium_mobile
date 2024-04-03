import React, { useContext, useEffect } from 'react';
import { AgreementsContext } from '../../store/context/AgreementsContext';
import { View } from 'react-native';
import AgreementField from '../subFormContainer/SubFormContainer';
import { useDispatch } from 'react-redux';
import { initAgreementsFields } from '../../store/redux/reducers/agreementsFieldsSlice';

const AgreementsContainer = () => {
	const agreements = useContext(AgreementsContext);
	const dispatch = useDispatch();
	const composeAgreementsState = () => {
		const agreementsState = agreements.map(agreement => {
			const { id, required } = agreement;
			return { id, required, checked: false };
		});
		return agreementsState;
	}
	useEffect(() => {
		/**
		 * !Agreements state initialization
		 */
		
		dispatch(initAgreementsFields(composeAgreementsState()));
	}, []);
	return (
		<View>
			{
				agreements.map(({id, required, textNode, agreementChangeHandler}) => {
					return <AgreementField 
						key={id}
						id={id}
						required={required}
						textNode={textNode}
						agreementChangeHandler={agreementChangeHandler}
					/>;
				})
			}
		</View>
	);
};

export default AgreementsContainer;