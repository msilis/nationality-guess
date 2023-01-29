import './App.css';
import { useState } from 'react';
import DisplayResult from './Components/DisplayResult/DisplayResult';
import Header from './Components/Header/Header';
import UserInput from './Components/UserInput/UserInput';

function App() {

  //State for entered name  
  const [userName, setUserName] = useState('');
  //State for country code that is returned from API
  const [country, setCountry] = useState('')


  function handleButtonClick(){
    console.log(userName)
    const fetchName = async ()=>{
        const data = await fetch(`https://api.nationalize.io?name=${userName}`);
        const jsonData = await data.json();
        //Get name of country that country code refers to
        const codeData = await fetch(`https://restcountries.com/v3.1/alpha/${jsonData.country[0].country_id}`);
        const codeJsonData = await codeData.json()
        setCountry(codeJsonData[0].name.common);
    }
    const fetchResult = fetchName().
    catch(console.error);
    
}

  return (
    <div className="App">
      <Header />
      <UserInput setUserName={setUserName} userName={userName} buttonClick={handleButtonClick}/>
      <DisplayResult country={country}/>
    </div>
  );
}

export default App;
