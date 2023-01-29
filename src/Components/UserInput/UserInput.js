import { useEffect, useRef } from 'react';
import SubmitButton from '../SubmitButton/SubmitButton';
import './UserInput.css'

function UserInput(props){
    
    const nameRef = useRef();

    //Set state to store input name
    function handleUserInput(event){
        props.setUserName(event.target.value);
    }

    //Focus on input box when page loads
    useEffect(()=>{
        nameRef.current.focus()
    })

    return(
        <div className='input-container'>
            <label id='name-label'>Enter your name:</label>
            <input name='Name' type='text' id='name-input' ref={nameRef} onChange={handleUserInput}></input>
            <SubmitButton buttonClick={props.buttonClick}/>
        </div>
    )
}

export default UserInput;