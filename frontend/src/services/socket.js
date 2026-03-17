import { io } from "socket.io-client";

// ✅ do NOT auto connect
export const socket = io("http://localhost:5000", {
  autoConnect: false,
});