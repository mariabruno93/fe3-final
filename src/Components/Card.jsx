/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context"
import { useEffect } from "react";

const Card = ({ data }) => {
  const {dispatchFavs}= useContext(ContextGlobal)

  const addFav = ()=>{
    dispatchFavs({
      type: "ADD_FAVS",
      payload: {
        id:  data.id,
      }
    });
    //const favButtons= document.getElementsByClassName("favButton")
    //const buttonOff= favButtons.filter((button)=>{(button.value===data.id)&&console.log("hola")})
  }
  // useEffect(()=>{

  // },[addFav])

  return (
    <div className="card" id={data.id}>
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${data.id}`}>
        <h2>{data.name}</h2>
        <img className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder" />
          </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button value={data.id} onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
