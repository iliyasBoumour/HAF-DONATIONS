import { Route, Switch, useLocation, Redirect } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import { useSelector } from "react-redux";

function App() {
  const location = useLocation();
  const { cart } = useSelector((state) => state.cartReducers);
  const { currentUser } = useSelector((state) => state.authReducer);
  return (
    <>
      {location.pathname === "/login" || <Navbar location={location} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/login">
          {currentUser ? <Redirect to="/" /> : <Login />}
        </Route>
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/payment">
          {cart.length > 0 ? <Payment /> : <Redirect to="/cart" />}
        </Route>

        {/* <Route path="*" component={Center}></Route> */}
      </Switch>
      {location.pathname === "/login" || <Footer />}
    </>
  );
}

export default App;
