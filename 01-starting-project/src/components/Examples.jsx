import React, { useState } from 'react'
import TabButton from './TabButton'
import { EXAMPLES } from '../data'
import Section from './Section';
import Tabs from './Tabs';

const Examples = () => {
    const [selectedTopic, setSelectedTopic] = useState();
    function handleClick(selectedButton) {
      setSelectedTopic(selectedButton);
    }
  return (
    <Section title="Examples" id="examples">
        <Tabs  buttons={<>
            <TabButton isSelected={selectedTopic==='components'} onClick={() => handleClick("components")}>
        Components
      </TabButton>
      <TabButton isSelected={selectedTopic==='jsx'} onClick={() => handleClick("jsx")}>Jsx</TabButton>
      <TabButton isSelected={selectedTopic==='props'} onClick={() => handleClick("props")}>Props</TabButton>
      <TabButton isSelected={selectedTopic==='state'} onClick={() => handleClick("state")}>State</TabButton></>}> {!selectedTopic ? <p>Plase select a topic</p> : <div id="tab-content">
        
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>}</Tabs>
   
   
    
  </Section>
  )
}

export default Examples