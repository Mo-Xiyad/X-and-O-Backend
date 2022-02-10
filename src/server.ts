import http from "http";
import { app } from "./app";
import { Server} from "socket.io"

const httpServer = http.createServer(app)

const io = new Server(httpServer);

io.on("connection", (socket) => {
    console.log("New client connected with ID " + socket.id);

    socket.on("disconnect",()=>{
        console.log("Client" + socket.id + " disconnected");
    })

})

export { httpServer };