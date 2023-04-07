import React from 'react'
import { Link } from "react-router-dom";
import { ContextGlobal } from "../Components/utils/global.context"
import { useContext } from 'react';
//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Navbar = () => {
	const { handlerTheme} = useContext(ContextGlobal);
  return (
    <nav>
      {/* Aqui deberan agregar los liks correspondientes a las rutas definidas */}
    	<div>
			<Link to="/home" className="nav-link">
				Home
			</Link>
		</div>
		<div>
			<Link to="/favs" className="nav-link">
				Favs
			</Link>
		</div>
		<div>
			<Link to="/contact" className="nav-link">
				Contact
			</Link>
		</div>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
	  <div>
      <button className='button-change' onClick={handlerTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar