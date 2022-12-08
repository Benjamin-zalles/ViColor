import { HexColorPicker } from "react-colorful";
import { useState } from "react";
import "../style-pages/contrastRatio.css";
import calculateContrast from "../functions/luminanceRelative";

import {
  FaApple,
  FaHome,
  FaShoppingCart,
  FaHamburger,
  FaSnapchatGhost,
  FaCircle,
  FaStop,
  FaStar,
  FaSpinner,
  FaBacon,
} from "react-icons/fa";

export function calculateColorBlack0rWhite(co) {
  const net = new brain.NeuralNetwork();
  net.train([
    { input: { rojo: 0, verde: 0, azul: 0 }, output: { color: 1 } },
    { input: { rojo: 1, verde: 1, azul: 1 }, output: { color: 0 } },
    { input: { rojo: 0, verde: 1, azul: 0 }, output: { color: 0 } },
    { input: { rojo: 0.34, verde: 0.34, azul: 0.34 }, output: { color: 1 } },
    { input: { rojo: 0.83, verde: 0.25, azul: 1 }, output: { color: 0 } },
    { input: { rojo: 0.54, verde: 0.29, azul: 0.7 }, output: { color: 1 } },
  ]);

  // Cambiando de hexadecimal a RGB
  function hexToRgb(h) {
    let r = 0,
      g = 0,
      b = 0;

    if (h.length == 4) {
      r = "0x" + h[1] + h[1];
      g = "0x" + h[2] + h[2];
      b = "0x" + h[3] + h[3];
    } else if (h.length == 7) {
      r = "0x" + h[1] + h[2];
      g = "0x" + h[3] + h[4];
      b = "0x" + h[5] + h[6];
    }

    return [parseInt(r), parseInt(g), parseInt(b)];
  }

  const colorRGB = hexToRgb(co);
  const entrada = {
    rojo: colorRGB[0] / 255,
    verde: colorRGB[1] / 255,
    azul: colorRGB[2] / 255,
  };

  const resultado = net.run(entrada);
  const colorWhiteOrBlack = resultado.color > 0.5 ? "colorWhite" : "colorBlack";

  return colorWhiteOrBlack;
}

