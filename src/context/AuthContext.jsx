import { createContext, useEffect, useState } from "react";
import { registerRequest, loginRequest, verityTokenRequest } from "../api/auth"
import { pictureRequest, profileRequest } from "../api/profile";
import PropTypes from "prop-types";
import Cookies from "js-cookie";

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [errors, setErrors] = useState([]);
  const [change, setChange] = useState([])
  const [loading, setLoading] = useState(true)
  const [isCooldown, setIsCooldown] = useState(false)

  const signup = async user =>{

    try{
      const res = await registerRequest(user)

      setUser(res.data)
      setIsAuthenticated(true)
      setErrors([])
    }catch(error){
      setErrors( error?.response?.data?.message || error?.response?.data?.error || ["An unexpected error occurred"])
    }
  }

  const signin = async user =>{

    try {
      const res = await loginRequest(user)

      setUser(res.data)
      setIsAuthenticated(true)
      setErrors([])
    } catch (error) {

      setErrors( error?.response?.data?.message || error?.response?.data?.error || ["An unexpected error occurred"])
    }
  }

  const updateProfile = async data =>{

    try {
      
      if (Object.values(data).some(value => value !== '')) {

        let dataUser = {}
  
        for(let key in data){
          if(data[key] !== "") dataUser[key] = data[key]
        }
        
        const res = await profileRequest(
          {
            emailUser: user.email,
            dataUser: dataUser
          }
        )
  
        
        if (res.status === 200) {
          let madeChange = []
          console.log(res.data);
          
          if (res.data.resultEmail === true) {
            let boxUser = { ...user }
            boxUser.email = data.email
            setUser(boxUser)
            madeChange.push("Correo electrónico");

          }
          
          if (res.data.resultUsername === true) {
            let boxUser = { ...user }
            boxUser.username = data.username
            setUser(boxUser)
            madeChange.push("Usuario");

          }

          if (res.data.resultPassword === true) {
            madeChange.push("Contraseña");
          }

          setChange(madeChange)
          

          setTimeout(() => {
            setChange([])
          }, 100);
        }
      }else{
        setErrors(["No has enviado ningun valor nuevo"])        
      }

    } catch (error) {
      if ( error.response && error.response.status === 409) {
        setErrors(["Ese correo ya esta en uso"])
        
      }else{
        setErrors(["Ha ocurrido un error al actulizar los datos de Usuario"])

      }
    }
  }

  const updatePicture = async pictureNumber =>{

    if (isCooldown) return

    setIsCooldown(true)
    try {
      
      const res = await pictureRequest(
        {
          email: user.email,
          pictureNumber: pictureNumber
        }
      )

      if (res.status === 200) {
        setChange(res.data.message)

        let boxUser = user
        boxUser.picture = +pictureNumber
        setUser(boxUser);


        setTimeout(() => {
          setChange([])
        }, 100);
      }
      


    } catch (error) {
      throw new Error("Error set new picture")

    }finally {
      setTimeout(() => {
        setIsCooldown(false)
      }, 5500);
    }
  }

  const logout = () =>{
    setErrors([])
    Cookies.remove("token")
    setIsAuthenticated(false)
    setUser(null)
    
  }

  useEffect(() => {

    const cookies = Cookies.get()

    async function checkLogin(){

      if (!cookies.token) {
        
        setLoading(false)
        setIsAuthenticated(false)
        setUser(null)
      }
      
      try {

        const res = await verityTokenRequest(cookies.token)     
        if(!res.data) {
          setLoading(false)
          setIsAuthenticated(false)
        } 
        
        setLoading(false)
        setIsAuthenticated(true)
        setUser(res.data)

      } catch (error) {
        
        setLoading(false)
        setIsAuthenticated(false)
        setUser(null)
      }
      
    }
    checkLogin()

  }, [])

  return(
    <AuthContext.Provider 
      value={{
        signup,
        signin,
        logout,
        updateProfile,
        updatePicture,
        loading,
        user,
        isAuthenticated,
        change,
        errors,
        setErrors,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
