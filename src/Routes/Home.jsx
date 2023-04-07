import React from 'react'
import Card from '../Components/Card'
import { useContext } from "react";
import  {ContextGlobal}  from "../Components/utils/global.context"


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context
//retocado por Dani
const Home = () => {
  
  const {data, setDetails} = useContext(ContextGlobal);

  return (
    <main className='outlet'>
      <h1>Home</h1>
      <div className='card-grid'>
        {/* Aqui deberias renderizar las cards */
        data.map((data)=>(
          <div key={data.id}>
            <Card {...data} data={data} details={setDetails(false)} />
          </div>
        ))
      }
      </div>
    </main>
  )
}

export default Home