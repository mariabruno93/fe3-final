import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context"
import { useParams } from "react-router-dom";


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
	const [dentist, setDentist] = useState([]);

	const { data } = useContext(ContextGlobal);

	const params = useParams();

	const getDentist = () => {
		let dentistFiltered = data.filter(doctor => doctor.id === parseInt(params.id));
		setDentist(dentistFiltered[0]);
		return dentistFiltered;
	};

	useEffect(() => {
		getDentist();
	}, [params]);

  console.log(dentist.id)

	return (
		<div>
		{dentist && (
		<div>
          <h1>Detail Dentist id {dentist.id}</h1>
          {/* aqui deberan renderizar la informacion en detalle de un user en especifico */}
          {/* Deberan mostrar el name - email - phone - website por cada user en especifico */}
          <ul>
						<li>Name: {dentist.name}</li>
						<li>Email: {dentist.email}</li>
						<li>Phone: {dentist.phone}</li>
						<img className="card"
                  src="/images/doctor.jpg"
                  alt="doctor placeholder"
            />
					</ul>
        </div>
			)}
    </div>
  )
}

export default Detail