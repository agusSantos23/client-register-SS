import { useForm } from "react-hook-form"
import { Navigate } from "react-router-dom"
import { toast, ToastContainer  } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'

import { useAuth } from "../context/useAuth"

import SectionData from "../components/SectionData"
import SectionPicture from "../components/SectionPicture"
import { useEffect } from "react"



function Home(){

  const { register, handleSubmit, 
    formState:{errors}
  } = useForm()

  
  

  const { 
    isAuthenticated, 
    loading,  
    updateProfile, 
    user,
    change,
  } = useAuth()
  
  const appVisited = user && Object.entries(user.app_visted);


  const onSubmit = handleSubmit(async data => updateProfile(data))

  useEffect(() => {
    if (change) {
      toast.success(change,{
        position: "bottom-right",
        theme: "colored"
      })
    }

  }, [change])



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


  return(
    <div className="grid grid-cols-3 grid-rows-1 border-4 border-Myorange h-full rounded-lg">
      
      <div className="flex justify-center items-center">
        
        <div className="text-center w-5/6">

          <h3 className="text-2xl mb-5 text-Mydark dark:text-Mywhite ">Paginas <b className="text-Myorange hover:text-Mylightorange duration-200">SS</b> Visitadas</h3>

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

      <SectionData onSubmit={onSubmit} user={user} register={register} errors={errors}/>

      <SectionPicture userPicture={user.picture.toString()} />
    
      <ToastContainer/>

    </div>
  )
}


export default Home