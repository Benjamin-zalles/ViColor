import React from "react";
import { Link } from "react-router-dom";
import circle1 from "../assets/tipografia/circleType1.svg";
import circle2 from "../assets/tipografia/cricleType2.svg";
import "../style-pages/tipografia.css";
import { BiX, BiCheck } from "react-icons/bi";

export default function Tipografia() {
  return (
    <>
      <div className="tipografia-content-one">
        <div className="container-type-img">
          <div className="type-img1">
            <img src={circle1} className="img-type-1" />
          </div>
          <div className="type-img2">
            <img src={circle2} className="img-type-2" />
          </div>
        </div>
        <div className="container-text-tipografia">
          <h1>Manejo de Tipografía</h1>
          <p>
            La tipografía es la gran salvadora al momento de comunicar lo que el
            color no puede hacer, la gran mayoría de las personas pueden leer y
            de esa manera poder ejecutar acciones o tomar decisiones dentro de
            un producto digital.
          </p>
        </div>
      </div>
      {/* segundo contenido */}
      <div className="tipografia-content-two">
        <div className="tipografia-two-text">
          <div className="tipografia-p-1">
            <p>
              Antes que nada la tipografía para que sea 100% efectiva requiere
              que cumplir la relación de contraste (contrast ratio).
            </p>
          </div>
          <div className="tipografia-p-2">
            <p>¿Por que? </p>
            <p>
              El hecho es, si no existe buen contraste de color puede dificultar
              la lectura hasta del más grande texto.
            </p>
            <Link to="/color/contrast-ratio">Ir a Contrast Ratio</Link>
          </div>
        </div>
        <div className="tipografia-two-text-large">
          <div className="large-type-1">
            <p>correcto</p>
            <h2>Aa</h2>
          </div>
          <div className="large-type-2">
            <p>Incorrecto</p>
            <h2>Aa</h2>
          </div>
        </div>
      </div>
      {/* tercer contenido  */}
      <div className="tipografia-content-three">
        <h1>¿Qué tipografía debo de elegir?</h1>
        <div className="tipografia-three-text">
          <div className="t-t-1">
            <p>
              En forma resumida, mayormente los tipos San Serif son las más
              escogidas para la web en textos grandes como título y párrafos
              cortos, mientras la Seríf en textos más largos o lectura.
            </p>
          </div>
          <div className="t-t-2">
            <p>
              La tipografía son los elementos para representar algo
              estéticamente correcto y legible, elegir una hoy en día, que se
              adecue a la personalidad de tu sitio web ya no es tan complicado,
              ya que existen fuentes seguras para elegir.
            </p>
            <p>
              La elección y el uso que le des en tu sitio web podrá causar un
              efecto positivo sobre el usuario que la visita o, al contrario
              hará que se aleje de la página web.
            </p>
          </div>
        </div>
      </div>

      {/* cuarto contenido */}
      <div className="tipografia-content-four">
        <div className="fallo-contraste-text">
          <h3>Evita malos contrastes entre texto y fondo</h3>
          <p>
            Si usas dos colores de la misma temperatura (azul y púrpura, rojo y
            verde, naranja y rojo, entre otros.) que además tienen un matiz
            similar, es muy probable que sean difícil de diferenciar para una
            persona daltónica.
          </p>
        </div>
        <div className="fallo-contraste-normal">
          <div className="fallo-n-1">
            <p className="f-p">Texto Normal</p>
            <div className="f-n-1">
              <p>Con un alto contraste de color todo es más fácil de leer</p>
              <BiX size="70px" color="white" />
            </div>
          </div>
          <div className="fallo-n-1">
            <p className="f-p">Texto Normal</p>
            <div
              className="f-n-1"
              style={{
                background: "#244F6F",
                color: "#ffffff",
              }}
            >
              <p>Con un alto contraste de color todo es más fácil de leer</p>
              <BiCheck size="70px" color="white" />
            </div>
          </div>
        </div>
        <div className="fallo-contraste-grande">
          <div className="fallo-g-1">
            <p className="f-p-2">Texto Grande</p>
            <div className="f-g-1">
              <p>Con un alto contraste de color todo es más fácil de leer</p>
              <BiX size="70px" color="white" />
            </div>
          </div>
          <div className="fallo-g-1">
            <p className="f-p-2">Texto Grande</p>
            <div
              className="f-g-1"
              style={{
                background: "#244F6F",
                color: "#ffffff",
              }}
            >
              <p>Con un alto contraste de color todo es más fácil de leer</p>
              <BiCheck size="70px" color="white" />
            </div>
          </div>
        </div>
      </div>

      {/* quinto contenido */}
      <div className="tipografia-content-five">
        <h2>
          Existen algún par de reglas para que la tipografía cumpla los
          criterios de accesibilidad en la web.
        </h2>
        <div className="tipografia-regla">
          <div className="caja-type tamaño-letra c-dark">
            <p>
              Tamaño de <span>Letra</span>
            </p>
          </div>
          <div className="caja-type espacio c-cyan">
            <p>Espacio </p>
            <p>entre lineas</p>
          </div>
          <div className="caja-type kerning c-dark">
            <p>Kerning</p>
          </div>
          <div className="caja-type interletrado c-cyan">
            <p>Interletrado</p>
          </div>
          <div className="caja-type contraste-t c-dark">
            <p>Contraste</p>
          </div>
          <div className="caja-type tipos c-cyan">
            <p>
              Maximos <span className="child1">de</span> <span className="child2">tipos</span>
            </p>
          </div>
          <div className="caja-type mayusculas c-dark">
            <p>MAYUSCULAS</p>
          </div>
        </div>
      </div>
    </>
  );
}
