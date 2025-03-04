import { useState } from "react";
import React from 'react';
import styleL from "./Login.module.css";
import axios from 'axios';

function Login({setnb, isVisible, DOORB, setInvisibility})  {
    const [Slot, setSlot] =useState(true);
    const [userId, setUserId] = useState('');
    const [userPw, setUserPw] = useState(''); //(+)사용자 password 저장

    const checkID = async () => { //userId 존재여부에 따른 메시지 출력
        try{
        const checkResponse = await axios.post('/api/checkUserId', { userId });
        if (checkResponse.data.exists) {
            console.log("checkResponse.data.exists: ", checkResponse.data.exists);
            handleLogin();
        }
        else{
            const confirmMessage = `ID: ${userId}로 계정을 생성하시겠습니까?`;
            const CreateCheck = window.confirm(confirmMessage);
            if(CreateCheck){
            handleLogin();
            }
            else{ alert('ID와 Password를 다시 입력해주세요.');}
        }
        }
        catch(error){
        console.error('Login error:', error);
        alert('ERROR IN [checkID]');
        }
    };
    const handleLogin = async () => {
        try {
        const response = await axios.post('/api/login', { userId, userPw });
        const { data } = response;
    
        // 로그인 성공 시 userId 저장
        sessionStorage.setItem('userId', userId);
    
        // 슬롯 선택 페이지로 리디렉션
        //window.location.href = '/selectslot';
        setSlot(false); setnb(true);
        } catch (error) {
        if (error.response && error.response.status === 501) {
            alert('아이디 또는 비밀번호가 잘못되었습니다.');
        } else if (error.response && error.response.status === 502) {
            alert('ID와 Password를 다시 입력해주세요.');
        } else {
            console.error('Login error:', error);
            const msg = `HandleLogin ERROR : ${error}`;
            alert(msg);
        }
        }
    };


    return (
        
        <div className={`${styleL.Login} `} style= {{display: DOORB && Slot ? 'flex' : 'none', transform: isVisible ? 'scale(0.2)' : 'scale(1)',opacity: isVisible ? '0.2' : '1', pointerEvents: isVisible ? 'none' : 'auto'}}>
            <div className={`${styleL.blurshadow}`}>
            </div>
            <div className={`${styleL.Name} absolute`} onClick={() => { checkID();}}>
                <div className={`${styleL.Namein}`}>Liberation</div>
            </div>
            <div className={`${styleL.Id} `}>
                <input type='text' 
                        placeholder='ID'
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        ></input>
            </div>
            <div className={`${styleL.Pw} `}>
            <input type='password' 
                    placeholder='PW'
                    value={userPw}
                    onChange={(e) => setUserPw(e.target.value)}
                    ></input>
            </div>
        </div>
    );
};

export default Login;
//'visible' : 'hidden'