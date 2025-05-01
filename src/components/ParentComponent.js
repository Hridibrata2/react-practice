import React from 'react'
import ChildComponent from './ChildComponent'

const ParentComponent = () => {
   const greetParent = (childName) => {
      alert(`hello parent ${childName}`)
   }
  
   return(
    <ChildComponent greetHandler={greetParent}/>
   )
}

export default ParentComponent