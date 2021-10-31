import Topbar from "./Components/topbar/Topbar";
import Sidebar from "./Sidebar/sidebar";
import "./App.css"
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User.jsx";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";


function App() {
  return (
    <Router>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
          <Route path="/user/:userId">
            <User/>
          </Route>
          <Route path="/newUser">
            <NewUser/>
          </Route>
          <Route path="/products">
            <ProductList/>
          </Route>
          <Route path="/product/:productId">
            <Product />
          </Route>
          <Route path="/newproducts">
            <ProductList/>
          </Route>
        </Switch>
      </div>
    </Router>
  ); 
}

export default App;
