import React, { useRef, useEffect, useState } from 'react';
import sound1 from '../image/worktime5.mp3';
import sound2 from '../image/catsound.mp3';
import sound3 from '../image/thing.mp3';
import sound4 from '../image/handsound.mp3'
import styleT from './Thing.module.css';

const Thing = ({ sound1Enabled, sound2Enabled, sound3Enabled, sound4Enabled, setcursorB}) => {

  const audioRefs = useRef({
    sound1: new Audio(sound1),
    sound2: new Audio(sound2),
    sound3: new Audio(sound3),
    sound4: new Audio(sound4),
  });
  const [BUTTON, setBUTTON] = useState(false); 
  const [isActivated, setIsActivated] = useState(false);
  const [timeLeft, setTimeLeft] = useState(10); 
  const [isClickable, setIsClickable] = useState(false);
  useEffect(() => {
    Object.values(audioRefs.current).forEach((audio) => {
      audio.preload = 'auto'; // 미리 로드
      audio.load(); // 음원 준비
      audio.muted = true; // 사용자 상호작용 전에는 음소거
    });
  }, []);
  
  useEffect(() => {
    // 타이머가 0초가 되면 정지
    if (timeLeft <= 0) {
      setIsClickable(true); // 버튼 활성화
      return;
    }

    // 1초마다 timeLeft 감소
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer); // 언마운트 시 타이머 정리
  }, [timeLeft]);

  const handleInitialClick = () => {
    setIsActivated(true);
    setIsClickable(false);
    setcursorB(false);
 
  };
  const BUTTONCLICK = () => {
    Object.values(audioRefs.current).forEach((audio) => {
      audio.muted = false;
      audio.preload = 'auto';
      audio.play().then(() => {
        audio.pause();
        audio.currentTime = 0;
      });
    });
    setBUTTON(true);
  };


  useEffect(() => {
    const audio = audioRefs.current.sound1;
    if (isActivated && sound1Enabled && audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => console.error('Failed to play sound1:', error));
    } else if (isActivated && !sound1Enabled && audio) {
      audio.pause();
    }
  }, [sound1Enabled, isActivated]);

  useEffect(() => {
    const audio = audioRefs.current.sound2;
    if (isActivated && sound2Enabled && audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => console.error('Failed to play sound2:', error));
    } else if (isActivated && !sound2Enabled && audio) {
      audio.pause();
    }
  }, [sound2Enabled, isActivated]);

  useEffect(() => {
    const audio = audioRefs.current.sound3;
    if (isActivated && sound3Enabled && audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => console.error('Failed to play sound3:', error));
    } else if (isActivated && !sound3Enabled && audio) {
      audio.pause();
    }
  }, [sound3Enabled, isActivated]);

  useEffect(() => {
    const audio = audioRefs.current.sound4;
    if (isActivated && sound3Enabled && audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => console.error('Failed to play sound3:', error));
    } else if (isActivated && !sound3Enabled && audio) {
      audio.pause();
    }
  }, [sound4Enabled, isActivated]);

  useEffect(() => {
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  const centeredStyle = {
    width: '100%',
    height: '100%',
    
    backgroundColor: 'blue',
    pointerEvents: isClickable ? 'auto' : 'none',
    cursor: isClickable? 'pointer': 'default',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5px',
    zIndex: 12,
    
  };
  const musicload ={
    width: '200px',
    height: '50px',
    zIndex: 13,
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor : 'yellow',
    borderRadius: '40px',
    color: 'black',
    pointerEvents: BUTTON ? 'none' : 'auto',
    cursor:'pointer'
  }

  return (
    
    <div style={{ width: '100%', height: '100%', position: 'absolute', pointerEvents: 'none', textAlign:'center'}}>
      {!BUTTON && (<div onClick={BUTTONCLICK}
            className={`${styleT.Buttonmusic}`}
            style={musicload}>Click to Enable Sounds</div>)}
      {!isActivated && (
        <div className={`${styleT.Bg}`} onClick={handleInitialClick} style={centeredStyle}>
          Wait <br></br>
          {timeLeft}
        </div>
      )}
    </div>
  );
};

export default Thing;
