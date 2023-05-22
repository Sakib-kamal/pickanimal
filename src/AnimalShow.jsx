import './App.css';
import { useState } from 'react'
import React from 'react'
import cat from './svg/cat.svg'
import bird from './svg/bird.svg'
import cow from './svg/cow.svg'
import dog from './svg/dog.svg'
import gator from './svg/gator.svg'
import horse from './svg/horse.svg'
import heart from './svg/heart.svg'

const Svg = {
    cat,
    bird,
    cow,
    dog,
    gator,
    horse

}


const AnimalShow = ({type}) => {
    const [click , setClick]=  useState(0)

    const handleClick =() =>{
       setClick(click +1);
        
        }
        

  return (
   <div className = "animal-show" onClick={handleClick}>
    <img className = "animal" src = {Svg[type]} alt = "animal" />
    <img className = " heart" src = {heart} alt = "animal" style = {{ width: 10 + 10 * click + "px"}} />
   </div>
  )
}

export default AnimalShow