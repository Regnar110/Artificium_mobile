import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../../../../../infrastructure/enums';

export const styles = StyleSheet.create({
	messageContainer: {
		borderColor: COLORS.NOBLE_500,
		alignSelf: 'center',
		borderWidth: 1,
		borderRadius: 8,
		padding:16,
		marginVertical: 10
	},

	message:{
		fontSize: 14,
		marginLeft: 39,
		color: COLORS.NOBLE_300
	}
});