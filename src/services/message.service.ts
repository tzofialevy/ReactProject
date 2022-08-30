import axios from "axios"
import { Message } from "../types/message";

export default new class MessageService{
    async getAllmessages(){
        return axios.get("https://jsonplaceholder.typicode.com/posts").then((response)=>{
            return response.data
        })
    }
    //put
    login(){

    }
    //post
    async register(user:Message){
        return await axios.post("https://jsonplaceholder.typicode.com/posts",user);
    }
}

