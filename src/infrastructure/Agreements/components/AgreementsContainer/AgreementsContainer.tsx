import React, { useContext, useEffect } from 'react';
import { AgreementsContext, AgreementsPropsContext } from '../../store/context/AgreementsContext';
import { View } from 'react-native';
import AgreementField from '../AgreementField/AgreementField';
import { useDispatch } from 'react-redux';
import { initAgreementsFields } from '../../store/redux/reducers/agreementsFieldsSlice';


const AgreementsContainer = () => {
	const agreements = useContext(AgreementsContext);
	const { selectAllField } = useContext(AgreementsPropsContext);
	const dispatch = useDispatch();
	const composeAgreementsState = () => {
		const agreementsState = agreements.map(agreement => {
			const { id, required } = agreement;
			return { id, required, checked: false };
		});
		if (selectAllField) {
			agreementsState.push({
				id: 'selectAll',
				required: false,
				checked: false
			});
		}
		return agreementsState;	
	};
	useEffect(() => {
		/**
		 * !Agreements state initialization
		 */
		
		dispatch(initAgreementsFields(composeAgreementsState()));
	}, []);
	return (
		<View>
			{
				selectAllField && <AgreementField 
					key={'selectAll'}
					id={'selectAll'}
					required={false}
					textNode={selectAllField.textNode}
					agreementChangeHandler={selectAllField.selectAllHandler}
				/>
			}
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