import { useEffect, useState, createContext} from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const themes={
    light:{
      font:"black",
      background:"white"
    },
    dark:{
      font:"white",
      background:"black"  
    }
  }
  const [data, setData] = useState([])
  //const [theme,dispatch]= useReducer(themeReducer,{})

  const getData = async ()=>{
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then((answer)=>  answer.json())
    .then((dataResponse)=>setData(dataResponse))
  }

  
  
  
  useEffect(()=>{
    getData();
    },
    [])

  return (
    <ContextGlobal.Provider value={{data}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
