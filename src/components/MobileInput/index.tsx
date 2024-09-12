import React, { useEffect, useRef } from 'react';
import { useGame } from '../../contexts/GameContext';

const MobileInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { setException } = useGame();

  useEffect(() => {
    const isMobileDevice = /android|iphone|ipad|ipod/i.test(navigator.userAgent);

    if (isMobileDevice && inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const typedText = e.target.value;
    setException(typedText);
  };

  return (
    <input
      ref={inputRef}
      type="text"
      style={{ width: '1px', height: '1px', opacity: 0, position: 'absolute' }}
      onChange={handleChange}
    />
  );
};

export default MobileInput;
