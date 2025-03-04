import React, {useEffect, useState,useRef, forwardRef, useImperativeHandle } from 'react';
import styleD from './Door.module.css';
import Doorimg from '../image/doordark.png';
import Dust from "../image/dust3.png";
import Hand from "../image/hand3.png";
import shadow from "../image/shadow.png";

function Door({ onUpdateSound4Enabled,
    onUpdateDOORB,
    onUpdateSound3Enabled,
    sound4Enabled,
    onUpdateDoorOut,
    onUpdateInvisibility,DOORB, maskdoor, doorout, setW, sound3Enabled, w, hiddenD}) {
    const doorref = useRef();
    const [elapsedTime, setElapsedTime] = useState(0);
    const [ENDD, setENDD] = useState(true);
    const [SCALED , setSCALED] = useState(true);
    const [shadowin , setshadowin ] = useState(false);
    const [HandMove, setHandMove] = useState(true);
    const [doorplay, setdoorplay] = useState(true);
    const [HAND, setHand] = useState(true);
    
    
    

    const shadowTransform = shadowin ? 'scale(1.7) translateY(-50px)' : SCALED  ? 'scale(1)'  : 'scale(1.5)';
    const intervalRef = useRef(null);
    
    const DOORSHADOW = 3000;
    const CAT = 4000;
    const SHADOW = 5000;
    const HANDV = 6000+2000;
    const HANDDUST = 7000+2000;
    
    const HANDOUT = 10000+2000;
    const DOORSHADOWB = 11000+2000;
    const Z = 16000+10000;
    useEffect(() => {
        
        const doorElement = doorref.current;
        const handleMouseOver = (event) => {

            if (!doorref.current.contains(event.target)) return;
            intervalRef.current = setInterval(() => {
              setElapsedTime((prevElapsedTime) => {
                const newTime = prevElapsedTime + 1000;
                console.log(newTime);
                if( newTime >= DOORSHADOW ){
                  setSCALED(false);
                  setshadowin(true);
                  setENDD(false);
                  onUpdateSound3Enabled(true);
                  
                }
                if( newTime >= CAT){
                  
                  

                }
                if(newTime>=SHADOW){
 
                }
                if (newTime>=HANDV ){
                  setHand(false);
                  
                  
                  onUpdateSound4Enabled(true);
                }
                if (newTime >= HANDDUST){
                  setHandMove(false);
                  setW(false);
                }
                if(newTime >= HANDOUT){
                  setHand(true);
                  
                }
                if( newTime >= DOORSHADOWB ){
                    onUpdateDOORB(true);
                  
                  if (newTime >= Z){
                    clearInterval(intervalRef.current); // 타이머 중지
                    intervalRef.current = null; // 타이머 ID 초기화
                    onUpdateDoorOut(true);
                    setdoorplay(false);
                    onUpdateInvisibility(false);
                    
                    
                  }
                }
                
      
      
                
          
                return newTime;
              });
            }, 1000);
            
            
            setElapsedTime(0);
          };
        
        const handleMouseOut = (event) => {
            if (!doorref.current.contains(event.relatedTarget)) {

                if (intervalRef.current && ENDD) {
                  clearInterval(intervalRef.current); // 타이머 중지
                  intervalRef.current = null; // 타이머 ID 초기화
                }
            }
          };
        if (doorElement) {

            doorElement.addEventListener("mouseover", handleMouseOver);
            doorElement.addEventListener("mouseleave", handleMouseOut);
          }
      
        return () => {
            if (doorElement) {
                doorElement.removeEventListener("mouseover", handleMouseOver);
                doorElement.removeEventListener("mouseleave", handleMouseOut);
            }
      
          };
    }, [doorref,sound4Enabled, sound3Enabled]);
  return (

      <div ref={doorref} className={`${styleD.Door}` } style={{visibility: hiddenD ? 'hidden' : 'visible', transform : DOORB ? 'scale(2)' : '', opacity : DOORB ? '0.5' : '', display : doorout ? 'none' : '',pointerEvents : doorplay ? 'auto' : 'none'}}> 
            <div className={`${styleD.Doorimg} absolute`} 
            style={{
                transition: "clip-Path 3s",
                clipPath: maskdoor ? "circle(100%)" : "circle(50px at 350px 180px)",
                transform : SCALED ? '' : 'scale(1.5)'


            }}>
                <img className='doorimg object-cover'  src={Doorimg}></img>
            </div>
            <div className={`${styleD.Dust} absolute pointer-events-none`}>
                <img src={Dust} style={{ opacity:w ? '0': '1',clipPath:w ? 'inset(0 0 0 100%)' : 'inset(0 0 0 0)', transition:'opacity 1s, clip-path 3s'}}></img>
            </div>
            <div className={`${styleD.hand} absolute pointer-events-none`} >
                <img className='handimg' src={Hand} 
                style={{ opacity: HAND ? '0': '1', 
                    transform: HandMove ? 'rotate(-20deg) ' : 'rotate(-80deg) translateY(-100px) translateX(-30px)', 
                    transition: "transform 4s ease, opacity 5s"}}></img>
            </div>
            
            <div className={`${styleD.Shadow} absolute pointer-events-none`}
                style={{ 
                     transform: shadowTransform,
                }} >
                <img src={shadow} ></img>
            </div>
      </div>
     
  );
}

export default Door;
// <div className={`${styleD.Doorimg} absolute`} style={{ transform: Scale ? 'scale(1)' : 'scale(1.5)'}}>
//<img src={Dust} style={{ opacity:w ? '0': '1',clipPath:w ? 'inset(0 100% 0 0)' : 'inset(0 0 0 0)', transition:'opacity 1s, clip-path 1s'}}></img>
//style={{transform: ___ ? 'scale(1)' 'scale(1.7)' ___ ? 'translateY(0)' : 'translateY(-50px)'}}
//'hidden' : 'visible'}