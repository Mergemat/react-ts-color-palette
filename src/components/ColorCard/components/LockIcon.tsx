import { BiLock, BiLockOpen } from 'react-icons/bi';

type Props = { isLocked: boolean; contrast: string };

const LockIcon = ({ isLocked, contrast }: Props) => {
  return (
    <>
      {isLocked ? (
        <BiLock size={24} color={contrast} />
      ) : (
        <BiLockOpen size={24} color={contrast} />
      )}
    </>
  );
};

export default LockIcon;
