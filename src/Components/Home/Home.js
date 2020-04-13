import React from 'react';
import ModuleCard from '../ModuleCard/ModuleCard';
import modules from '../../modules';

export const Home = () => {
  const modulesToShow = Object.keys(modules)
  const moduleCards = modulesToShow.map( module => {
    return (
      <ModuleCard {...modules[module]} key={modules.id}/>
    )
  })
  console.log(moduleCards)
  return (
    <div>
      <h2>This is the home page</h2>
      <div>
        {moduleCards}
      </div>
    </div>
  )
  
}

export default Home;
