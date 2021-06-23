import { Route, Switch, useLocation } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Login from "./pages/Login";

function App() {
  const location = useLocation();
  return (
    <>
      {location.pathname === "/login" || <Navbar location={location} />}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/login" component={Login} />
      </Switch>
      {location.pathname === "/login" || <Footer />}
    </>
  );
}

export default App;
