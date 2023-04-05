import { useEffect, useState, createContext,useReducer} from "react";

//Estado con el que inicializa el contexto
export const initialState = {theme: "light", data: []}

//Contexto Global
export const ContextGlobal = createContext(initialState);

//Estado booleano
//const lightTheme= true;

//Reducer
const themeReducer= (state,action)=>{
  switch(action.type){
    case "SWITCH_THEME": 
    return !state;
    default: return state;
  }
}
export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [state, dispatch] = useReducer(themeReducer, true);

  const [data, setData] = useState([])
  const theme= (state?"light":"dark");
  


  const getData = async ()=>{
    fetch ("https://jsonplaceholder.typicode.com/users")
    .then((answer)=>  answer.json())
    .then((dataResponse)=>setData(dataResponse))
  }
  const handlerTheme = ()=>{
    dispatch({type:"SWITCH_THEME"})
  }

  
  
  
  useEffect(()=>{
    getData();
    },
    [])

  return (
    <ContextGlobal.Provider value={{theme, data, handlerTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
