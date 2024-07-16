import React from 'react';
import { View } from 'react-native';
import Letter from '../../../../../public/svg/letter.svg';
import Wallet from '../../../../../public/svg/wallet.svg';
import { styles } from './style';
import { SectionHeader } from '../SectionHeader/SectionHeader';
import CustomButton from '../../../../../infrastructure/CustomButton/CustomButton';
import { fromUserPanelGeneralSectionStyles } from './fromuserPanelGeneralSectionStyles';

export const UserPanelGeneralSection = () => {
	return (
		<View style={styles.container}>
			<SectionHeader>{'General'}</SectionHeader>
			<CustomButton
				text='Mailbox'
				SvgIcon={
					<Letter width={25} height={25}/>
				}
				optionalStyles={fromUserPanelGeneralSectionStyles}
				callback={() => console.log('Mailbox click')}
			/>
			<CustomButton
				text='Billing'
				SvgIcon={
					<Wallet width={25} height={25}/>
				}
				optionalStyles={fromUserPanelGeneralSectionStyles}
				callback={() => console.log('Wallet click')}
			/>
		</View>
	);
};