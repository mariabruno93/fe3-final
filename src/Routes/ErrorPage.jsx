import { Link } from "react-router-dom";

const ErrorPage = () => { 
    return (
        <>
        <div>La pagina no se ha encontrado</div>
        <button>
            <Link to="/">Volver a la página principal</Link>
        </button>
        </>
    )

}

export default ErrorPage;