export default function ContrastRatio() {
  const [color, setColor] = useState("#00EFD8"); //#2D2D2D
  const [color2, setColor2] = useState("#14474B");
  const [texto, setTexto] = useState("Escribe tu propio título aquí");
  // Accediendo al body y pathname de la url para cambiar el background del body
  function cambiarBackgroundBody() {
    const myBody = document.querySelector(".body");
    const URLactual = window.location;
    if (URLactual.pathname === "/color/contrast-ratio") {
      myBody.style.background = color;
    } else {
      myBody.style.background = "#2D2D2D";
    }
  }
  cambiarBackgroundBody();

  const checkColor = calculateContrast(color, color2);
  const levelAANormal = (n) => {
    if (n < "4.05") {
      return "Fallo";
    } else {
      return "Bien";
    }
  };

  const levelAALarge = (n) => {
    if (n < "3") {
      return "Fallo";
    } else {
      return "Bien";
    }
  };

  const borderInputColor = calculateColorBlack0rWhite(color) === 'colorBlack' ? 'boderBlack' : 'borderWhite'



  return (
    <>
      <div className="contrastRatio-content-one">
        <div className="contrastRatio-text-and-forms">
          <div className="text-c-r">
            <textarea
              name="textarea"
              cols="30"
              rows="10"
              className="textarea"
              maxLength="35"
              value={texto}
              onChange={(e) => setTexto(e.target.value)}
              style={{
                color: color2,
              }}
            ></textarea>
            <p style={{ color: color2 }}>
              El color es la impresión producida por un tono de luz en los
              órganos visuales, o más exactamente, es una percepción visual que
              se genera en el cerebro de los humanos y otros animales al
              interpretar las señales nerviosas
            </p>
          </div>
          <div className="container-draw">
            <div className="contrastRatio-forms">
              <FaCircle size="60px" color={color2} />
              <FaStop size="60px" color={color2} />
              <FaStar size="60px" color={color2} />
              <FaSpinner size="60px" color={color2} />
              <FaBacon size="60px" color={color2} />
            </div>
            <div className="contrastRatio-icons">
              <FaApple size="60px" color={color2} />
              <FaHome size="60px" color={color2} />
              <FaHamburger size="60px" color={color2} />
              <FaSnapchatGhost size="60px" color={color2} />
              <FaShoppingCart size="60px" color={color2} />
            </div>
          </div>
        </div>
        {/* color picker constrast ratio*/}
        <div className="contrastRatio-color-picker">
          {/* selectores de color para text y fondo */}
          <div className="color-picker">
            <div className="picker-fondo picker-r">
              <div>
                <h2 className={calculateColorBlack0rWhite(color)}>Fondo</h2>
                <HexColorPicker color={color} onChange={setColor}/>
              </div>
              <input
                onChange={(e) => setColor(e.target.value)}
                value={color}
                className={`input-c ${calculateColorBlack0rWhite(color)} ${borderInputColor}`}
              />
            </div>
            <div className="picker-texto picker-r">
              <div>
                <h2 className={calculateColorBlack0rWhite(color)}>Texto</h2>
                <HexColorPicker color={color2} onChange={setColor2} />
              </div>
              <input
                onChange={(e) => setColor2(e.target.value)}
                value={color2}
                className={`input-c ${calculateColorBlack0rWhite(color)} ${borderInputColor}`}
              />
            </div>
          </div>

          {/* resultados */}
          <div className="t-c-r">
            <table
              className={`tabla-contrast ${calculateColorBlack0rWhite(color)}`}
              border="1"
              style={{
                border: "1px solid",
                borderCollapse: "collapse",
                overflow: "hidden",
              }}
            >
              <thead>
                <tr className={calculateColorBlack0rWhite(color)}>
                  <th
                    style={{
                      border: "1px solid",
                      height: "50px"
                    }}
                  >
                    Título
                  </th>
                  <th
                    style={{
                      border: "1px solid",
                    }}
                  >
                    Texto Normal
                  </th>
                  <th
                    style={{
                      border: "1px solid",
                    }}
                  >
                    Formas
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td
                    className={calculateColorBlack0rWhite(color)}
                    style={{
                      border: "1px solid",
                      textAlign: "center",
                      width: "30%",
                    }}
                  >
                    <div>
                      <p className="calculo-num">{calculateContrast(color, color2)}</p>
                      <p>{levelAALarge(checkColor)}</p>
                    </div>
                  </td>
                  <td
                    className={calculateColorBlack0rWhite(color)}
                    style={{
                      border: "1px solid",
                      textAlign: "center",
                      width: "30%"
                    }}
                  >
                    <div>
                      <p className="calculo-num">{calculateContrast(color, color2)}</p>
                      <p>{levelAANormal(checkColor)}</p>
                    </div>
                  </td>
                  <td className={calculateColorBlack0rWhite(color)}
                    style={{
                      border: "1px solid",
                      textAlign: "center",
                      width: "30%",
                    }}
                  >
                    <div>
                      <p className="calculo-num">{calculateContrast(color, color2)}</p>
                      <p>{levelAANormal(checkColor)}</p>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {/* SEGUNDO CONTENIDO */}
      <div className="contrastRatio-content-two">
        <div className="title-content-two-contrast">
          <h3 className={calculateColorBlack0rWhite(color)}>
            Criterio de conformindad realacionado con la WCAG
          </h3>
        </div>
        <div className="explicacion-contrast">
          <div className={calculateColorBlack0rWhite(color)}>
            <h3>Nivel AA</h3>
            <p>
              El contraste de color entre el fondo y el contenido del primer
              plano debe tener un nivel mínimo para garantizar la legibilidad
            </p>
            <p>
              El texto y el fondo deben tener una relación de contraste de al
              menos 4.5:1. para texto normal (17pt e inferior)
            </p>

            <p>
              deben tener una relación de contraste de al menos 3:1. El texto
              más grande se define como de al menos 18pt
            </p>
          </div>
          <div className={calculateColorBlack0rWhite(color)}>
            <h3>Nivel AAA</h3>
            <p>
              El contraste de color se basa en el criterio 1.4.3 que es la
              versión mejorada del nivel AA.
            </p>
            <p>
              El texto y el fondo deben tener una relación de contraste de al
              menos 7:1 para texto normal (17pt e inferior)
            </p>
            <p>
              Para texto grande (18pt y superior) deben tener una relación de
              contraste de al menos 4.5:1.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
