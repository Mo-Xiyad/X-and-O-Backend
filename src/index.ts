import { httpServer } from "server";

httpServer.listen(process.env.PORT || 3003, () =>{
    console.log("listening on port" + (process.env.PORT || 3003));
});