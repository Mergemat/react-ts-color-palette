import { ColorCard } from './components/ColorCard';
import { useCallback, useEffect } from 'react';
import useCards from './hooks/useCard';
import { getDefaultCards } from './utils/cards';

function App() {
  const [cards, lockCard, flipColors] = useCards(getDefaultCards());

  const onCardClick = (cardId: number): void => {
    lockCard(cardId);
  };

  const handleSpaceBar = useCallback((event: KeyboardEvent) => {
    if (event.code.toLowerCase() === 'space') {
      flipColors();
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleSpaceBar);

    return () => {
      document.removeEventListener('keydown', handleSpaceBar);
    };
  }, [handleSpaceBar]);

  return (
    <div className="absolute inset-0">
      <div className="flex h-[calc(100%-80px)] w-full flex-col justify-between md:h-full md:flex-row">
        {cards.map((card) => (
          <ColorCard key={card.id} card={card} onClick={onCardClick} />
        ))}
      </div>
      <button onKeyUp={(e) => e.preventDefault()} onClick={flipColors} className="flip-button">
        FLIP
      </button>
    </div>
  );
}

export default App;
