import React, {useEffect, useState} from 'react'
import {shortList, list, longList} from '../data' 
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft, FiChevronRight} from 'react-icons/fi'

const Carousel = () => {
 const [people, setPeople] =  useState(list)
 const [currentPerson, setCurrentPerson] = useState(3)



const prevSlide = () => {

   setCurrentPerson((oldPerson) => {
     const result = (oldPerson - 1 + people.length) % people.length
     return result
   })



}

const nextSlide = () => {

  setCurrentPerson((oldPerson)=>{
    const result = (oldPerson + 1) % people.length;
    return result 
  })
}

// autoplay 

useEffect(()=>{

let sliderID = setInterval(()=>{
nextSlide()
  
},2000)
return () => {
  clearInterval(sliderID)
}

},[currentPerson])


  return (
    <section className="slider-container">
      

      <button type="button" className="prev" onClick={prevSlide}>
        <FiChevronLeft />
      </button>

      <button type="button" className="next" onClick={nextSlide}>
        <FiChevronRight />
      </button>
    </section>
  )

  
}

export default Carousel