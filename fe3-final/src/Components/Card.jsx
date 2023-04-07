/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context"
import swal from 'sweetalert';

const Card = ({ data }) => {
  const {state, dispatchFavs}= useContext(ContextGlobal)

  const [habilitado, setHabilitado] = useState(false);

  const siPresionaAgregar  = () => {
    return swal("Agregado a favoritos");
  };


  const siHayAlgoEnLocalStorage  = () => {
    state > 0 ? (
      setHabilitado(false)) : (
        setHabilitado(true)
        );
};
  const addFav = ()=>{
    dispatchFavs({
      type: "ADD_FAVS",
      payload: {
        id:  data.id,
      }
    });
    //const favButtons= document.getElementsByClassName("favButton")
    //const buttonOff= favButtons.filter((button)=>{(button.value===data.id)&&console.log("hola")})
    siPresionaAgregar();
    siHayAlgoEnLocalStorage();
  }



  return (
    <div className="card" id={data.id}>
        {/* En cada card deberan mostrar en name - username y el id */}
      <div className="into-card">
        <Link to={`/dentist/${data.id}`}>
        <h2>{data.name}</h2>
        <img className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder" />
          </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button
          disabled = {habilitado}
          value={data.id}
          onClick={addFav}
          className="favButton">Add fav</button>
      </div>
    </div>
  );
};

export default Card;
