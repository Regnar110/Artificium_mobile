import React from 'react';
import { UserPanelScrollSection } from '../UserPanelScrollSection/UserPanelScrollSection';
import { AddNewGroup } from '../../../../../infrastructure/AddNewGroup/AddNewGroup';
import { Group } from '../../../../../infrastructure/Group/Group';
import RedTriangle from '../../../../../public/svg/projectIcons/redTriangle.svg';
import { fromUserPanelGroupsListOptionalStyles } from './fromUserPanelGroupsListOptionalStyles';
import { View } from 'react-native';

export const UserPanelGroupList = () => {
	const addNewGroupCallback = () => console.log('Add new group');
	return (
		<View style={{ flex: 1 }}>
			<UserPanelScrollSection header='Groups'>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
				<Group title='Orbital Oddysey' SvgIcon={<RedTriangle width={25} height={25} />} optionalStyles={fromUserPanelGroupsListOptionalStyles}/>
			</UserPanelScrollSection>		
			<AddNewGroup callback={addNewGroupCallback}/>
		</View>
	);
};