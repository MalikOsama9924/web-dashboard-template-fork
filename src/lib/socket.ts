import { io } from "socket.io-client";

const socket = io(process.env.NEXT_PUBLIC_SOCKET_URL as string);

socket.emit("ping", {}, (response: { status: string; message: string }) => {
  console.log("Ping response:", response);
});

export default socket;
