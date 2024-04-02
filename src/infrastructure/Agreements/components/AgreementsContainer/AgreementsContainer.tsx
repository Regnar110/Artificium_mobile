import React, { useContext } from 'react';
import { AgreementsContext } from '../../store/context/AgreementsContext';
import { View } from 'react-native';
import { Text } from 'react-native-paper';

const AgreementsContainer = () => {
	const agreements = useContext(AgreementsContext);

	console.log(agreements);
	return (
		<View>
			
		</View>
	);
};

export default AgreementsContainer;