import React from 'react';
import UserAvatar from '../../../../../infrastructure/UserAvatar/UserAvatar';
import { optionalStyles } from './fromUserPanelFriendListStyles';
import { UserPanelScrollSection } from '../UserPanelScrollSection/UserPanelScrollSection';
import { AddToFriendList } from '../../../../../infrastructure/AddToFriendList/AddToFriendList';

export const UserPanelFriendList = () => {
	const addToFriendsCallback = () => console.log('Add to friend list');
	const friendPressCallback = () => console.log('FriendPressCallback');
	return (
		<>
			<UserPanelScrollSection header='FRIEND LIST'>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>
				<UserAvatar callback={friendPressCallback} optionalStyles={optionalStyles} displayName='Lara Croft'/>		
			</UserPanelScrollSection>
			<AddToFriendList callback={addToFriendsCallback}/>
		</>
	);
};