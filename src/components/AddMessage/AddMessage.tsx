import { useFormik } from "formik";
import { useRef } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import * as yup from 'yup';
import { storeType } from "../../redux/reducers/rootReducer";
// import './AddMessage.scss'
import messageService from "../../services/message.service";
import { Message } from "../../types/message";

export default function AddMessage(props:any) {
    const _navigate = useNavigate();
    const userFromStore = useSelector((store:storeType)=>store.userReducer);
    const titleInput = useRef<HTMLInputElement>(null);
    const bodyInput = useRef<HTMLInputElement>(null);

    const addMessage =  (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        const newMessage = {
            title: titleInput,
            body: bodyInput,
            userId:parseInt(userFromStore.password)
          } as unknown as Message;
          
        props.listApiRef.current.addApi(newMessage);
    }
    const myFormik = useFormik({
        initialValues: {} as Message,
        onSubmit: (event: any) => { addMessage(event) },
        validationSchema: yup.object().shape({
            title: yup.string().required('tytle is required'),
            body: yup.string().required('body is required')
        })
    });


    return (
        <div>
            <h1>Add User</h1>
            <form onSubmit={myFormik.handleSubmit} >
                <div className="form-group">
                    <label htmlFor="title" >title</label>
                    <input onChange={myFormik.handleChange} ref={titleInput} type="text" className="form-control" id="title" name="title" placeholder="title"></input>
                    <div>{myFormik.errors.title}</div>
                </div>
                <div className="form-group">
                    <label htmlFor="body" >body</label>
                    <input onChange={myFormik.handleChange} ref={bodyInput} type="text" className="form-control" id="body" name="body" placeholder="body"></input>
                    <div>{myFormik.errors.body}</div>
                </div>
                <button type="submit" className="btn btn-primary">add message</button>
            </form>
        </div>
    )
}