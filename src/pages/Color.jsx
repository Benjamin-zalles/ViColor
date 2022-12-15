import { NavLink, Outlet } from "react-router-dom";
import "../style-pages/color.css";
import "../style-pages/contrastRatio.css";

// import {calculateColor} from './ContrastRatio';



export default function Color() {  
  return (
    <>
      <div className="header-colors">
        <NavLink
          to="/color"
          className={({ isActive }) => (isActive ? "enlaceActivo" : "enlaceNoActivo1")}
          end
        >
          <span className="cambiar-color2">Color en la web</span>
        </NavLink>
        <NavLink
          to="contrast-ratio"
          className={({ isActive }) => (isActive ? "enlaceActivo" : "enlaceNoActivo2")}
        >
          <span className="cambiar-color3">Contrast ratio</span>
        </NavLink>
        {/* <NavLink
          to="consulta-de-color"
          className={({ isActive }) => (isActive ? "enlaceActivo" : "")}
        >
          <span className="cambiar-color">Consulta de color</span>
        </NavLink> */}
      </div>

      <div className="contenido-colors">
        <Outlet />
      </div>
    </>
  );
}
