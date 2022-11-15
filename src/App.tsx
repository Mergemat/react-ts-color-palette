import { useEffect } from 'react';
import useCards from './hooks/useCard';
import { getDefaultCards } from './utils/cards';
import ColorCard from './components/ColorCard';

function App() {
  const [cards, lockCard, flipColors] = useCards(getDefaultCards());

  const handleSpaceBar = (event: KeyboardEvent) => {
    if (event.code.toLowerCase() === 'space') {
      flipColors();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleSpaceBar);

    return () => document.removeEventListener('keydown', handleSpaceBar);
  }, []);

  return (
    <div className="h-screen max-h-screen w-full">
      <div className="flex h-[calc(100%-80px)] w-full flex-col justify-between md:h-full md:flex-row">
        {cards.map((card) => (
          <ColorCard
            key={card.id}
            card={card}
            onClick={(cardId) => lockCard(cardId)}
          />
        ))}
      </div>
      <button onClick={flipColors} className="flip-button">
        FLIP
      </button>
    </div>
  );
}

export default App;
