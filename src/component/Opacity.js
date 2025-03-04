import React, { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react';

const Opcityrender = forwardRef(({ setOpacity }, ref) => {
  const [isBlinking, setIsBlinking] = useState(false);
  const timerRef = useRef(null);

  // Opacity 변경 시작
  const startRandomOpacityr = () => {
    if (isBlinking) return; // 이미 실행 중이라면 중단
    setIsBlinking(true);
  };

  // Opacity 변경 정지
  const stopRandomOpacityr = () => {
    setIsBlinking(false);
    if (timerRef.current) {
      clearTimeout(timerRef.current); // 타이머 제거
      timerRef.current = null;
    }
    setOpacity(0); // Opacity 초기화
  };

  useEffect(() => {
    if (!isBlinking) {
      // 깜박임이 중지되면 타이머를 초기화하고 중단
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
      return;
    }

    const changeOpacity = () => {
      const randomOpacity = Math.random().toFixed(1); // 0.0~1.0 사이 값
      setOpacity(randomOpacity);

      const randomInterval = Math.floor(Math.random() * (1000 - 200 + 1)) + 200; // 200~1000ms
      timerRef.current = setTimeout(changeOpacity, randomInterval);
    };

    changeOpacity(); // 초기 호출

    return () => {
      // Cleanup: 컴포넌트 언마운트 또는 isBlinking 변경 시 타이머 제거
      if (timerRef.current) {
        clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [isBlinking, setOpacity]);

  // 상위 컴포넌트에서 사용할 함수 노출
  useImperativeHandle(ref, () => ({
    startRandomOpacityr,
    stopRandomOpacityr,
  }));

  return <div></div>;
});

export default Opcityrender;
