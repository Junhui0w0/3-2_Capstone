import React, { useEffect, useRef } from 'react';

const MultiAudioPlayer = ({ audioRefs, shouldPlaySound1, shouldPlaySound2, shouldPlaySound3, shouldPlaySound4 }) => {


  const playAudio = (key) => {
    const audio = audioRefs.current[key];
    if (audio) {
      audio.currentTime = 0;
      audio.play().catch((error) => console.error(`Failed to play ${key}:`, error));
    }
  };

  const stopAudio = (key) => {
    const audio = audioRefs.current[key];
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
    }
  };

  useEffect(() => {
    if (shouldPlaySound1) {
      playAudio('sound1');
    } else {
      stopAudio('sound1');
    }
  }, [shouldPlaySound1]);

  useEffect(() => {
    if (shouldPlaySound2) {
      playAudio('sound2');
    } else {
      stopAudio('sound2');
    }
  }, [shouldPlaySound2]);

  useEffect(() => {
    if (shouldPlaySound3) {
      playAudio('sound3');
    } else {
      stopAudio('sound3');
    }
  }, [shouldPlaySound3]);
  useEffect(() => {
    if (shouldPlaySound4) {
      playAudio('sound4');
    } else {
      stopAudio('sound4');
    }
  }, [shouldPlaySound4]);

  useEffect(() => {
    // 컴포넌트 언마운트 시 모든 오디오 정리
    return () => {
      Object.values(audioRefs.current).forEach((audio) => {
        audio.pause();
        audio.currentTime = 0;
      });
    };
  }, []);

  return <div></div>;
};

export default MultiAudioPlayer;
