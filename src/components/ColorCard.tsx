import { useState } from 'react';
import { BiLock, BiLockOpen } from 'react-icons/bi';
import IColorCard from '../types';


type ColorCardProps = {
  card: IColorCard;
  onClick: (cardId: number) => void;
};

const ColorCard = ({ card, onClick }: ColorCardProps) => {
  const { id, isLocked } = card;
  const { hex, contrast } = card.color;
  const [isCopied, setIsCopied] = useState<boolean>(false);


  const copyColor = (): void => {
    navigator.clipboard.writeText(hex);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <div className="card" style={{ backgroundColor: hex }}>
      <span
        onClick={copyColor}
        className="color-text text group"
        style={{ color: contrast }}
      >
        {hex}
        <div className="color-copy duration-100 group-hover:scale-100">
          {isCopied ? 'COPIED!' : 'COPY!'}
        </div>
      </span>

      <button
        onClick={() => onClick(id)}
        onKeyUp={(e) => e.preventDefault()}
        style={{
          backgroundColor:
            contrast == 'white' ? 'rgb(255,255,255, 0.1)' : 'rgb(0,0,0, 0.1)',
        }}
        className={`${
          isLocked ? 'scale-110' : 'scale-100'
        } rounded-full p-4 shadow-sm duration-75 hover:scale-110`}
      >
        {isLocked ? (
          <BiLock size={24} color={contrast} />
        ) : (
          <BiLockOpen size={24} color={contrast} />
        )}
      </button>
    </div>
  );
};

export { ColorCard };
