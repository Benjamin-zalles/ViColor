import {Link} from 'react-router-dom';
import '../style-components/boton.css';

export default function Boton({direction}) {
  return (
    <>
        <Link to={direction} className="boton">Ver más</Link>
    </>
  )
}
