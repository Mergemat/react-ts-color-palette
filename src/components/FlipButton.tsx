import React from 'react';

type FlipButtonProps = {
  flipColors: () => void;
};

export const FlipButton = ({ flipColors }: FlipButtonProps) => {
  return (
    <button
      onKeyUp={(e) => e.preventDefault()}
      onClick={flipColors}
      className="flip-button"
    >
      FLIP
    </button>
  );
};
