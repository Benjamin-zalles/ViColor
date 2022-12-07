// import '../style-components/hamburger.css';

export default function Hamburguer(props) {
  return (
    <div  onClick={props.handleClick}
            className={`icon nav-icon-5 ${props.clicke ? 'open' : ''}`}
      >
        <span></span>
        <span></span>
        <span></span>
    </div>
  )
}

