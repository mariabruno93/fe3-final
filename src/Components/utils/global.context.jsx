import { useEffect, useState, createContext,useReducer} from "react";

//Estado con el que inicializa el contexto
export const initialState = {theme: "light", data: []}

//Contexto Global
export const ContextGlobal = createContext(initialState);

//Theme Reducer
const themeReducer= (state,action)=>{
  switch(action.type){
    case "SWITCH_THEME": 
    return !state;
    default: return state;
  }
}

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [themeState, dispatch] = useReducer(themeReducer, true);

  const theme= (themeState?"light":"dark");

  //Manejador del evento de cambiar el tema. usa el dispatch
  const handlerTheme = ()=>{
    dispatch({type:"SWITCH_THEME"})
  }


//Data de la API
  const [data, setData] = useState([])
  useEffect(()=>{
    const getData = async ()=>{
      const response= await fetch ("https://jsonplaceholder.typicode.com/users")
      const dataResponse= await response.json()
      setData(dataResponse)}
    getData()},
    [])

  return (
    <ContextGlobal.Provider value={{theme, data, handlerTheme}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
