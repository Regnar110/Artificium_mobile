import React from 'react';
import PlusInCircle from '../../public/svg/plusInCircle.svg';
import { userPanelCustomButtonOptionalStyles } from '../../navigators/Dashboard/LeftDrawer/userPanel/common/styles/usePanelCustomButtonOptionalStyles';
import CustomButton from '../CustomButton/CustomButton';

interface AddNewGrouptInterface {
	callback: () => void
}
export const AddNewGroup = ({ callback }: AddNewGrouptInterface) => {
	return (
		<CustomButton 
			optionalStyles={userPanelCustomButtonOptionalStyles}
			text='Add new group'
			SvgIcon={
				<PlusInCircle width={25} height={25}/>
			}
			callback={callback}
		/>
	);
};