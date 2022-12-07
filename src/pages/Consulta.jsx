// import React from 'react'

// export default function Checker() {
//   return (
//     <div>Checker</div>
//   )
// }


import '../style-pages/consulta.css';
import { useState } from 'react'
// import { ColorBlindDeuta, ColorBlindAcro, ColorBlindTrita, ColorBlindProta } from '../daltonismo/ColorBlind'
import BlindColor from '../functions/blind';

export default function Checker() {

  // inicio
function HexToRGB(hex) {
    var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result ? {
      r: parseInt(result[1], 16),
      g: parseInt(result[2], 16),
      b: parseInt(result[3], 16)
    } : null;
}

function RgbToHEX(r, g, b){
  r = r.toString(16);
  g = g.toString(16);
  b = b.toString(16);

  if (r.length == 1){
      return r = "0" + r;
  }

  if (g.length == 1){
      return g = "0" + g;
  }

  if (b.length == 1){
      return b = "0" + b;
  }
  return "#" + r + g + b;
}

function ColorBlindAcro(colorHex){
  const inputColor = HexToRGB(colorHex);
  const trasnform = BlindColor.achromatopsia(inputColor.r, inputColor.g, inputColor.b);
  const R = trasnform.r;
  const G = trasnform.g;
  const B = trasnform.b;

  return RgbToHEX(R, G, B);
}

function ColorBlindDeuta(colorHex){
  const inputColor = HexToRGB(colorHex);
  const trasnform = BlindColor.deuteranopia(inputColor.r, inputColor.g, inputColor.b);
  const R = trasnform.r;
  const G = trasnform.g;
  const B = trasnform.b;

  return RgbToHEX(R, G, B);
}

function ColorBlindTrita(colorHex){
  const inputColor = HexToRGB(colorHex);
  const trasnform = BlindColor.tritanopia(inputColor.r, inputColor.g, inputColor.b);
  const R = trasnform.r;
  const G = trasnform.g;
  const B = trasnform.b;

  return RgbToHEX(R, G, B);
}

function ColorBlindProta(colorHex){
  const inputColor = HexToRGB(colorHex);
  const trasnform = BlindColor.protanopia(inputColor.r, inputColor.g, inputColor.b);
  const R = trasnform.r;
  const G = trasnform.g;
  const B = trasnform.b;

  return RgbToHEX(R, G, B);
}


  // final 


  const [hex, setHex] = useState('#e9ec59');
  const [hex2, setHex2] = useState('#5ee1f5');
  const [hex3, setHex3] = useState('#f69fda');
  const [hex4, setHex4] = useState('#ffffff');
 
  const randomizedHex = () => {
    const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor2 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor3 = "#" + Math.floor(Math.random() * 16777215).toString(16);
    const randomColor4 = "#" + Math.floor(Math.random() * 16777215).toString(16);

    setHex(randomColor);
    setHex2(randomColor2);
    setHex3(randomColor3);
    setHex4(randomColor4);
  }


  
  





  return (
    <div className="checker-container-principal">

      <div className="checker-color">
        <div className="content-primary">
          <h1>Consulta de Colores</h1>
          <div className="content-options">
            {/* <input type="button" value="generate" onClick={randomizedHex}/> */}
            {/* <button onClick={randomizedHex}>Random</button> */}
          </div>

          <div className="content-input-color">
              <div className="input-color">
                <div className="color-container">
                  <input type="color" value={hex} onChange={(e)=>setHex(e.target.value)}/>
                </div>
                <input type="text" onChange={e => setHex(e.target.value)}value={hex}/>
              </div>

              <div className="input-color">
                <div className="color-container">
                  <input type="color" value={hex2} onChange={(e)=>setHex2(e.target.value)}/>
                </div>
                <input type="text" value={hex2}/>
              </div>

              <div className="input-color">

                <div className="color-container">
                  <input type="color" value={hex3} onChange={(e)=>setHex3(e.target.value)}/>
                </div>
                <input type="text" value={hex3}/>
              </div>
              
              <div className="input-color">
                <div className="color-container">
                  <input type="color" value={hex4} onChange={(e)=>setHex4(e.target.value)}/>
                </div>
                <input type="text" value={hex4}/>
              </div>
          </div>
        </div>
        
        <div className="content-secundary">
          <div className="boxs-colors" style={{
            background: hex,
          }}>
            <h2>{hex}</h2>
          </div>
          <div className="boxs-colors" style={{
            background: hex2,
          }}>
            <h2>{hex2}</h2>
          </div>
          <div className="boxs-colors" style={{
            background: hex3,
          }}>
            <h2>{hex3}</h2>
          </div>
          <div className="boxs-colors" style={{
            background: hex4,
          }}>
            <h2>{hex4}</h2>
          </div>
        </div>
      </div>



      <div className="types-colour-blind">
        
        <div className="type-prota">
          <h3>Protanopía</h3>
          <div className="result-prota" style={{
            background: ColorBlindProta(hex),
          }}></div>
          <div className="result-prota" style={{
            background: ColorBlindProta(hex2),
          }}></div>
          <div className="result-prota" style={{
            background: ColorBlindProta(hex3),
          }}></div>
          <div className="result-prota" style={{
            background: ColorBlindProta(hex4),
          }}></div>
        </div>
        
        
        <div className="type-deuta">
          <h3>Deuteranopía</h3>
          <div className="result-deuta" style={{
            background: ColorBlindDeuta(hex),
          }}></div>
          <div className="result-deuta" style={{
            background: ColorBlindDeuta(hex2),
          }}></div>
          <div className="result-deuta" style={{
            background: ColorBlindDeuta(hex3),
          }}></div>
          <div className="result-deuta" style={{
            background: ColorBlindDeuta(hex4),
          }}></div>
        </div>



        <div className="type-trita">
        <h3>Tritanopía</h3>
          <div className="result-trita" style={{
            background: ColorBlindTrita(hex),
          }}></div>
          <div className="result-trita" style={{
            background: ColorBlindTrita(hex2),
          }}></div>
          <div className="result-trita" style={{
            background: ColorBlindTrita(hex3),
          }}></div>
          <div className="result-trita" style={{
            background: ColorBlindTrita(hex4),
          }}></div>
        </div>



        <div className="type-acro">
        <h3>Acromático</h3>
          <div className="result-acro" style={{
            background: ColorBlindAcro(hex),
          }}></div>
          <div className="result-acro" style={{
            background: ColorBlindAcro(hex2),
          }}></div>
          <div className="result-acro" style={{
            background: ColorBlindAcro(hex3),
          }}></div>
          <div className="result-acro" style={{
            background: ColorBlindAcro(hex4),
          }}></div>
        </div>
      </div>
    </div>
  )
}
