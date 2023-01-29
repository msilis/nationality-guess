import './SubmitButton.css';

function SubmitButton(props){


    return(
        <div id='submit-button' onClick={props.buttonClick}>
            <p id='submit-text'>Guess!</p>
        </div>
    )
}

export default SubmitButton;