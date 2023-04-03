import { useEffect, useState, createContext } from "react";

export const initialState = {theme: "", data: []}

export const ContextGlobal = createContext(initialState);

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  
  const [data, setData] = useState([])
  const [theme,setTheme]= useState("");
  

  const getData = async ()=>{
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then((answer)=>  answer.json())
    .then((dataResponse)=>setData(dataResponse))
  }

  const getTheme = ()=> setTheme("a")
  useEffect(()=>{
    getTheme();
    getData();
    },
    [])

  return (
    <ContextGlobal.Provider value={{theme, data}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
