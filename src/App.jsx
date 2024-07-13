import {Route, Routes, Link} from "react-router-dom"
import { useState } from "react"

import Login from "./pages/Login"
import Register from "./pages/Register"
import Error from "./pages/Error"
import Logo from "./components/Logo"

function App() {
  const [isLogin, setIsLogin] = useState(true)

  const savedTheme = localStorage.getItem('theme');
  const isDarkMode = savedTheme ? savedTheme === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;

  const handleLoginClick = () => {
    setIsLogin(true);
  };

  const handleRegisterClick = () => {
    setIsLogin(false);
  };


  return (
    <div className="bg-Mydark h-svh">
      
      <Logo darkMode={isDarkMode} />

      <nav className=" flex items-center justify-center gap-5 py-3">
        {isLogin ?<Link to={"/"} onClick={handleRegisterClick}>Login</Link> :<Link to={"/register"} onClick={handleLoginClick}>Register</Link>}
      </nav>
      

      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Error />} />
      </Routes>
      

    </div>
  )
}

export default App
