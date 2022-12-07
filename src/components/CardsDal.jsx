import "../style-components/cardBlind.css";
import { useState } from "react";

export default function CardsDal({ typeBlind, imgType }) {
  const [mostrarElement, setMostrarElement] = useState(false);

  const mostrar = () => {
    let x = mostrarElement ? "ocultarText" : "";
    return x;
  };
  return (
    <div className="content-card">
      <div
        className="container-img"
        onPointerOver={() => setMostrarElement(!mostrarElement)}
        onPointerOut={() => setMostrarElement(!mostrarElement)}
      >
        <img src={imgType} alt={typeBlind} className="card-img" />
        <h2 className={mostrar()}>{typeBlind}</h2>
      </div>
      <div className="card-button">
        <button type="button">Ver más</button>
      </div>
    </div>
  );
}
