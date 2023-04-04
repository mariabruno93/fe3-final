import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";

const Card = ({ data }) => {

  const addFav = ()=>{
    // Aqui iria la logica para agregar la Card en el localStorage
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
        <button onClick={addFav} className="favButton">Add fav</button>
    </div>
  );
};

export default Card;
