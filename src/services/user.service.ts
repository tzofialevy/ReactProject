import axios from "axios"
import { UserType } from "../types/user";

export default new class UserService{
    getAllUsers(){
        return axios.get("https://jsonplaceholder.typicode.com/users").then((response)=>{
            return response.data
        })
    }
    
    
}

