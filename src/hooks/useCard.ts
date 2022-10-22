import { getRandomColor } from '../utils/colors';
import IColorCard from '../types';
import { useEffect, useState } from 'react';

const useCards = (
  defaultParameter: IColorCard[]
): [IColorCard[], (cardId: number) => void, () => void] => {
  const [cards, setCards] = useState<IColorCard[]>(defaultParameter);

  const lockCard = (cardId: number): void => {
    setCards((prev) =>
      prev.map((card) => {
        if (card.id == cardId) {
          return { ...card, isLocked: !card.isLocked };
        }
        return card;
      })
    );
  };

  useEffect(() => {
    document.location.hash = cards
      .map((card) => card.color.hex.replace('#', ''))
      .join('-');
  }, [cards]);

  const flipCards = (): void => {
    setCards((cards) =>
      cards.map((card) =>
        card.isLocked ? card : { ...card, color: getRandomColor() }
      )
    );
  };

  return [cards, lockCard, flipCards];
};

export default useCards;
