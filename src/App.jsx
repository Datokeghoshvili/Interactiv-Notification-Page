import { useState } from 'react'
import Notification from './Components/Notification'

function App() {
  const [count, setCount] = useState(0)

  return (
  <main className='bg -[#F7FAFD] h-[100vh] flex justify-center items-center'>
    <Notification/>
  </main>
  
  )
}

export default App
