import React, { useState, useEffect } from 'react';

const ClockTab = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const formatDate = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <div className="clock-tab">
      <h1 className="clock-title">Current Time:</h1>
      <h2 className="clock-time">{time.toLocaleTimeString()}</h2>
      <h2 className="clock-date">{formatDate(time)}</h2>
    </div>
  );
};

export default ClockTab;
