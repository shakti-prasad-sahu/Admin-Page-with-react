import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import {HighlightOff} from "@material-ui/icons";
import { productRows } from "../../Components/dummydata"
import { Link } from "react-router-dom";
import { useState } from "react";


export default function ProductList() {
  const [data,setData]= useState(productRows)

  const handleDelete = (id) => {
    setData(data.filter((item) =>item.id !== id));
}

const columns = [
    { field: 'id', headerName: 'Id', width: 100,  },
    { field: 'user', headerName: 'UserName', width: 200 , renderCell:(param)=>{
        return (
            <div className="productListUser">
              <img className="productListImg" src={param.row.img} alt=""/>
              {param.row.name}
            </div>
        )
    } },
    { field: 'stock', headerName: 'Stock', width: 230 },
    { field: 'status', headerName: 'Status', width: 150},
    { field: 'price', headerName: 'Price', width: 140 }, 
    { field: 'action', headerName: 'Action', width: 200,
      renderCell:(params)=>{
          return(
              <div className="editdeletebutton">
              <Link to={"/product/"+params.row.id}>
              <button className="productListEdit">Edit</button>
              </Link>
              <HighlightOff onClick={()=>handleDelete(params.row.id)} className="productListDelete"/>
              </div>
          )
      }
} 
];
    return (
        <div className="productList">
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
