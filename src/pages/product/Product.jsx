import { Link } from 'react-router-dom'
import Charts from '../../Components/Charts/Charts'
import  './product.css'
import {productData} from "../../Components/dummydata"
import { Publish } from '@material-ui/icons'

export default function Product() {
    return (
        <div className="product">
            <div className="productTitleContainer">
               <h1 className="productTitle">Product</h1>
               <Link to="/newproduct">
               <button className="productAddButton">Create</button>
               </Link> 
            </div>
            <div className="productTop">
            <div className="productTopLeft">
               <Charts data={productData} dataKey="Sales" title="Sales perfomance"/>
            </div>
            <div className="productTopRight">
              <div className="productInfoTop">
                 <img src="https://th.bing.com/th/id/OIP.BERiGm29Ec5hVYAXm0g_awHaFj?pid=ImgDet&rs=1"
                  alt=" " className="productInfoImg" />
                  <span className="productName">Apple Airpods</span>
              </div>
              <div className="productInfoBottom">
                <div className="productInfoItem">
                 <span className="productInfoKey">id:</span>
                 <span className="productInfoValue">123</span>
                </div>
                <div className="productInfoItem">
                <span className="productInfoKey">sale:</span>
                <span className="productInfoValue">4123</span>
               </div>
               <div className="productInfoItem">
               <span className="productInfoKey">Active:</span>
               <span className="productInfoValue">Yes</span>
              </div>
              <div className="productInfoItem">
              <span className="productInfoKey">in stock:</span>
              <span className="productInfoValue">No</span>
             </div>
              </div>
            </div>
            </div>
            <div className="productBottom">
              <form className="productForm">
                <div className="productFormLeft">
                   <label>Product Name</label>
                   <input type="text" placeholder="Apple AirPod" />
                   <label>In Stock</label>
                   <select name="inStock" id="idStock">
                     <option value="yes">Yes</option>
                     <option value="No">No</option>
                   </select>
                   <label>Active</label>
                   <select name="active" id="active">
                     <option value="yes">Yes</option>
                     <option value="No">No</option>
                   </select>
                </div>
                <div className="productFormRight">
                  <div className="productUpload">
                     <img src="https://th.bing.com/th/id/OIP.BERiGm29Ec5hVYAXm0g_awHaFj?pid=ImgDet&rs=1"
                      alt=" " className="productUploadImg"/>
                     <label for="file">
                       <Publish/>                      
                     </label>
                     <input type="file" id="file" style={{display:"none"}} />
                  </div>
                  <button className="productButton">Update</button>
                </div>
              </form>
            </div>
        </div>
    );
}
