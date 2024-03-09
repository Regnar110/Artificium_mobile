import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { FormContext, FormInputProvider } from '../../store/context/FormContexts';
import Input from '../Input/Input';

const InputsContainer = () => {
	const { fields } = useContext(FormContext);
	return (
		<View style={styles.inputsContainer}>
			{
				fields.map(({id}, index) => (
					<FormInputProvider key={`${id}_${index}`} value={{...fields[index]}}>
						<Input />	
					</FormInputProvider>	
				))
			}
		</View>
	);
};

export default InputsContainer;

const styles = StyleSheet.create({
	inputsContainer: {
		gap: 15,
	},
});
