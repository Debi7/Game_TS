// Timer.tsx
import React, { useEffect, FC, useState } from "react";
import { useGameContext } from "../../contexts/GameContext";

interface TimerProps {
  initialTime: number;
  onTimeUp: () => void;
  isPaused: boolean
}

const Timer: FC<TimerProps> = ({ initialTime, onTimeUp, isPaused }) => {
  const { togglePause } = useGameContext();
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    let timer: NodeJS.Timeout | null = null;

    // Запуск таймера, если игра не на паузе и время еще не вышло
    if (!isPaused && time > 0) {
      timer = setTimeout(() => setTime(time - 1), 1000);
    }

    // Выполнение действия при окончании времени
    if (time === 0) {
      onTimeUp();
    }

    return () => {
      // Очистка таймера при размонтировании компонента или изменении зависимостей
      if (timer) clearTimeout(timer);
    };
  }, [time, isPaused, onTimeUp]);

  // Обновление внутреннего состояния таймера при изменении initialTime
  useEffect(() => {
    setTime(initialTime);
  }, [initialTime]);

  const handleButtonClick = () => {
    // Обработчик для кнопки "Пауза"/"Играть"
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
