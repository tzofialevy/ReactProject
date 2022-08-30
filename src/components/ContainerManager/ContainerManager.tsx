import { Outlet } from "react-router";
import Manager from "../Manager/Manager";
import User from "../User/User";

export default function ContainerManager() {
    return <div className="ContainerApi">
        <div className="row">
            <div className='col'><Manager></Manager></div>
            <div className='col'><User id={-1}></User></div>
        </div>
    </div>
}