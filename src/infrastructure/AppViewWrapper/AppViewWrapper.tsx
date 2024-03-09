import React, { ReactNode } from 'react';
import { View } from 'react-native';

interface AppViewWrapperType {
	children: ReactNode
}

const AppViewWrapper = ({ children }:AppViewWrapperType) => {
	return (
		<View style={{flex: 1, paddingHorizontal: 12, paddingVertical: 32}}>
			{ children }
		</View>
	);
};

export default AppViewWrapper;
