import { useFormik } from "formik";
import { useRef } from "react";
import { propTypes } from "react-bootstrap/esm/Image";
import { useDispatch, useSelector } from "react-redux";
import { Route, useNavigate } from "react-router";
import { Link } from "react-router-dom";
import * as yup from 'yup';
import { UserType } from "../../types/user";
import './Login.scss'
export default function Login() {
    const _navigate = useNavigate();
    const _dispatch = useDispatch();

    const userNameInput = useRef<HTMLInputElement>(null);
    const idInput = useRef<HTMLInputElement>(null);

    const user = {
        name: userNameInput.current?.value,
        password: idInput.current?.value
    } as unknown as UserType

    const login = () => {
        _dispatch({
            data: user,
            type: "SET"
        })
        _navigate('/header/home/')
    }

    const myFormik = useFormik({
        initialValues: {} as UserType,
        onSubmit: login,
        validationSchema: yup.object().shape({
            name: yup.string().required('Name is required').min(3),
            password: yup.string().required('Password is required'),
        })
    });

    _dispatch({
        data: myFormik.initialValues,
        type: "SET"
    })


    return (


        <div className="signup">
            <div className="signup-connect">
                <h1>Create your account</h1>
                <a href="#" className="btn btn-social btn-facebook"><i className="fa fa-facebook"></i> Sign in with Facebook</a>
                <a href="#" className="btn btn-social btn-twitter"><i className="fa fa-twitter"></i> Sign in with Twitter</a>
                <a href="#" className="btn btn-social btn-google"><i className="fa fa-google"></i> Sign in with Google</a>
                <a href="#" className="btn btn-social btn-linkedin"><i className="fa fa-linkedin"></i> Sign in with Linkedin</a>
            </div>
            <div className="signup-classic">
                <h2>Or use the classical way</h2>
                <form className="form" onSubmit={myFormik.handleSubmit}>
                    <fieldset className="name">
                        <input onChange={myFormik.handleChange} type="text" ref={userNameInput} placeholder="username" name="name" id="name" />
                        <div>{myFormik.errors.name}</div>
                    </fieldset>
                    <fieldset className="password">
                        <input onChange={myFormik.handleChange} type="password" ref={idInput} placeholder="password" name="password" id="password" />
                        <div>{myFormik.errors.password}</div>
                    </fieldset>
                    <button type="submit" className="btn">sign up</button>
                </form>
            </div>
        </div>
    )
    
}