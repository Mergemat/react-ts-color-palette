import React, { PropsWithChildren, ReactNode } from 'react';

type CardContainerProps = {
  hex: string;
};

const CardContainer = ({
  hex,
  children,
}: PropsWithChildren<CardContainerProps>) => {
  return (
    <div className="card" style={{ backgroundColor: hex }}>
      {children}
    </div>
  );
};

export default CardContainer;
