import { useState, useRef } from 'react';

export default function Stopwatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);
  const offset=useRef(null);



  function handleStart() {
    if (offset.current==null){
      offset.current=0;
    }
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);

   
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
       console.log(offset.current)
    }, 10);

  }

  function handleStop() {
    offset.current=0;
    secondsPassed=0;
    clearInterval(intervalRef.current);
  }
  function handlePause(){
    offset.current=secondsPassed;
    clearInterval(intervalRef.current);
    


  }
  let secondsPassed = 0;
  if (startTime != null && now != null) {
    secondsPassed = (now - startTime) / 1000+offset.current;
   
  }

  return (
    <>
      <h1>Time passed: {secondsPassed.toFixed(3)}</h1>
      <h2>{offset.current}</h2>

      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
      <button onClick={handlePause}>
        Pause
      </button>
    </>
  );
}
