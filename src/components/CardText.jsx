import React from 'react'

const CardText = ({phraseRandom, colorRandom, clickButtom}) => {

 

   const styleRandom  = {
     color: colorRandom
  }

  const styleRandoms  = {
    background: colorRandom
   }
  return (
    <div className="content">
         
        <p 
        style={styleRandom} 
        className='content__text'>
        <i style={styleRandom} 
        className='bx-pull-left bx bxs-quote-alt-left bx-lg'/>
       {phraseRandom.quote}</p>
         
         
        <h6 
        style={styleRandom} 
        className="content__title"
        >{phraseRandom.author}</h6>
        
        <button 
        onClick ={clickButtom} 
        style={styleRandoms} 
        className="content__btn"
        >&#62;</button>
    
    </div>

  )
}

export default CardText