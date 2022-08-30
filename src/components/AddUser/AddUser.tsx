import { useFormik } from "formik";
import { useNavigate } from "react-router";
import * as yup from 'yup';
import { UserType } from "../../types/user";
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import './AddUser.scss'
import SweetAlert from 'react-bootstrap-sweetalert';

export default function AddUser() {

    const _navigate = useNavigate();
    const myFormik = useFormik({
        initialValues: {} as UserType,
        onSubmit: () => {
            _navigate('/header/home/')

        },
        validationSchema: yup.object().shape({
            name: yup.string().required('Name is required').min(3),
            password: yup.string().required('Password is required'),
            id: yup.string().required().min(9)
        })
    });

    return (
        <div className="signup">
            <h1>Add User</h1>

            <div className="signup-classic">
                <h2>Or use the classical way</h2>
                <form className="form" onSubmit={myFormik.handleSubmit}>
                    <fieldset className="name">
                        <input onChange={myFormik.handleChange} type="text" placeholder="username" name="name" id="name" />
                        <div>{myFormik.errors.name}</div>
                    </fieldset>
                    <fieldset className="password">
                        <input onChange={myFormik.handleChange} type="password" placeholder="password" name="password" id="password" />
                        <div>{myFormik.errors.password}</div>
                    </fieldset>
                    <fieldset className="id">
                        <input onChange={myFormik.handleChange} type="text" placeholder="id" name="id" id="id" />
                        <div>{myFormik.errors.id}</div>
                    </fieldset>
                    <fieldset className="email">
                        <input onChange={myFormik.handleChange} type="email" placeholder="email" name="email" id="email" />
                        <div>{myFormik.errors.email}</div>
                    </fieldset>
                    <fieldset className="phone">
                        <input onChange={myFormik.handleChange} type="text" placeholder="phone" name="phone" id="phone" />
                        <div>{myFormik.errors.phone}</div>
                    </fieldset>
                    <button type="submit" className="btn">sign up</button>
                </form>
            </div>
        </div>
    )
    //     <form onSubmit={myFormik.handleSubmit} >
    //         <div className="form-group">
    //             <label htmlFor="id" >id</label>
    //             <input onChange={myFormik.handleChange} type="text" className="form-control" id="id" name="id" placeholder="id"></input>
    //             <div>{myFormik.errors.id}</div>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="name" >name</label>
    //             <input onChange={myFormik.handleChange} type="text" className="form-control" id="name" name="name" placeholder="name"></input>
    //             <div>{myFormik.errors.name}</div>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="password" >password</label>
    //             <input onChange={myFormik.handleChange} type="password" className="form-control" id="password" name="password" placeholder="password" ></input>
    //             <div>{myFormik.errors.password}</div>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="email" >email</label>
    //             <input onChange={myFormik.handleChange} type="email" className="form-control" id="email" name="email" placeholder="email" ></input>
    //             <div>{myFormik.errors.email}</div>
    //         </div>
    //         <div className="form-group">
    //             <label htmlFor="phone" >phone</label>
    //             <input onChange={myFormik.handleChange} type="text" className="form-control" id="phone" name="phone" placeholder="phone" ></input>
    //             <div>{myFormik.errors.phone}</div>
    //         </div>
    //         <button type="submit" className="btn btn-primary">add user</button>
    //   </form>
}