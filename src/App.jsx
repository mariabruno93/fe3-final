
import { useContext } from "react";
import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import ContextProvider, { ContextGlobal } from "./Components/utils/global.context";


function App() {
  const {theme, data} = useContext(ContextGlobal)
  return (
      
        <div className="App">
          <Navbar/>
          {data.map((data)=>{
            return(
              <div key={data.id}>
                {data.name}
                </div>
            )
          })}
          <Footer/>
        </div>
    

  );
}

export default App;
