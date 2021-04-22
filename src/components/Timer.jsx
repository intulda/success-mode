import React, { useEffect, useRef, useState } from 'react';

function Timer(closingDay) {
  const [today, setToday] = useState(new Date().getTime());
  const count = useRef(null);
  const initialVariable = {
    CLOSE: '경매 종료',
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setToday(new Date().getTime());
      const diff = new Date(closingDay).getTime() - today;
      const day = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hour = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const second = Math.floor((diff % (1000 * 60)) / 1000);

      if(diff < 0) {
        count.current = initialVariable.CLOSE;
      } else {
        const day = `D-${day} ${hour.toString().length < 2 ? '0' + hour : hour}:${min.toString().length < 2 ? '0' + min : min}:${second.toString().length < 2 ? '0' + second : second} 남음`;
        count.current = day;
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [today]);

  return count.current;
}

export default Timer;
