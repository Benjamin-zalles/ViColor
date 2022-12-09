import "../style-pages/colorweb.css";

// Import components
import Boton from "../components/Boton";

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

// Import imagenes
import relacionDeContraste from "../img/relacion-de-contraste.png";
import formula from "../img/formula.png";

export default function ColorWeb() {
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
          <img src={formula} alt="formula luminancia relativa"/>
          <p>
            En palabras simples según la{" "}
            <a className="enlace-w3"
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
    </>
  );
}
