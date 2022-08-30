import { useRef } from "react";
import { useSelector } from "react-redux";
import { storeType } from "../../redux/reducers/rootReducer";
import { Message } from "../../types/message";
import AddMessage from "../AddMessage/AddMessage";
import User from "../User/User";

export default function ContainerUser() {
    const listApiRef=useRef<Message[]>();
    const userFromStore=useSelector((store:storeType)=>store.userReducer)
    return <div className="ContainerApi">
        <div className="row">
            <div className='col'><User id={parseInt(userFromStore.password)} ref={listApiRef}></User></div>
            <div className='col'><AddMessage></AddMessage></div>
        </div>

    </div>
}