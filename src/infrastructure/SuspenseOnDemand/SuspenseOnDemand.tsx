import React, { ReactNode } from 'react';
import { StyleSheet, View } from 'react-native';
import { COLORS } from '../enums';

export const SuspenseOnDemand = ({ isActive, fallback, children }: { isActive: boolean, fallback: JSX.Element, children: ReactNode}) => {
	
	return (
		<>
			{ isActive && (
				<View style={styles.loadingOverlay}>
					{ fallback }
				</View>					
			)}
	
			{ children }
		</>

	);
};

const styles = StyleSheet.create({
	loadingOverlay: {
		opacity: .8,
		zIndex: 2,
		backgroundColor: COLORS.NOBLE_700,
		position: 'absolute',
		justifyContent: 'center',
		width: '100%',
		height: '101%'
	}
})