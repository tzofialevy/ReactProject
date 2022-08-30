import { DataGrid, GridColDef, GridFilterModel, GridLinkOperator } from "@mui/x-data-grid";
import { useFormik } from "formik";
import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { Table } from "react-bootstrap";
import { useSelector } from "react-redux";
import { storeType } from "../../redux/reducers/rootReducer";
import messageService from "../../services/message.service";
import { Message } from "../../types/message";
type UserProps={
    id:number
}
const User=forwardRef((props:UserProps, ref)=>{
// export default function User(props?:UserProps) {
    const [listOfMessages, setListOfMessages] = useState<Message[]>([]);
    useEffect(() => {
        messageService.getAllmessages().then((response) => {
            setListOfMessages(response);
        })
    }, [])
    const storePassword = useSelector((store: storeType) => store.userReducer);
    useImperativeHandle(ref,()=>({
        addApi:add
    }))
    const add=(message:Message)=>{
        listOfMessages.unshift(message);
        setListOfMessages([...listOfMessages])
    }
    

    const columns: GridColDef[] = [
        { field: 'id', headerName: 'id', width: 70 },
        { field: 'title', headerName: 'title', width: 300 },
        { field: 'body', headerName: 'body', width: 300 },
    ];


    

    const rows: any = []
    listOfMessages.map((item: Message, index) => {
        if(props?.id&&item.userId==props?.id){
            rows.push({ id: index, title: item.title, body: item.body })
        }
        // rows.push(item.userId&&item.userId==props?.id?{ id: index, title: item.title, body: item.body }:{})
    })

    return (
        <div style={{ height: 400, width: '100%' }} className="User">
            <h1>The Messages</h1>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    )

    
})
export default User;
