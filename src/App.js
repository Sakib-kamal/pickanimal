import { useState } from "react";
import AnimalShow from "./AnimalShow";
import './App.css'

function getRandomAnimal() {
    const animals = [ 'bird', 'horse', 'cow' , 'gator' , 'dog', 'cat' ]
return animals[Math.floor(Math.random() * animals.length)];

}

function App() { 
   const [animals, setAnimal] = useState([]);
   
   const handleClick = () =>{
   setAnimal([...animals, getRandomAnimal()])

   }

  const renderdAnimals = animals.map((animal , index) => {
    return <AnimalShow type = {animal} key = {index} />

  })

return (

    <div className = "app">
     <button onClick ={handleClick}> Add animal</button>
      <div className = "animal-list" >{renderdAnimals}</div>
    </div>

);

}

export default App;