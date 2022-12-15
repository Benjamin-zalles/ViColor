import { useState } from "react";

import "../style-pages/colorweb.css";
import hexColorArray from "../functions/colors";
import colorNames from "../functions/colorName";
import BlindColor from "../functions/blind";
// import Tippy from "@tippyjs/react";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

// Import components
import Boton from "../components/Boton";
import CardPolera from "../components/CardsPoleras";

//Import svg
import visionNormal from "../assets/color/vision-normal.svg";
import visionDeuta from "../assets/color/vision-deuteranopia.svg";
import visionProta from "../assets/color/vision-protanopia.svg";
import modoNormal from "../assets/color/modo-normal.svg";
import modoProta from "../assets/color/modo-protanopia.svg";
import circleFill2 from "../assets/color/circle-fill.svg";
import circlePoints2 from "../assets/color/circle-points.svg";
import circleStroke2 from "../assets/color/circle-stroke.svg";
import circleStroke22 from "../assets/color/circle-stroke2.svg";
import circleWhite2 from "../assets/color/circle-white.svg";
import circleStrokes2 from "../assets/color/circles-strokes.svg";
import line2 from "../assets/color/line.svg";
import medioArco2 from "../assets/color/medio-arco.svg";
import trianguloStroke2 from "../assets/color/triangulo-stroke.svg";
import triangulo2 from "../assets/color/triangulo.svg";
import PoleraRoja from "../assets/color/Polera-roja.svg";
import PoleraVerde from "../assets/color/Polera-verde.svg";
import PoleraAzul from "../assets/color/Polera-azul.svg";

// Import imagenes
import relacionDeContraste from "../img/relacion-de-contraste.png";
import formula from "../img/formula.png";

