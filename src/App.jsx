import { useState } from 'react'
import './App.css'
import Users from './components/Users'

function App() {
 

  return (

   <div>
     <h1 className="text-3xl font-bold underline bg-red-400">
      Hello world!
    </h1>
    <div>
    <Users />
    </div>
   </div>

  )
}

export default App
