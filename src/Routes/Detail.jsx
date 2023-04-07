import React, { useContext, useEffect, useState } from "react";
import { ContextGlobal } from "../Components/utils/global.context"
import { useParams } from "react-router-dom";
import Card from "../Components/Card"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Detail = () => {

  // Consumiendo el parametro dinamico de la URL deberan hacer un fetch a un user en especifico
	const [dentist, setDentist] = useState([]);

	const { data, setDetails } = useContext(ContextGlobal);

	const params = useParams();
	console.log(params.id)


	const getDentist = () => {
		let dentistFiltered = data.filter(doctor => doctor.id === parseInt(params.id));
		setDentist(dentistFiltered[0]);
		return dentistFiltered;
	};
	
	useEffect(() => {
		getDentist();
	},[params]);

	return (
		<div key={dentist.id}>
			<Card {...dentist} data={dentist} details={setDetails(true)} />
		</div>)
}

export default Detail