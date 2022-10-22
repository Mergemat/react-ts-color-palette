import IColorCard from '../types';
import { blackOrWhiteLum, getRandomColor } from './colors';

const getDefaultCards = (): IColorCard[] => {
  if (document.location.hash != '') {
    const hexes = document.location.hash.split('-');
    return hexes.map((hex, index) => ({
      id: index,
      isLocked: false,
      color: { hex, contrast: blackOrWhiteLum(hex) ? 'black' : 'white' },
    }));
  }
  const def: IColorCard[] = [];
  for (let i = 0; i < 5; i++) {
    const color = getRandomColor();
    def.push({
      id: i,
      isLocked: false,
      color,
    });
  }
  return def;
};
export { getDefaultCards };
