// Timer.tsx
import React, { useEffect, FC, useState } from "react";
import { useGameContext } from "../../contexts/GameContext";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isPaused: boolean;
}

const Timer: FC<TimerProps> = ({ initialTime, onTimeUp }) => {
  const { isPaused, togglePause } = useGameContext();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    if (!isPaused && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    }

    if (time === 0) {
      onTimeUp();
    }

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [time, isPaused, onTimeUp]);

  // Обновляем внутренний state таймера при изменении initialTime
  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  const handleButtonClick = () => {
    togglePause();
  };

  return (
    <div>
      <div className="timer-display">Таймер: {time}</div>
      <button onClick={handleButtonClick}>
        {isPaused ? "Играть" : "Пауза"}
      </button>
    </div>
  );
};

export default Timer;
