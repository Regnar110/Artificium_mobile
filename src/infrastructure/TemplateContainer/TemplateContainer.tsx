import React, { ReactNode } from 'react';
import { SafeAreaView, StatusBar, KeyboardAvoidingView } from 'react-native';
import AppViewWrapper from '../AppViewWrapper/AppViewWrapper';
import HubFooter from '../HubFooter/HubFooter';
import HubHeader from '../HubHeader/HubHeader';
interface RootContainerType {
	children: ReactNode
}

const TemplateContainer = ({ children }:RootContainerType) => {
	return (
		<SafeAreaView style={{flex: 1}}>
			<StatusBar animated={true} backgroundColor="#fff" />
			<KeyboardAvoidingView style={{ flex: 1,justifyContent: 'center', paddingHorizontal: 8}} behavior="padding" enabled   keyboardVerticalOffset={10}>
				<HubHeader/>
				<AppViewWrapper>
					{ children }
				</AppViewWrapper>					
				<HubFooter/>
			</KeyboardAvoidingView>
		</SafeAreaView>
	);
};

export default TemplateContainer;
