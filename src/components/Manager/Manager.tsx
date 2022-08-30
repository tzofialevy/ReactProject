import { useEffect, useState } from "react"
import { Container, Table } from "react-bootstrap";
import userService from "../../services/user.service";
import { UserType } from "../../types/user";
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useSelector } from "react-redux";
import user from "../User/User";
import messageService from "../../services/message.service";
import User from "../User/User";
import { Outlet } from "react-router";
import { Box, LinearProgress } from "@mui/material";

export default function Manager() {
    const [listofUsers, setlistofUsers] = useState<UserType[]>([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        userService.getAllUsers().then((response) => {
            setlistofUsers(response);
            setLoading(false);
        })
    }, [])
    const columns: GridColDef[] = [
        { field: 'id', headerName: 'password', width: 70 },
        // { field: 'password', headerName: 'password', width: 70 },
        { field: 'name', headerName: 'name', width: 200 },
        { field: 'email', headerName: 'email', width: 130 }
    ];

    const rows = listofUsers;
    // const rows:any=[]
    // listofUsers.map((item:UserType,index)=>{
    //     // rows.push({id:index,password:item.password,email:item.email})
    //     rows.push({id:item.id,name:item.name,email:item.email})
    // })

    const listOfMessages = (paramId:number) => {
        //     return <div className="ContainerApi">
        //     <div className="row">
        //       <div className='col'><Manager></Manager></div>
        //       <div className='col'><User></User></div>
        //     </div>
        //   </div>
        <User id={paramId}></User>
    }

    return (
        <div style={{ height: 400, width: '100%' }} className="Manager">
            <h1>The Users</h1>
            {loading ? <div><Box sx={{ width: '100%' }}>
                <LinearProgress />
            </Box></div> : ''}

            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
                disableSelectionOnClick
                onCellDoubleClick={(event)=>{listOfMessages(event.tabIndex)} }
                // disableSelectionOnClick={(event)=>{listOfMessages(event.tabIndex)} }
                onCellClick={(event)=>{listOfMessages(event.tabIndex)} }
            // onRowClick={listOfMessages}

            />
        </div>
    )
    // <div className="Manager">
    //     <Table>
    //         <thead>
    //             <tr>
    //                 <th>Number</th>
    //                 <th>Name</th>
    //                 <th>Email</th>
    //                 <th>Password</th>
    //             </tr>
    //         </thead>
    //         <tbody>
    //             {listofUsers.map((item:User,index)=>{
    //                 return <tr key={index}>
    //                     <td>{index}</td>
    //                     <td>{item.name}</td>
    //                     <td>{item.email}</td>
    //                     <td>{item.password}</td>
    //                 </tr>
    //             })}
    //         </tbody>
    //     </Table>

    // </div>
}
