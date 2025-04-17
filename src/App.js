import {useState, useEffect} from "react"
import { Outlet, useNavigate } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const [isLoggedIn, setIsLogggedIn] = useState=(false);
  const navigate= useNavigate();

  const logIn =() => {
    setIsLogggedIn(true);
  }

const logout = () => {
  setIsLogggedIn(false);
};
useEffect(() =>{
  if (isLoggedIn) {
    navigate("/");
  }
  else{
    navigate("/login");
  };
}, {isLoggedIn})

  return (
    <div className="app">
      <NavBar  logout={logout}/>
      <Outlet context={logIn}/>
    </div>
  );
}

export default App;