export default function ColorWeb() {
  function HexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  }
  function RgbToHEX(r, g, b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);

    if (r.length == 1) {
      return (r = "0" + r);
    }

    if (g.length == 1) {
      return (g = "0" + g);
    }

    if (b.length == 1) {
      return (b = "0" + b);
    }
    return "#" + r + g + b;
  }
  function ColorBlindDeuta(colorHex) {
    const inputColor = HexToRGB(colorHex);
    const trasnform = BlindColor.deuteranopia(
      inputColor.r,
      inputColor.g,
      inputColor.b
    );
    const R = trasnform.r;
    const G = trasnform.g;
    const B = trasnform.b;

    return RgbToHEX(R, G, B);
  }

  const [click, setClick] = useState(false);
  const handleClickBtn = () => {
    setClick(!click);
  };

  return (
    <>
      {/* PRIMER CONTENIDO */}
      <div className="colorweb-content-one">
        <div className="one-svg">
          <div className="colorweb-content-one-svg">
            <img src={circleFill2} className="svg1" />
            <img src={circlePoints2} className="svg2" />
            <img src={circleStroke2} className="svg3" />
            <img src={circleStroke22} className="svg4" />
            <img src={circleWhite2} className="svg5" />
            <img src={circleStrokes2} className="svg6" />
            <img src={line2} className="svg7" />
            <img src={medioArco2} className="svg8" />
            <img src={trianguloStroke2} className="svg9" />
            <img src={triangulo2} className="svg10" />
          </div>
        </div>
        <div className="colorweb-content-one-text">
          <h1>Uso del color en la web</h1>
          <p>
            El daltonismo es una deficiencia de la visión que afecta a un gran
            número de personas en todo el mundo. Ya sea que lo sepamos o no,
            nosotros como diseñadores tenemos un gran impacto en su vida diaria
            a través del trabajo que creamos y desarrollamos a nuestro
            alrededor.
          </p>
        </div>
      </div>

      {/* SEGUNDO CONTENIDO */}
      <div className="colorweb-content-two">
        <div className="colorweb-content-two-text">
          <h2>El color</h2>
          <p>
            Muchos diseñadores, desarrolladores, creadores de contenidos y otras
            personas que se involucran en el diseño de páginas se lo toman la
            percepción del color a la ligera, por lo cual es importante recordar
            que existe un gran porcentaje de la población que tiene problemas
            visuales relacionados con la percepción del color, como daltonismo.
          </p>
        </div>
        <div className="colorweb-content-two-forms">
          <div className="colorweb-forms">
            <div>
              <img src={visionNormal} alt="" />
            </div>
            <h5>Normal</h5>
          </div>
          <div className="colorweb-forms">
            <h5>Deuteranopía</h5>
            <div>
              <img src={visionDeuta} alt="" />
            </div>
          </div>
          <div className="colorweb-forms">
            <div>
              <img src={visionProta} alt="" />
            </div>
            <h5>Protanopía</h5>
          </div>
        </div>
      </div>

      {/* TERCER CONTENIDO */}
      <div className="colorweb-content-three">
        {/* texto */}
        <div className="colorweb-content-three-text">
          <div>
            <h2>Malas combinaciones</h2>
            <p>
              Estas son algunas de las combinaciones que se debe de evitar
              porque dependiendo del tipo de daltonismo, no podrán diferenciar
              poco o casi nada.
            </p>
          </div>
          <div>
            <h3>
              Habitualmente, <span>la COMBINACIÓN</span> de colores más crítica
              es la <span>ROJA y VERDE.</span>
            </h3>
            <div className="normal-protanopia">
              <div>
                <h5>Normal</h5>
                <img src={modoNormal} alt="modo normal" />
              </div>
              <div>
                <h5>Protanopía</h5>
                <img src={modoProta} alt="modo protanopía" />
              </div>
            </div>
          </div>
        </div>
        {/* cards */}
        <div className="colorweb-content-three-cards">
          <div className="cards-column">
            <div className="card-background-turquoise">
              <h2>ROJO Y VERDE</h2>
            </div>
            <div className="card-background-dark">
              <h2>ROJO Y VERDE</h2>
            </div>
            <div className="card-background-turquoise">
              <h2>ROJO Y VERDE</h2>
            </div>
          </div>
          <div className="cards-column">
            <div className="card-background-dark">
              <h2>AZUL Y MORADO</h2>
            </div>
            <div className="card-background-turquoise">
              <h2>AZUL Y MORADO</h2>
            </div>
            <div className="card-background-dark">
              <h2>AZUL Y MORADO</h2>
            </div>
          </div>
        </div>
      </div>

      {/* CUARTO CONTENIDO */}
      <div className="colorweb-content-four">
        <div className="colorweb-content-four-one">
          <h2>Relación de contraste</h2>
          <p>
            Uno de los primeros requerimientos en la web y el mas importante,
            tiene que exisitir el contraste entre colores. Esto ayuda a ciertas
            personas que no pueden ver ciertos colores o que no ven ninguno.
          </p>
          <p>
            Según la WCAG el nivel AAA requiere una relación de contraste de al
            menos 7:1 para texto normal y 4,5:1 para texto grande.
          </p>
          <img src={relacionDeContraste} alt="escala de contraste" />
        </div>
        <div className="colorweb-content-four-two">
          <img src={formula} alt="formula luminancia relativa" />
          <p>
            En palabras simples según la{" "}
            <a
              className="enlace-w3"
              href="https://www.w3.org/TR/WCAG20/#contrast-ratiodef"
              target="_blank"
            >
              w3.org
            </a>{" "}
            se calcula utilizando la luminancia relativa de los colores, en
            términos simples el negro más oscuro tiene una luminancia relativa
            de 0 y el blanco tiene una luminancia relativa de 1 y esto se puede
            aplicar con cualquier color, no solamente con escala de grises.
          </p>
          <Boton direction="contrast-ratio" />
        </div>
      </div>

      {/*   quinto contenido */}
      <div className="colorweb-content-five">
        <h3>Etiqueta de colores </h3>
        <p>
          Que pasa cuando se requiere el color en ciertas tomas de decisión del
          usuario, pero justo nuestro visitante tiene daltonismo. Existen formas
          descriptivas muy simples para que esto sea capaz, como por ejemplo en
          un e-commerce o compra por internet, solo hace falta describir el
          color del producto.
        </p>
        <div className="content-poleras">
          <CardPolera polera={PoleraRoja} colorPolera="Roja" />
          <CardPolera polera={PoleraVerde} colorPolera="Verde" />
          <CardPolera polera={PoleraAzul} colorPolera="Azul" />
        </div>
      </div>

      {/* SEXTO CONTENIDO */}
      <div className="colorweb-content-six">
        <div className="content-six-text">
          <h3>Subraya enlaces </h3>
          <p>
            La mayoría de las páginas webs al usar enlaces usan el color azul
            para identificarlo, un ejemplo de ello es Wikipedia.
          </p>{" "}
          <br />
          <p>
            Entonces, alguien con monocromía no podrá diferenciar entre el texto
            y el texto de un enlace en absoluto y tendría que desplazarse sobre
            el texto para ver si el cursor cambia a un puntero, lo cual hace que
            sea complicado la navegación por el sitio web.
          </p>
        </div>
        <div className="content-six-example">
          <p>
            La <span className="sin-raya">retina</span> humana posee{" "}
            <span className="sin-raya">pigmentos</span> que permiten que los más
            diversos colores sean diferenciados por el ojo.
          </p>
          <p>
            La retina humana posee pigmentos que permiten que los más diversos
            colores sean diferenciados por el ojo.
          </p>
          <p>
            La <span className="con-raya">retina</span> humana posee{" "}
            <span className="con-raya">pigmentos</span> que permiten que los más
            diversos colores sean diferenciados por el ojo.
          </p>
        </div>
      </div>

      {/* SEPTIMO CONTENIDO */}

      {/* OCTAVO CONTENIDO */}
      <div className="colorweb-content-eight">
        <div className="colorweb-eight-text">
          <h2>Lectura de Colores con el Mouse</h2>
          <p>
            Una propuesta de diseño también puede ser la implementación de
            lectura de los elementos al momento que estos interactúen con el
            cursor del mouse como un efecto hover, que puede implementarse en la
            parte del desarrollo.
          </p>
        </div>

        <div className="colorweb-eight-colors">
          <div className="colorweb-eight-colors-btn">
            <button onClick={handleClickBtn}>Normal</button>
            <button
              onClick={handleClickBtn}
              style={{
                background: click ? "white" : null,
              }}
            >
              Deuteranopia
            </button>
          </div>
          <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              width: "100%",
            }}
          >
            {hexColorArray.map((col, index) => (
              <Tippy
                content={colorNames.filter((n, id) => index === id)}
                key={index}
              >
                <li
                  className="lista-colors"
                  key={index}
                  style={{
                    // background: ColorBlindProta(col),
                    background: click ? ColorBlindDeuta(col) : col,
                  }}
                >
                  {col}
                </li>
              </Tippy>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}
