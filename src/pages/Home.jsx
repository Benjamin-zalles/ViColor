import React from "react";

// import components
import CardsDal from "../components/CardsDal";

// import styles
import "../style-pages/home.css";

// import images
import imgAcro from "../img/img-acro.png";
import imgProta from "../img/img-prota.png";
import imgDeuta from "../img/img-deuta.png";
import imgTrita from "../img/img-trita.png";
import imgIshihara1 from "../img/ishihara-img1.png";
import imgIshihara2 from "../img/ishihara-img2.png";
import imgIshihara3 from "../img/ishihara-img3.png";

// import svg
import circleFill from "../assets/home/circle-fill.svg";
import circlePoints from "../assets/home/circle-points.svg";
import circleStroke from "../assets/home/circle-stroke.svg";
import circle from "../assets/home/circle.svg";
import circlesStroke from "../assets/home/circles-stroke.svg";
import curve from "../assets/home/curve.svg";
import mediaLuna from "../assets/home/media-luna.svg";
import next from "../assets/home/next.svg";
import trianguloContorno from "../assets/home/triangulo-contorno.svg";
import trianguloLineas from "../assets/home/triangulo-lineas.svg";
import circleOjo from "../assets/home/circle-ojo.svg";
import mediaLunaOjo from "../assets/home/media-luna-ojo.svg";

// import iconos de react icons
import { RiArrowDropDownLine } from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className="home-primary-content">
        <div className="home-primary-content-text">
          <h1 className="title-home-vicolor">ViColor</h1>
          <h4>
            ViColor es un sitio creado para brindar información acerca del uso
            correcto del color para la deficiencia visual.
          </h4>
          <p>
            Tomando en cuenta a las personas que sufren de discromatopsia (la
            cual es, la incapacidad de distinguir ciertas tonalidades de la gama
            cromática).
          </p>
        </div>

        <div className="home-primary-content-figure">
          <img src={circleFill} className="form-home circle-fill" />
          <img src={circlePoints} className="form-home circle-points" />
          <img src={circleStroke} className="form-home circle-stroke" />
          <img src={circle} className="form-home circle" />
          <img src={circlesStroke} className="form-home circles-stroke" />
          <img src={curve} className="form-home curve" />
          <img src={mediaLuna} className="form-home media-luna" />
          <img src={next} className="form-home next" />
          <img src={trianguloContorno} className="form-home triangulo-stroke" />
          <img src={trianguloLineas} className="form-home triangulo-lineas" />
        </div>
      </div>

      {/* CONTENIDO SECUNDARIO */}
      <div className="home-secundary-content">
        <div className="home-secundary-content-text1">
          <div className="text1-one">
            <h2>¿Qué es el Daltonismo?</h2>
            <p>
              El daltonismo es una insuficiencia visual que inhabilita la
              capacidad de distinguir varios colores. Como resultado de la
              transmisión hereditaria, el daltonismo deriva de una deficiencia
              genética asociada con el cromosoma X.
            </p>
            <p>
              La condición a menudo se denomina daltonismo, en honor a John
              Dalton, el científico que, en el siglo XVIII, describió por
              primera vez la patología y que era daltónico.
            </p>
          </div>
          <div className="text1-two">
            <h3>
              El <span>daltonismo</span> tiene un origen <span>genético</span>
              relacionado con el cromosoma <span>X.</span>
            </h3>
          </div>
        </div>

        <div className="home-secundary-content-text2">
          <h3>
            Afecta aproximadamente a 1 de cada 12 hombres y 1 de cada 200
            mujeres.
          </h3>
        </div>
      </div>

      {/* CONTENIDO TERCIARIO */}
      <div className="home-tertiary-content">
        <h1>Tipos de daltonismo</h1>
        <p>
          Afecta a la discriminación de tonos de manera similar a la protanopia,
          pero sin el efecto de atenuación. Una vez más, se encuentra en
          aproximadamente el 10% de la población masculina.
        </p>
        <div className="arrows">
          <RiArrowDropDownLine
            size="50px"
            color="#2D2D2D"
            className="arrow-one"
          />
          <RiArrowDropDownLine
            size="50px"
            color="#2D2D2D"
            className="arrow-two"
          />
          <RiArrowDropDownLine
            size="50px"
            color="#2D2D2D"
            className="arrow-three"
          />
        </div>
        <h3>Estos son los tipos de daltonismo más comunes</h3>

        <div className="home-tertiary-content-cards">
          <CardsDal imgType={imgAcro} typeBlind="Acromático" />
          <CardsDal imgType={imgProta} typeBlind="Protanopía" />
          <CardsDal imgType={imgDeuta} typeBlind="Deuteranopía" />
          <CardsDal imgType={imgTrita} typeBlind="Tritanopía" />
        </div>
      </div>

      {/* CUARTO CONTENIDO */}
      <div className="home-fourth-content">
        <h2>
          El test de <span>Ishihara</span> diagnostica las alteraciones del
          color
        </h2>
        <div className="ishihara-content">
          <div className="ishihara-content-text">
            <h3>Pruebas de deficiencia de la visión del color.</h3>
            <p>
              El test de Ishihara es una de las pruebas más utilizadas para
              diagnosticar y clasificar las alteraciones de la visión del color
              (discromatopsias), comúnmente conocidas como daltonismo.
            </p>
            <p>
              Existen varios tipos de pruebas que se utilizan para diagnosticar
              el daltonismo, siendo la más utilizada:
            </p>
            <h3>Test De Ishihara</h3>
            <p>
              La prueba de Ishihara, en la que se le pide que identifique
              números contenidos en imágenes formadas por puntos de diferentes
              colores.
            </p>
          </div>
          <div className="ishihara-content-svg">
            <img src={circleOjo} className="circle-ojo" />
            <img src={mediaLunaOjo} className="media-luna-ojo" />
          </div>
        </div>
      </div>

      {/* IMAGENES ISHIHARA */}
      <div className="ishihara-img1">
        <img src={imgIshihara1} alt="Test de ishihara" />
        <h3>Text de Ishihara</h3>
      </div>
      <div className="ishihara-img2and3">
        <div>
          <img src={imgIshihara2} alt="Test de ishihara" />
        </div>
        <div>
          <img src={imgIshihara3} alt="Test de ishihara" />
        </div>
      </div>
    </>
  );
}
