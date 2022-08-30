// import { Outlet } from "react-router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { storeType } from "../../redux/reducers/rootReducer";


export default function HomePage() {
    const _navigate = useNavigate();
    const nameFromStore = useSelector((store: storeType) => store.userReducer);
    useEffect(() => {

        if (nameFromStore.password == '7') {
            _navigate('/header/home/manager/')
        }
        else {
            _navigate('/header/home/user/')
        }
    }, [])

    return (
        <div>Hello to {nameFromStore.name}
            <Outlet></Outlet>
        </div>
    )
}
