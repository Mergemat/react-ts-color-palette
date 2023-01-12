import HexLabel from './components/HexLabel';
import LockButton from './components/LockButton';
import IColorCard from '../../types';
import ColorContainer from './components/ColorContainer';

type ColorCardProps = {
  card: IColorCard;
  onClick: (cardId: number) => void;
};

const ColorCard = ({ card, onClick }: ColorCardProps) => {
  const { id, isLocked } = card;
  const { hex, contrast } = card.color;

  return (
    <ColorContainer hex={hex}>
      <HexLabel contrast={contrast} hex={hex} />
      <LockButton
        onClick={onClick}
        id={id}
        contrast={contrast}
        isLocked={isLocked}
      />
    </ColorContainer>
  );
};

export { ColorCard };
