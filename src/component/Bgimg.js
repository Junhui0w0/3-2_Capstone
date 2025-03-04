import styleB from "./bgimg.module.css";
import React, {useEffect, useState,useRef, forwardRef, useImperativeHandle } from 'react';
import obg from '../image/oimg2.png';
import xbg from '../image/xbg.png';
import Opcityrender from './Opacity.js'
import { Link } from "react-router-dom";
import human from "../image/man1.png";
import humanb from "../image/man2.png";
import Doorcomponent from "./Door.js";
import { useSelector } from "react-redux";
import Thing from "./Thing.js";

const Bgimg = ({setW, setDOORB,  setInvisibility, DOORB, hidden, w, hiddenD, cursorB, setcursorB,  setHiddenD}) => {

  const appref = useRef();

  const [roTate, setroTate] = useState(true);
  const [doorout, setdoorout]= useState(false);
  const [Mask, setMask] = useState(true);
  const [opacity, setOpacity] = useState(0);
  const blinkRef = useRef();
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);
  const [Scale, setscale] =useState(true);
  const [isPaused, setIsPaused] = useState(false);

  const [END , setEND] = useState(false);
  const [walkplay , setwalkplay] = useState(true);
   
  const [sound1Enabled, setSound1Enabled] = useState(false);
  const [sound2Enabled, setSound2Enabled] = useState(false);
  const [sound3Enabled, setSound3Enabled] = useState(false);
  const [sound4Enabled, setSound4Enabled] = useState(false);
  const STARTTIME = 100;
  const WALKTIME= 8000;
  const STOP = 8300;
  const ROTATE = 9000;
  const OPACITY = 10000;
  const REST = 11000;
  const HIDDEN = 14500;
  const [maskdoor , setmaskdoor] =useState(false);
  

  const MAX_TIME = 7000;

  
  
  const startRandomOpacity = () => {
    if (blinkRef.current && blinkRef.current.startRandomOpacityr) {
      blinkRef.current.startRandomOpacityr();
    }
  };

  const stopRandomOpacity = () => {
    if (blinkRef.current && blinkRef.current.stopRandomOpacityr) {
      blinkRef.current.stopRandomOpacityr();
    }
  };

  useEffect(() => {
    const appElement = appref.current;
    
    const handleMouseOver = (event) => {
      if (END) return;
      if (!appref.current.contains(event.target)) return;
      if(!isPaused) setSound1Enabled(true);
      startRandomOpacity();
      

      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      intervalRef.current = setInterval(() => {
        setElapsedTime((prevElapsedTime) => {
          const newTime = prevElapsedTime + 1000;
          console.log(newTime);
          if (newTime >= STARTTIME){
            
          }
          if (newTime >= WALKTIME) {
            setEND(true);
            setwalkplay(false); 
            setSound1Enabled(false);// 걷기 멈춤
            setSound2Enabled(true);
            setscale(false);
            //야옹
          }
          if (newTime>=STOP){
            stopRandomOpacity();
            
          }
          if ( newTime >= ROTATE){
            setroTate(false);
          }
          if (newTime >=  REST){
            setMask(false);
          }
          if(newTime >= HIDDEN){
            setscale(true);
            setHiddenD(false);            
            setmaskdoor(true);
            setEND(false);
            clearInterval(intervalRef.current); // 타이머 중지
            intervalRef.current = null;
            setIsPaused(true);
          }
          

       
    
          return newTime;
        });
      }, 1000);
      
      
      setElapsedTime(0);
    };

    const handleMouseOut = (event) => {
      if (!appref.current.contains(event.relatedTarget)) {
        stopRandomOpacity();
        setSound1Enabled(false);

 
        if (!END) {

          if (intervalRef.current) {
            clearInterval(intervalRef.current); // 타이머 중지
            intervalRef.current = null; // 타이머 ID 초기화
          }}
      }
    };


    if (appElement) {

      appElement.addEventListener("mouseover", handleMouseOver);
      appElement.addEventListener("mouseleave", handleMouseOut);
    }

    return () => {
      if (appElement) {
        appElement.removeEventListener("mouseover", handleMouseOver);
        appElement.removeEventListener("mouseleave", handleMouseOut);
      }

    };
  }, [appref, sound2Enabled, sound1Enabled, startRandomOpacity, stopRandomOpacity]);

  return (
 <Link to ='/'>
    <Thing
            sound1Enabled={sound1Enabled}
            sound2Enabled={sound2Enabled}
            sound3Enabled={sound3Enabled} 
            sound4Enabled={sound4Enabled}
            setcursorB={setcursorB}
            />
    <div
      ref = {appref}
      className={`${styleB.Bgimg} Bgimg bg-black`}
      style={{ visibility: isPaused ? "hidden" : "visible", display : doorout ? 'none' : '', zIndex:9, pointerEvents: cursorB ? 'none' : 'auto'}
    }
    >
      <div className={`${styleB.Oimg} absolute`} style={{animationPlayState : walkplay ? 'running' : 'paused', transform: Scale ? '' : 'scale(1.4)'}}>
        <div className={`${styleB.Blur}`}></div>
        <img
          src={obg}
          className={`${styleB.oimg} object-cover mask`}
          style={{
            transition: "clip-Path 3s",
            clipPath: Mask ? "circle(100%)" : "circle(0 at 90px 320px)",
          }}
        ></img>
      </div>
      <div className={`${styleB.Ximg} absolute`} style={{ opacity: opacity, animationPlayState : walkplay ? 'running' : 'paused' , transform: Scale ? '' : 'scale(1.4)'}} >
        <div className={`${styleB.Blur}`}></div>
        <img
          src={xbg}
          className={`${styleB.ximg} object-cover mask`}
          style={{
            transition: "clip-Path 3s",
            clipPath: Mask ? "circle(100%)" : "circle(0 at 90px 320px)",
          }}
        ></img>
      </div>
      <div className={`${styleB.Human} absolute`} style={{ opacity: roTate ? "1" : "0" ,animationPlayState : walkplay ? 'running' : 'paused'}} >
        <img src={human} className={`${styleB.human} object-cover`}></img>
      </div>
      <div className={`${styleB.Humanb} absolute`} style={{ opacity: roTate ? "0" : "1" }}>
        <img
          src={humanb}
          className={`${styleB.humanb} object-cover`}
          style={{
            transition: "clip-Path 3s",
            clipPath: Mask ? "circle(100%)" : "circle(0 at 90px 320px)",
          }}
        ></img>
      </div>
      <Opcityrender ref={blinkRef} setOpacity={setOpacity} />
      
    </div>
    <Doorcomponent  onUpdateSound4Enabled={setSound4Enabled} setscale={setscale} onUpdateSound3Enabled={setSound3Enabled} doorout={doorout} onUpdateDoorOut={setdoorout} setW={setW} onUpdateDOORB={setDOORB}   onUpdateInvisibility={setInvisibility}  DOORB={DOORB}  maskdoor={maskdoor} hidden={hidden} w={w} hiddenD={hiddenD}  />
    </Link>
  );
};

export default Bgimg;



//'visible' : 'hidden'}}
//style={{transition: "clipPath:circle 3s" , clipPath: Mask ? 'circle(100%)': "circle(50px at 90px 320px)"}}