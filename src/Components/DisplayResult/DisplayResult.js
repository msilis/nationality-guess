import './DisplayResult.css';

function DisplayResult(props){
    return(
        <div className='display-result-container'>
            <h3 id='result-title'>Here's my guess:</h3>
            <p id="country-display">{props.country}</p>
        </div>
    )
}

export default DisplayResult;