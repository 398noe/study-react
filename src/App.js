// DO NOT DELETE

import * as React from 'react'
import Header from './Header'
import Description from './Description'

import './App.css'
import { DogListContainer } from './DogListContainer'
/**
 * 
 * @type {React.FC}
 */
export const App = () => {
  return (
    <div>
      <Header />
      <Description />
      <hr />
      <DogListContainer />
    </div>
  )
}

