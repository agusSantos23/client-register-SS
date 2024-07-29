import { useAuth } from "../context/useAuth"
import { Navigate } from "react-router-dom"

function Home(){

  const { isAuthenticated } = useAuth()

  if(!isAuthenticated) return <Navigate to='/' replace />
  return(
    <>
      <h1>HOME</h1>
    </>
  )

}


export default Home