import React from 'react';
import UserAvatar from '../../../../../infrastructure/UserAvatar/UserAvatar';
import { optionalStyles } from './fromUserPanelFriendListStyles';
import { UserPanelScrollSection } from '../UserPanelScrollSection/UserPanelScrollSection';
import { AddToFriendList } from '../../../../../infrastructure/AddToFriendList/AddToFriendList';
import { View } from 'react-native';
import { SecureStoreWorker } from '../../../../../secureStore/SecureStore';

export const UserPanelFriendList = () => {
	const addToFriendsCallback = async () => await SecureStoreWorker.remove('artificium_session');
	const friendPressCallback = () => console.log('FriendPressCallback');
	return (
		<View style={{ flex: 1 }}>
			<UserPanelScrollSection header='Friend List'>
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
		</View>
	);
};