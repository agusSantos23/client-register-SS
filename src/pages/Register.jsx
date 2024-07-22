import { useForm } from "react-hook-form"
import { useNavigate } from "react-router-dom"
import { toast, ToastContainer  } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css'
import { useAuth } from "../context/useAuth"



import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"
import { useEffect } from "react"

function Register() {

  const { register, handleSubmit, 
    formState:{errors}
  } = useForm();
  const { signup, isAuthenticated, errors: authErrors } = useAuth()
  const navigate = useNavigate()


  useEffect(() => {
    if(isAuthenticated) {

      toast.success("Se a creado la cuenta de usuario, redireccionando",{
        position: "bottom-center",
        theme: "colored",
      })
      setTimeout(()=>{
        navigate('/home')
      },3000)
      
    }
  }, [isAuthenticated, navigate])

  useEffect(()=>{
    authErrors.forEach(err => toast.error(err ,{
      position: "bottom-center",
      theme: "colored",
    }))
  },[authErrors])

  const onSubmit = handleSubmit(async data => {
    
    signup(data)

  })


  
  return (
    <>
      <form
        onSubmit={onSubmit}
        className="flex flex-col justify-center gap-20 items-center h-full"
      >
        <div className="flex flex-col gap-10">
          <Input 
            type="email" 
            id="email" 
            placeholder="Correo Electrónico" 
            register={register}
            errors={errors}
            required={true}
          />
          <Input 
            type="text" 
            id="username" 
            placeholder="Nombre de usuario"
            register={register}
            errors={errors}
            required={true}
          />

          <Input 
            type="password" 
            id="password" 
            placeholder="Contraseña"
            register={register}
            errors={errors}
            required={true}
            minLength={8}
          />
        </div>

        <Enviar content="Registrarse" />
      </form>

      <ToastContainer />
    </>
  )
}

export default Register;
