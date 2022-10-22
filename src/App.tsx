import { ColorCard } from './components/ColorCard';
import { useEffect } from 'react';
import useCards from './hooks/useCard';
import { getDefaultCards } from './utils/cards';

function App() {
  const [cards, lockCard, flipColors] = useCards(getDefaultCards());

  const onCardClick = (cardId: number): void => {
    lockCard(cardId);
  };

  document.body.onkeyup = (e) => {
    if (e.key == ' ') {
      flipColors();
    }
  };

  return (
    <div className="h-screen max-h-screen w-full">
      <div className="flex h-[calc(100%-80px)] w-full flex-col justify-between md:h-full md:flex-row">
        {cards.map((card) => (
          <ColorCard key={card.id} card={card} onClick={onCardClick} />
        ))}
      </div>
      <button onClick={flipColors} className="flip-button">
        FLIP
      </button>
    </div>
  );
}

export default App;
