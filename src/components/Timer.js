import { useEffect } from "react";

const Timer = ({ timeLeft, setTimeLeft, onTimeUp }) => {
  useEffect(() => {
    if (timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      onTimeUp();
    }
  }, [timeLeft, setTimeLeft, onTimeUp]);

  return (
    <div className="text-xl font-bold text-blue-400 mb-4">
      Time Left: {timeLeft}s
    </div>
  );
};

export default Timer;