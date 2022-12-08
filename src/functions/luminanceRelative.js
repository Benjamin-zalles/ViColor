export default function calculateContrast(c1, c2) {
  //Calculando la luminancia relativa
  function luminance(r, g, b) {
    var a = [r, g, b].map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
  }

  //Calculando el contraste entre dos colores RGB
  function contrast(rgb1, rgb2) {
    var lum1 = luminance(rgb1[0], rgb1[1], rgb1[2]);
    var lum2 = luminance(rgb2[0], rgb2[1], rgb2[2]);
    var brightest = Math.max(lum1, lum2);
    var darkest = Math.min(lum1, lum2);
    return (brightest + 0.05) / (darkest + 0.05);
  }

  // convertir de hex a rgb
  function hexRgb(h) {
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

  const color2 = hexRgb(c1);
  const color1 = hexRgb(c2);
  const resultContrast = contrast(color1, color2);


  return resultContrast;
}

