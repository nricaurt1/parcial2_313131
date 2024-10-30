import { NavLink } from "react-router-dom"
import logo from "../../../../public/image.ico"

export const Cabecera = () => {
  return (
    <>
      <nav className="navbar bg-primary border-bottom border-body" data-bs-theme="dark">
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              <img src={logo} alt="logo" width="32" height="32"/>
            </a>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <NavLink className="nav-item nav-link active" aria-current="page" to="/">Inicio</NavLink>
                <NavLink className="nav-item nav-link active" aria-current="page" to="/seleccionables">Seleccionables</NavLink>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toogle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">Equipos</a>
                  <ul className="dropdown-menu">
                    <NavLink className="nav-item nav-link dropdown-item" to="/registrar">Registrar Equipo</NavLink>
                    <NavLink className="nav-item nav-link dropdown-item" to="/listar">Listar Equipos</NavLink>
                    <NavLink className="nav-item nav-link dropdown-item" to="/administrar">Administrar Equipos</NavLink>
                  </ul>
                </li>
                <NavLink className="nav-item nav-link active" aria-current="page" to="/quienes">Quiénes Somos</NavLink>
              </div>
            </div>
          </div>
        </nav>
       </nav>
    </>
  )
}
