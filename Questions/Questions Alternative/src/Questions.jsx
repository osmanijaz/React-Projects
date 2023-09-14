import React from 'react'
import SingleQuestions from './SingleQuestions'

const Questions = ({questions}) => {
  return (
   <section className='container'>
    <h1>Questions</h1>
    {questions.map((question)=>{
      return <SingleQuestions key={question.id} {...question}/>
    


    })}

   </section>
  )
}

export default Questions