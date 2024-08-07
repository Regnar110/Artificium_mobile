import React from 'react';
import PlusInCircle from '../../public/svg/plusInCircle.svg';
import { userPanelCustomButtonOptionalStyles } from '../../navigators/Dashboard/LeftDrawer/userPanel/common/styles/usePanelCustomButtonOptionalStyles';
import CustomButton from '../CustomButton/CustomButton';

interface AddToFriendListInterface {
	callback: () => void
}
export const AddToFriendList = ({callback}: AddToFriendListInterface) => {
	return (
		<CustomButton 
			optionalStyles={userPanelCustomButtonOptionalStyles}
			text='Add to friend list'
			SvgIcon={
				<PlusInCircle width={25} height={25}/>
			}
			callback={callback}
		/>
	);
};