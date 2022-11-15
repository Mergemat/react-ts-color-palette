import { useState } from 'react';

type HexLabelProps = {
  hex: string;
  contrast: string;
};
const HexLabel = ({ hex, contrast }: HexLabelProps) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const copyColor = (): void => {
    navigator.clipboard.writeText(hex);

    setIsCopied(true);
    setTimeout(() => {
      setIsCopied(false);
    }, 700);
  };

  return (
    <span
      onClick={copyColor}
      className="color-text text group"
      style={{
        color: contrast,
      }}
    >
      {hex}
      <div className="color-copy duration-100 group-hover:scale-100">
        {isCopied ? 'COPIED!' : 'COPY!'}
      </div>
    </span>
  );
};

export default HexLabel;
