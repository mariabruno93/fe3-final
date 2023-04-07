
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContextProvider, { ContextGlobal } from "./Components/utils/global.context";
import { Outlet } from "react-router-dom";


function App() {
  const {theme, data} = useContext(ContextGlobal)
  return (
          <div className="App" >
            <div className={theme}>
            <Navbar/>
            <Outlet/>
            <Footer/>
            </div>
          </div>
  );
}

export default App;
