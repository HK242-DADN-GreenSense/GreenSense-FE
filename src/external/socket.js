import { io } from "socket.io-client";

const url = import.meta.env.VITE_HOST;

export const socket = io(url);
