import React, { FC, useEffect } from 'react';
import { useGame } from '../../contexts/GameContext';

interface MobileInputProps {
  inputRef: React.RefObject<HTMLInputElement>;
}

const MobileInput: FC<MobileInputProps> = ({ inputRef }) => {
  const { start, setException, exception } = useGame();

  useEffect(() => {
    const isMobileDevice = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isMobileDevice && start && inputRef.current) {
      inputRef.current.focus();
    }
  }, [start]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputText = event.target.value;
    const underscore = '_';
    const space = ' ';

    if (inputText !== underscore && inputText !== space) {
      setException(exception.replace(inputText, underscore));
    }

    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <input
      ref={inputRef}
      type="text"
      style={{
        position: 'absolute',
        top: '1px',
        left: '1px',
        opacity: 0,
        width: '1px',
        height: '1px',
        padding: 0,
        margin: 0,
        border: 'none',
      }}
      onChange={handleInputChange}
    />
  );
};

export default MobileInput;
