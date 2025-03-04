import React,{ useRef, useState } from "react";
import {Link, useNavigate } from 'react-router-dom';

import Login from "./Login.js";
import Fileselect from './FIleselect.js'

import Bgimg from "./Bgimg";

import styleN from './Nac.module.css';

function Nav( ){
    const [hidden, setHidden] = useState(true);
    const [hiddenD, setHiddenD] =useState(true);
    
    const [w, setW] = useState(true);
    const [nb, setnb] = useState(false);

    const [DOORB, setDOORB] = useState(false);
    const[isVisible, setInvisibility] =  useState(true);
    const [maskdoor , setmaskdoor] =useState(false);

    
    
    

    const [cursorB, setcursorB] =useState(true);
    return (
        <div className="w-full h-full">
          
            <Bgimg setW={setW} setDOORB={setDOORB}   setInvisibility={setInvisibility}     maskdoor={maskdoor}  w={w}  hiddenD={hiddenD} setcursorB={setcursorB} cursorB={cursorB}  DOORB={DOORB}  setmaskdoor={setmaskdoor} setHidden={setHidden} hidden={hidden}   setHiddenD={setHiddenD} />           
            
            <Login DOORB={DOORB} setnb={setnb} isVisible={isVisible} setInvisibility={setInvisibility} />
            
            <div className={`${styleN.Filecontainer} h-full FileselectN absolute flex flex-row justify-center items-center gap-4`} style={{display : nb ? "flex" : "none"}}>
                <Fileselect data={1} className={`${styleN.box}`}  />
                <Fileselect data={2} className={`${styleN.box}`}  />
                <Fileselect data={3} className={`${styleN.box}`}  />
            </div>
        </div>
    )
}


export default Nav;