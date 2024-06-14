import React from 'react'
import { CORE_CONCEPTS } from '../data'
import CoreConcepts from './CoreConcepts'

const CoreConcept = () => {
  return (
    <section id="core-concepts">
    <h2>Time to get started!</h2>
    <ul>
      {CORE_CONCEPTS.map((coreItems)=>(<CoreConcepts key={coreItems.title} {...coreItems}></CoreConcepts>))}
    </ul>
  </section>
  )
}

export default CoreConcept