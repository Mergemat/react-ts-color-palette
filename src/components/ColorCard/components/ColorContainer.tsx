import React, { PropsWithChildren, ReactNode } from 'react';

type ColorContainerProps = {
  hex: string;
};

const ColorContainer = ({
  hex,
  children,
}: PropsWithChildren<ColorContainerProps>) => {
  return (
    <div className="card" style={{ backgroundColor: hex }}>
      {children}
    </div>
  );
};

export default ColorContainer;
