import React, { ReactNode } from 'react';
import { ScrollView } from 'react-native';

interface AppViewWrapperType {
	children: ReactNode
}

const AppViewWrapper = ({ children }:AppViewWrapperType) => {
	return (
		<ScrollView contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
			{ children }
		</ScrollView>
	);
};

export default AppViewWrapper;
