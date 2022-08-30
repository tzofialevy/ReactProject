import { UserType } from "../../types/user";

const userInitial:UserType={name:'ds',password:'5'};

const userReducer=(state:UserType=userInitial,action:any)=>{
    
    switch(action.type){
        case 'SET':
            state=action.data;
            state={...state}
            break;
        default:
            break;
    }
    return state;
}

export default userReducer