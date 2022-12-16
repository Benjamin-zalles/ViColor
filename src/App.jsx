import "./App.css";
import "./style-components/hamburger.css";
import { useState, useEffect } from "react";
import { Link, Route, Routes, NavLink, useLocation } from "react-router-dom";
import Modal from "../src/components/Modal";
import Home from "./pages/Home";
import Color from "./pages/Color";
import Tipografia from "./pages/Tipografia";
import NotFoundPage from "./pages/NotFoundPage";
import ColorWeb from "./pages/ColorWeb";
import ContrastRatio from "./pages/ContrastRatio";
import Hamburguer from "./components/Hamburguer";
import { BiHomeAlt, BiPalette, BiFontFamily } from "react-icons/bi";
import facebook from "../src/assets/facebook.svg";
import whatsapp from "../src/assets/whatsapp.svg";
import instagram from "../src/assets/instagram.svg";
import vicolorFooter from "../src/assets/vicolor-footer.svg";

import toast, { Toaster } from 'react-hot-toast';

// Import imagenes
import lapizAcro from "./assets/home/lapiz-acro.png";
import lapizProta from "./assets/home/lapiz-prota.png";
import lapizDeuta from "./assets/home/lapiz-deuta.png";
import lapizTrita from "./assets/home/lapiz-trita.png";

// Import SVG
import palettAcro from "./assets/home/palett-acro.svg";
import palettProta from "./assets/home/palett-prota.svg";
import palettDeuta from "./assets/home/palett-deuta.svg";
import palettTrita from "./assets/home/palett-trita.svg";

import { FaCheckCircle } from "react-icons/fa";

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

  // estado modal
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  return (
    <>
    <Toaster
      position='bottom-center'
    />
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
                className={({ isActive }) =>
                  isActive ? "activePage" : "noActive"
                }
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
                className={({ isActive }) =>
                  isActive ? "activePage" : "noActive"
                }
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
                className={({ isActive }) =>
                  isActive ? "activePage" : "noActive"
                }
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
            <Route
              index
              element={
                <Home
                  fun1={() => setModal1(!modal1)}
                  fun2={() => setModal2(!modal2)}
                  fun3={() => setModal3(!modal3)}
                  fun4={() => setModal4(!modal4)}
                />
              }
            />
            <Route path="/" element={<Home />} />
            <Route path="/color" element={<Color />}>
              <Route index element={<ColorWeb />} />
              <Route path="contrast-ratio" element={<ContrastRatio
              
                funCopy={() => toast(`Color Copiado`, {icon: <FaCheckCircle size='30px' color='green'/>, style: {fontSize: '12px'}})}
                // () => toast("Texto Copiado", {position: 'bottom-right'})
              />} />
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

      <div>
        <Modal
          estado={modal1}
          cambiarEstado={setModal1}
          imgDal={lapizAcro}
          title="Acromatismo"
          parrafo="Cuenta con la ausencia de los tres tipos de conos que el ojo humano requiere para ver a color, esto explica su imposibilidad de detectar las distintas longitudes de onda de luz, produciendoles una visión a blanco y negro."
          colorAusente="VERDE ROJO AZUL"
          palettColor={palettAcro}
        />
        <Modal
          estado={modal2}
          cambiarEstado={setModal2}
          imgDal={lapizProta}
          title="Protanopía"
          parrafo="Se produce por la ausencia de fotorreceptores retinianos rojos y provoca dificultades para distinguir entre azul y verde y entre rojo y verde. Está presente en el 10% de los hombres."
          colorAusente="ROJO"
          palettColor={palettProta}
        />
        <Modal
          estado={modal3}
          cambiarEstado={setModal3}
          imgDal={lapizDeuta}
          title="Deuteranopía"
          parrafo="Afecta a la discriminación de tonos de manera similar a la protanopia, pero sin el efecto de atenuación. Una vez más, se encuentra en aproximadamente el 10% de la población masculina."
          colorAusente="VERDE"
          palettColor={palettDeuta}
        />
        <Modal
          estado={modal4}
          cambiarEstado={setModal4}
          imgDal={lapizTrita}
          title="Tritanopía"
          parrafo="Una alteración muy rara de la visión del color en la que solo están presentes los pigmentos del cono rojo y verde, con una ausencia total de receptores retinianos azules. Los azules aparecen verdosos, los amarillos y los naranjas parecen rosados ​​y los colores púrpuras aparecen de color rojo intenso."
          colorAusente="AZUL"
          palettColor={palettTrita}
        />
      </div>
    </>
  );
}

export default App;
