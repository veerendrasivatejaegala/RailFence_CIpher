import React, { useState } from 'react'

const LogicComponent = () => {
    const [InputStr,SetInputStr] = useState("");
    const [key,SetKey] = useState();
    const [FinalCipher, setFinalCipher] = useState(""); 

    const InputHandler = (e)=>{
        SetInputStr(e.target.value); 
    }

    const KeyHandler = (e)=>{
        SetKey(e.target.value); 
    }

    let ciphertext = "";
    let arr = [];

    const CipherText = ()=>{
        let strLen = InputStr.length;

        arr = [];         
        ciphertext = ""; 

        for (let i = 0; i < strLen; i++) {
            arr.push("");
        }

        for (let i = 0; i <= strLen; i++) {
            let remainder = i % key;
            arr[remainder] += InputStr.charAt(i);
        }
        ciphertext = "";  

        for (let i = 0; i < arr.length; i++) {
            ciphertext += arr[i];
        }

        setFinalCipher(ciphertext); 

         
    }
    const reset = ()=>{
        SetInputStr("");  
        SetKey(2);        
        arr = [];        
        ciphertext = "";
    }
    

    return (
        <div className='LogicComponent'>
            <input onChange={InputHandler} placeholder='Enter Plain Text' className='InputBox' value={InputStr} /><br/>
            <input onChange={KeyHandler} placeholder='Enter Key Value' className='InputBox' value={key} /><br/>
            <button onClick={CipherText} className='OutputRetrivalButton'>Fetch</button>

            <div className='OutputBox'>
                <h1>{FinalCipher}</h1>
            </div>
        </div>
    )
}

export default LogicComponent
