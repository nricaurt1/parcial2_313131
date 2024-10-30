import { Route, Routes } from "react-router-dom"
import { Inicio } from "../../componentes/contenedor/Inicio"
import { Registrar } from "../../componentes/equipos/Registrar"
import { Listar } from "../../componentes/equipos/Listar"
import { Administrar } from "../../componentes/equipos/Administrar"
import { Quienes } from "../../componentes/otros/Quienes"
import { NoEncontrado } from "../../componentes/contenedor/NoEncontrado"

export const Ruteo = () => {
    return (
        <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/registrar" element={<Registrar />} />
            <Route path="/listar" element={<Listar />} />
            <Route path="/administrar" element={<Administrar />} />
            <Route path="/quienes" element={<Quienes />} />
            <Route path="*" element={<NoEncontrado />} />
        </Routes>
    )
}
