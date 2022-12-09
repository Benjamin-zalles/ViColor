import "../style-components/cardPoleras.css";

export default function CardsPoleras({ polera, colorPolera }) {
  return (
    <div className="card-poleras">
      <img src={polera} />
      <h4>Categoria moda</h4>
      <h5>Polera marca Adidas color {colorPolera}</h5>
      <h6>$49.00</h6>
      <div className="btn-card-polera">
        <button>Añadir</button>
      </div>
    </div>
  );
}
