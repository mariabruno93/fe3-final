import React, { useContext } from "react";
import Card from "../Components/Card";
import { ContextGlobal } from "../Components/utils/global.context"
import { Link } from "react-router-dom";
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Favs = () => {
  const {state, dispatchFavs,data} = useContext(ContextGlobal)
  const stateArray= state.map((estado)=>estado.id)
  const favsFiltrados=data.filter(dentista=>stateArray.includes(dentista.id))
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {favsFiltrados.map((fav)=>(
          <div key={fav.id}>
            <div className="card" id={fav.id}>
              <Link to={`/dentist/${fav.id}`}>
                <h2>{fav.name}</h2>
                <img className="card-img-top"
                src="/images/doctor.jpg"
                alt="doctor placeholder" />
              </Link>
            </div>
          </div>
        ))}
        {/* Deberan renderizar una Card por cada uno de ellos */}
      </div>
    </>
  );
};

export default Favs;
