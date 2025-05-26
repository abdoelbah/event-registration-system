import React, { useEffect, useState } from "react";

export default function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    finished: false,
  });

  useEffect(() => {
    const targetDate = new Date("2025-06-01T00:00:00").getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const diff = targetDate - now;

      if (diff <= 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          finished: true,
        });
      } else {
        setTimeLeft({
          days: Math.floor(diff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((diff / 1000 / 60) % 60),
          seconds: Math.floor((diff / 1000) % 60),
          finished: false,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  if (timeLeft.finished) {
    return (
      <div className="mb-6 text-base bg-black/30 px-4 py-2 rounded-xl shadow border border-white/20 backdrop-blur-sm text-center">
        انتهى العد التنازلي!
      </div>
    );
  }

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center min-w-[50px] sm:min-w-[60px] md:min-w-[70px]">
      <div className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold transition-all duration-300 ease-in-out">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs sm:text-sm md:text-base">{label}</div>
    </div>
  );

  const Colon = () => (
    <div className="text-3xl sm:text-4xl md:text-5xl font-bold text-white translate-y-1">:</div>
  );

  return (
    <div className="mb-6 bg-black/30 px-3 py-3 sm:px-4 sm:py-4 md:px-6 md:py-4 rounded-xl shadow border border-white/20 backdrop-blur-sm flex flex-wrap sm:flex-nowrap justify-center text-center gap-3 sm:gap-5 md:gap-8 lg:gap-10 scale-[0.9] sm:scale-100">
      <TimeBlock value={timeLeft.days} label="يوم" />
      <Colon />
      <TimeBlock value={timeLeft.hours} label="ساعة" />
      <Colon />
      <TimeBlock value={timeLeft.minutes} label="دقيقة" />
      <Colon />
      <TimeBlock value={timeLeft.seconds} label="ثانية" />
    </div>
  );
}
