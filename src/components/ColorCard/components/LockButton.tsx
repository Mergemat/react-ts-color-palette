import LockIcon from './LockIcon';

type LockButtonProps = {
  onClick: (cardId: number) => void;
  id: number;
  contrast: 'white' | 'black';
  isLocked: boolean;
};

const LockButton = ({ onClick, id, contrast, isLocked }: LockButtonProps) => {
  const backgroundColor =
    contrast == 'white' ? 'rgb(255,255,255, 0.1)' : 'rgb(0,0,0, 0.1)';

  return (
    <button
      onClick={() => onClick(id)}
      onKeyUp={(e) => e.preventDefault()}
      style={{
        backgroundColor,
      }}
      className={`${
        isLocked ? 'scale-110' : 'scale-100'
      } rounded-full p-4 shadow-sm duration-75 hover:scale-110`}
    >
      <LockIcon isLocked={isLocked} contrast={contrast} />
    </button>
  );
};

export default LockButton;
