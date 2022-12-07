import "./App.css";
import "./style-components/hamburger.css";
import { useState, useEffect } from "react";
import { Link, Route, Routes, NavLink, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Color from "./pages/Color";
import Tipografia from "./pages/Tipografia";
import NotFoundPage from "./pages/NotFoundPage";
import ColorWeb from "./pages/ColorWeb";
import ContrastRatio from "./pages/ContrastRatio";
// import ConsultaDeColor from "./pages/ConsultaDeColor";
// import Consulta from "./pages/Consulta";
import Hamburguer from "./components/Hamburguer";
import { BiHomeAlt, BiPalette, BiFontFamily } from "react-icons/bi";
import facebook from "../src/assets/facebook.svg";
import whatsapp from "../src/assets/whatsapp.svg";
import instagram from "../src/assets/instagram.svg";
import vicolorFooter from "../src/assets/vicolor-footer.svg";

function App() {
  const [clicked, setClicked] = useState(false);
  const handleClick = () => {
    setClicked(!clicked);
  };
  // Seleccionamos el ancho del viewport
  const windowWidth = window.innerWidth;
  // Agregamos la clase remove icon para remover los iconos a menos de 700 en el viewport
  const removeIcons = () => {
    return windowWidth < 700 ? "remove-icon" : "";
  };

  const location = useLocation();
  const [displayLocation, setDisplayLocation] = useState(location);

  const [transitionStage, setTransistionStage] = useState("fadeIn");

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage("fadeOut");
  }, [location, displayLocation]);

  return (
    <div className="App">
      <header className="header" id="header">
        <h1>ViColor</h1>
      </header>

      <Hamburguer clicke={clicked} handleClick={handleClick} />

      <nav className={`navbar ${clicked ? "on" : ""}`}>
        <ul className="nav-list">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "activePage" : "noActive")}
              end
            >
              <BiHomeAlt
                type="solid"
                size="30px"
                color="#00EFD8"
                className={removeIcons()}
              />
              Inicio
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/color"
              className={({ isActive }) => (isActive ? "activePage" : "noActive")}
            >
              <BiPalette
                size="30px"
                color="#00EFD8"
                className={removeIcons()}
              />
              Color
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/tipografia"
              className={({ isActive }) => (isActive ? "activePage" : "noActive")}
              end
            >
              <BiFontFamily
                type="solid"
                size="30px"
                color="#00EFD8"
                className={removeIcons()}
              />
              Tipografia
            </NavLink>
          </li>
        </ul>
      </nav>

      <main
        className={`main-content ${transitionStage}`}
        onAnimationEnd={() => {
          if (transitionStage === "fadeOut") {
            setTransistionStage("fadeIn");
            setDisplayLocation(location);
          }
        }}
      >
        <Routes location={displayLocation}>
          <Route index element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/color" element={<Color />}>
            <Route index element={<ColorWeb />} />
            <Route path="contrast-ratio" element={<ContrastRatio />} />
            {/* <Route path="consulta-de-color" element={<ConsultaDeColor />} /> */}
          </Route>
          <Route path="/tipografia" element={<Tipografia />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="level-content-one">
          <div className="level-content-two">
            <div className="level-content-three">
              <div className="level-three-text">
                <h3>Enlaces Rápidos</h3>
                <Link to="/color">Uso del color</Link>
                <Link to="/color/contrast-ratio">Contrast Ratio</Link>
                <Link to="/tipografia">Tipografía</Link>
                <Link to="/">Inicio</Link>
              </div>
              <div className="level-three-text">
                <h3>Contacto</h3>
                <p>Phone: 76123494</p>
                <p>E-mail: vicolor@gmail.com</p>
                <div>
                  <img src={facebook} alt="facebook" />
                  <img src={whatsapp} alt="facebook" />
                  <img src={instagram} alt="facebook" />
                </div>
              </div>
            </div>
          </div>
          <div className="level-content-two">
            <img src={vicolorFooter} alt="" />
          </div>
        </div>
        <h1>
          Copyright © 2022 - <span>creatur</span>
        </h1>
      </footer>
    </div>
  );
}

export default App;
