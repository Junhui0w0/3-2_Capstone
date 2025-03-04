import React, { createContext, useState, useContext } from 'react';

// Context 생성
const SoundContext = createContext();

// Context Provider 생성
export function SoundProvider({ children }) {
  const [soundState, setSoundState] = useState({
    sound1Enabled: false,
    sound2Enabled: false,
  });

  return (
    <SoundContext.Provider value={{ soundState, setSoundState }}>
      {children}
    </SoundContext.Provider>
  );
}

// Custom Hook으로 Context 소비
export const useSound = () => useContext(SoundContext);
