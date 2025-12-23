import { useState } from 'react'
import Nav from './layout/nav'
import Input from './components/Input'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Nav />
      <main>
        <Input />    
      </main>
    
    </>    
  )
}

export default App
