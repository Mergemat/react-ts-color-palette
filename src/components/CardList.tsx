import React, { PropsWithChildren, ReactNode } from 'react';

type ListProps<T> = {
  items: T[];
  renderItem: (item: T) => ReactNode;
};

export const CardList = <T,>({
  items,
  renderItem,
}: PropsWithChildren<ListProps<T>>) => {
  return (
    <div className="flex h-[calc(100%-80px)] w-full flex-col justify-between md:h-full md:flex-row">
      {items.map(renderItem)}
    </div>
  );
};
