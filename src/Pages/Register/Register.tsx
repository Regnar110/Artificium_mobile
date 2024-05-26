import React from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import Logo from '../../public/svg/logo.svg';
import Form from '../../infrastructure/Form/Form';
import TemplateContainer from '../../infrastructure/TemplateContainer/TemplateContainer';
import { useRegisterFormSubmit } from './hooks/useRegisterFormSubmit';
import { REGISTER_FORM_CONSTANTS, RegisterForm } from './form/config';
import { styles } from './styles';
import { COLORS } from '../../infrastructure/enums';
import { SuspenseOnDemand } from '../../infrastructure/SuspenseOnDemand/SuspenseOnDemand';

const Register = () => {
	const {isWaiting, submitRegister} = useRegisterFormSubmit();

	return (
		<TemplateContainer>
			<View style={styles.container}>
				<Logo width={200} height={10} />
				<View style={styles.innerContainer}>
					<Text style={styles.header}>Connect with your team and bring your creative ideas to life.</Text>
					<SuspenseOnDemand fallback={<ActivityIndicator size={'large'} color={COLORS.DAY_BLUE_400}/>} isActive={isWaiting}>
						<Form
							formId={REGISTER_FORM_CONSTANTS.FORM_ID}
							isLoading={isWaiting}
							agreements={RegisterForm.agreements}
							onSubmitCallback={submitRegister}
							fieldLiveHints={true}
							hints={RegisterForm.hints}
							submitButtonText={REGISTER_FORM_CONSTANTS.SUBMIT_BUTTON_TEXT}
							sharedFieldProps={RegisterForm.sharedFieldProps}
							fields={RegisterForm.fields}
						/>						
					</SuspenseOnDemand>

				</View>					
			</View>			
		</TemplateContainer>
	);
};

export default Register;