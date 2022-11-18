import './App.css';
import {useState} from 'react';
import OriginalList from './components/OriginalList';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faStar } from '@fortawesome/free-solid-svg-icons'
// import { faStar as farStar} from '@fortawesome/free-regular-svg-icons'

import jasonData from './contacts.json';

function App() {

  const [currentContacts, setContacts] = useState(jasonData.slice(0,5));
  console.log(currentContacts)



  // function AddContact () {
    
    const addHandler = (event) => {
    //const data = [...jasonData]
    let newCelebrity = jasonData[Math.floor(Math.random()*jasonData.length)]

    setContacts((prevState) =>{
      return [newCelebrity, ...prevState]
    })    
  }

  const sortHandler = (event) => {
    let popularity = jasonData.sort((a,b) => b.popularity - a.popularity)
    setContacts(popularity)
  }
  const sortNameHandler = (event) => {
    let sortName = jasonData.sort((a,b) => b.name - a.name)
    setContacts(sortName)
  }


  return (
    <div className="App">
      <h1>IronContacts</h1>
      
      <button onClick={addHandler}>Add Random currentContacts</button>
      <button onClick={sortHandler}>Sort Contacts</button>
      <button onClick={sortNameHandler}>Sort by Name</button>

      
      <OriginalList currentContacts={currentContacts}></OriginalList>
    </div>
  )
}

export default App;
