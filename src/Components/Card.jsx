/* eslint-disable no-unused-expressions */
import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextGlobal } from "../Components/utils/global.context"

const Card = ({ data }) => {
  const {dispatchFavs}= useContext(ContextGlobal)

  const addFav = (dataID)=>{
    dispatchFavs({
      type: "ADD_FAVS",
      payload: {
        id:  data.id,
      }
    });
    const favButtons= document.getElementsByClassName("favsButton")
    console.log(favButtons)
  }

  return (
    <div className="card">
        {/* En cada card deberan mostrar en name - username y el id */}
        <Link to={`/dentist/${data.id}`}>
        <h2>{data.name}</h2>
        <img className="card-img-top"
          src="/images/doctor.jpg"
          alt="doctor placeholder" />
          </Link>
        {/* No debes olvidar que la Card a su vez servira como Link hacia la pagina de detalle */}

        {/* Ademas deberan integrar la logica para guardar cada Card en el localStorage */}
        <button id={data.id} onClick={addFav(data.id)} className="favsButton">Add fav</button>
    </div>
  );
};

export default Card;
