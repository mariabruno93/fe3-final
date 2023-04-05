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
				<ul>
					<li>
						<Link to="/home" className="nav-link">
							Home
						</Link>
					</li>
					<li>
						<Link to="/favs" className="nav-link">
							Favs
						</Link>
					</li>
					<li>
						<Link to="/contact" className="nav-link">
							Contact
						</Link>
					</li>
				</ul>
      {/* Deberan implementar ademas la logica para cambiar de Theme con el button */}
      <button onClick={handlerTheme}>Change theme</button>
      </div>
    </nav>
  )
}

export default Navbar