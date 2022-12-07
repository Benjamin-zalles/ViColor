import { useState } from "react";
import { BiX, BiCopy } from "react-icons/bi";
import "../style-pages/consultaDeColor.css";

export default function ConsultaDeColor() {
  var lista = [655, 545, 123, 54, 14, 13, 3];
  const newLista = lista.sort(function () {
    return Math.random() - 0.5;
  });

  // Agregando inputs a un array
  const [valor, setValor] = useState("#0000ff");

  const [colour, setColour] = useState([]);
  const handleAddColor = () => {
    const newColor = {
      id: newLista.join(""),
      nombre: "",
      valueInput: valor,
    };
    setColour([...colour, newColor]);
  };

  console.log(colour);

  // Removiendo un input de color
  const handleRemoveColor = (id) => {
    const newColor = colour.filter((col) => col.id !== id);
    setColour(newColor);
  };

  const handleUpdateColor = (id) => {
    const newColor = colour.map((color) => {
      if (color.id === id) {
        return {
          ...color,
          valueInput: valor,
        };
      }
      return color;
    });
    setColour(newColor);
  };

  return (
    <>
      <div className="consultaColores-content-one">
        <div className="colores-principales">
          <div>
            <button onClick={handleAddColor}>Agregar color</button>
            {/* <button onClick={handleRemoveColor}>Eliminar color</button> */}
            <button>Aleatorio</button>
          </div>
          <div className="colors-principales-select">
            {colour.map((c) => (
              <div key={c.id} className="contenedor-colores">
                {c.nombre}
                <div
                  className="consulta-input-color"
                  onChange={(e) => setValor(e.target.value)}
                >
                  <input
                    type="color"
                    onChange={() => handleUpdateColor(c.id)}
                  />
                  <input onChange={() => handleUpdateColor(c.id)} style={{ maxWidth: "100px" }} />
                </div>
                <div
                  className="contenido-color-input"
                  style={{
                    background: c.valueInput,
                  }}
                >
                  {/* <BiCopy size="30px" /> */}
                  <button
                    onClick={() => handleRemoveColor(c.id)}
                    style={{ width: "20px" }}
                  >
                    <BiX size="20px" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="colores-daltonicos">
          {colour.map((c) => (
            <div key={c.id}>
              {c.nombre}
              <h4
                style={{
                  background: c.valueInput,
                }}
              >
                Protanopia
              </h4>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
