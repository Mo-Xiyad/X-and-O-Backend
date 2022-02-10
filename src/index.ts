import { httpServer } from "server";

httpServer.listen(process.env.PORT || 3001, () =>{
    console.log("listening on port" + (process.env.PORT || 3001));
});