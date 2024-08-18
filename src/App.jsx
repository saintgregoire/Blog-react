import { useState } from 'react'
import Home from './Pages/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[1440px] my-0 mx-auto'>
      <Home />
    </div>
  )
}

export default App
