import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"

import { useAuth } from "../context/useAuth"

import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"
import { useState } from "react"


function Home(){

  const { register, handleSubmit, 
    formState:{errors}
  } = useForm()

  const {pictureUser, setPictureUser} = useState(undefined)

  const { isAuthenticated, loading, updateProfile, user } = useAuth()

  
  const appVisited = user && Object.entries(user.app_visted);

  if(loading) return(
    <div className="absolute right-1/2 top-1/2 translate-x-1/2 w-2/4 h-1/6 flex justify-center items-center border-Myorange border-4 rounded-lg tracking-widest font-bold">
      <h1 
        className="text-2xl text-Myorange"
      >
        Loading {""}

        <span className="inline-block animate-fadeOut">
          .
        </span> 
        <span className="inline-block animate-fadeOutDelay1">
          .
        </span> 
        <span className="inline-block animate-fadeOutDelay2">
          .
        </span>
      
      </h1>
    </div>
  ) 

  if(!loading && !isAuthenticated) return <Navigate to='/' replace />

  const onSubmit = handleSubmit(async data => updateProfile(data))



  return(
    <div className="grid grid-cols-3 border-4 border-Myorange h-full rounded-lg">
      
      <div className="flex justify-center items-center">
        
        <div className="text-center w-5/6">

          <h3 className="text-2xl mb-5 text-Myorange dark:text-Mywhite ">Paginas <b className="text-Myorange hover:text-Mylightorange duration-200">SS</b> Visitadas</h3>

          <div className="flex flex-wrap gap-3 justify-center items-center">
            
            
            {appVisited.map(element => (
              <span 
                key={element[0]}
                className="text-xl py-1 px-3 tracking-widest rounded-md text-Mywhite  bg-Myorange hover:bg-Mydark hover:dark:bg-Mylightorange duration-500"
              >
                {element[1]}
              </span>
            ))}
            

          </div>
          
        </div>
      </div>

      <div className="flex flex-col justify-around">
        <header className="flex justify-center gap-3 flex-col items-center text-center dark:text-Mywhite">
          <h1 className="text-4xl">Hola {user.username}</h1>
          <h2 className="text-2xl">Control de Usuario</h2>
        </header>

        <form 
          onSubmit={onSubmit}
          className="flex flex-col justify-around  items-center h-4/6"
        >
          <Input
            type="email"
            id="email"
            placeholder="Correo Electrónico" 
            register={register}
            errors={errors}
          />
          <Input 
            type="text" 
            id="username" 
            placeholder="Nombre de usuario"
            register={register}
            errors={errors}
          />
          <Input 
            type="password" 
            id="password" 
            placeholder="Contraseña"
            register={register}
            errors={errors}
            minLength={8}
          />

          <Enviar content="Actualizar" />
        </form>
      </div>

      <div className="flex justify-center items-center">

        <div>
            
          <div>

          </div>
        </div>

      </div>
    </div>
  )

}


export default Home