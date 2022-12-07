import "../style-components/colorPicker.css";
import {useState} from 'react';

export default function ColorPicker() {

const [color, setColor] = useState("#0000ff");

const StyleColorPicker = {
    width: "200px",
    height: "200px",
    background: "red",
}

  return (
    <>
      <div className="color_canvas" style={StyleColorPicker}></div>
      <input type="range" />
    </>
  );
}
