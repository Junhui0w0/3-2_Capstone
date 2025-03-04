import { useState, useImperativeHandle } from 'react';


const useRandomOpacityBlink = (ref, setOpacity) => {
  const [timerRefs, setTimerRefs] = useState([]);
  const [isBlinking, setIsBlinking] = useState(false);

  const startRandomOpacity = () => {
    if (isBlinking){
      console.log('Already blinking, exiting function.');
      return;
    } 

    setIsBlinking(true);


    const changeOpacity = () => {
      if (!isBlinking) return;
      const randomOpacity = (Math.random()).toFixed(1);
      setOpacity((prev) => (prev === 1 ? randomOpacity : 1));

      const randomInterval = Math.floor(Math.random() * (1000 - 200 + 1)) + 200;
      const id = setTimeout(changeOpacity, randomInterval);
      setTimerRefs((prevRefs) => [...prevRefs, id]);

      const finalTimeout = setTimeout(() => {
        setOpacity(0);
        setIsBlinking(false);
      }, 1000);
      setTimerRefs((prevRefs) => [...prevRefs, finalTimeout]);
    };

    changeOpacity();
  };

  const stopRandomOpacity = () => {
    setIsBlinking(false);
    timerRefs.forEach((id) => clearTimeout(id));
    setTimerRefs([]);
    setOpacity(0);
  };

  useImperativeHandle(ref, () => ({
    startRandomOpacity,
    stopRandomOpacity,
  }));

};

export default useRandomOpacityBlink;
