import "./userList.css"
import { DataGrid } from '@material-ui/data-grid';
import {HighlightOff} from "@material-ui/icons";
import { userRows } from "../../Components/dummydata"
import { Link } from "react-router-dom";
import { useState } from "react";

export default function UserList() {
    const [data, setData] = useState(userRows);

    const handleDelete = (id) => {
        setData(data.filter((item) =>item.id !== id));
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 100,  },
        { field: 'user', headerName: 'UserName', width: 200 , renderCell:(param)=>{
            return (
                <div className="userListUser">
                  <img className="userImg" src={param.row.avatar} alt=""/>
                  {param.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 230 },
        { field: 'status', headerName: 'Status', width: 150},
        { field: 'transaction', headerName: 'Transaction', width: 120 }, 
        { field: 'action', headerName: 'Action', width: 150,
          renderCell:(param)=>{
              return(
                  <div>
                  <Link to={"/user/"+param.row.id}>
                  <button className="userListEdit">Edit</button>
                  </Link>
                  <HighlightOff onClick={()=>handleDelete(param.row.id)} className="userListDelete"/>
                  </div>
              )
          }
    } 
    ];
    
    return (
        <div className="userList">
            <DataGrid
                rows={data}
                columns={columns}
                pageSize={8}
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    )
}
