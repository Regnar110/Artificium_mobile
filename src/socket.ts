import { io, Socket } from 'socket.io-client';

export class SocketClient {
	static clients: { namespace: string, client: Socket }[] = [];

	static openConnections(namespaces: string[], token: string) {
		namespaces.forEach(name => {
			this.clients.push({
				namespace: name,
				client: io(`http://192.168.0.171:3000/${name}`, {
					extraHeaders: {
						authorization: `Bearer ${token}`
					}
				})
			});
		});
	}

	getSocketClient(namespace: string) {
		// get socket client for certain namespace
	}

	static closeAllConnections() {
		this.clients.forEach(({ client }) => {
			client.disconnect();
		});
	}
}