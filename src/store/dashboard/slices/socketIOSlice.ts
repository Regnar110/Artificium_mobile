import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { io, Socket } from 'socket.io-client';

interface SocketState {
	client: Socket | null
}

const initialState: SocketState = { client: null };

const socketIO = createSlice({
	name: 'socketIOSlice',
	initialState,
	reducers: {
		connectionInit(state, action) {
			if (action.payload) {
				console.log('SOCKET INIT')
				// Ensure this returns the correct Socket instance from socket.io-client
				const socket = io('http://192.168.0.171:3000/friendList', { extraHeaders: {
					authorization: `Bearer ${action.payload}`
				}});

				return {
					client: socket
				};
			}
			return { client: null };
		}
	},
});

export const { connectionInit } = socketIO.actions;
export default socketIO.reducer;

export const getSocketIO = (state:RootState) => {
	return state.socketIO.client;
};
