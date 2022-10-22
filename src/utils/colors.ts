const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
  var shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, function (m, r, g, b) {
    return r + r + g + g + b + b;
  });

  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex) || [];

  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
};

const luminance = (r: number, g: number, b: number): number => {
  var a = [r, g, b].map(function (v) {
    v /= 255;
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
};

export const blackOrWhiteLum = (hex: string): boolean => {
  const { r, g, b } = hexToRgb(hex);
  const lum = luminance(r, g, b);
  const ratio = lum > 1 ? (1 + 0.05) / (lum + 0.05) : (lum + 0.05) / (1 + 0.05);

  return ratio > 0.55;
};

export const getRandomColor = (): {
  hex: string;
  contrast: 'black' | 'white';
} => {
  const color = Math.floor(Math.random() * 16777215).toString(16);
  const hex = '#' + color.toUpperCase() + '0'.repeat(6 - color.length);

  return { hex, contrast: blackOrWhiteLum(hex) ? 'black' : 'white' };
};
