type contrast = 'black' | 'white';

interface IColorCard {
  id: number;
  color: { hex: string; contrast: contrast };
  isLocked: boolean;
}

export default IColorCard;
