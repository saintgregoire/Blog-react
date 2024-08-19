import { useState } from 'react'
import Header from './Components/Header';
import Footer from './Components/Footer';
import Home from './Pages/Home'
import BlogDetail from "./Pages/BlogDetail";
import { Routes, Route } from "react-router-dom"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='w-[1440px] my-0 mx-auto'>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/blog-detail/:id" element={<BlogDetail />}></Route>
      </Routes>
      <Footer />
    </div>
  )
}

export default App
