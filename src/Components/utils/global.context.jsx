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

//PARA FAVORITOS
const getItemsFromStorage = () => {
  const localData = localStorage.getItem("item");
  return localData ? JSON.parse(localData) : [];
};

const saveItemsInStorage = (item) => {
  localStorage.setItem("item", JSON.stringify(item));
};

const favsReducer = (state, action) => {
  switch (action.type) {
    case "ADD_FAVS":
      saveItemsInStorage([...state,action.payload]);
      return [...state,action.payload];
      case "REMOVE_FAVS":
        const filteredTodos = state.filter((item) => item.id !== action.payload);
        saveItemsInStorage(filteredTodos);
        return filteredTodos;
    default:
      return state;
  }
};

export const ContextProvider = ({ children }) => {
  //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
  const [themeState, dispatch] = useReducer(themeReducer, true);

  const theme= (themeState?"light":"dark");

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

    //Data de favs
    const [state, dispatchFavs] = useReducer(favsReducer, {}, getItemsFromStorage);
    
    //Details
    const[details,setDetails]=useState(false);

  return (
    <ContextGlobal.Provider value={{theme, data, handlerTheme,state,dispatchFavs,details,setDetails}}>
      {children}
    </ContextGlobal.Provider>
  );
};
export default ContextProvider;
