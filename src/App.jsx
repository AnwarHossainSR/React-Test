import React, { createContext } from 'react'
import ComA from './component/ComA';

const FirstName = createContext()
const LastName = createContext()
const App = () => {
  return (
    <div>
      <FirstName.Provider value={"Mahedi"}>
        <LastName.Provider value={"Hasan"}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  )
}

export default App
export {FirstName,LastName}
