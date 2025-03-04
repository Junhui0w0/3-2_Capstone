import React from 'react';
import {Link, useNavigate } from 'react-router-dom';
import styleF from "./Fileselect.module.css";

function Fileselect({data})  {
    const navigate = useNavigate(); 
    
    return (
        <div className={`${styleF.Files}`}>
            <div className={`${styleF.File} `} onClick={() => {handleSlotSelection(data, navigate);}}></div>
            <div className={`${styleF.Text} `}>save{data}</div>
        </div>
    );
};
function handleSlotSelection(slotNumber, navigate) {
    sessionStorage.setItem('selectedSlot', slotNumber); // 선택된 슬롯을 저장
    console.log(`Slot ${slotNumber} selected`);

    // 선택된 슬롯에 따라 WebGL 페이지로 리디렉션
    window.location.href = '/webgl';
    
}

export default Fileselect;