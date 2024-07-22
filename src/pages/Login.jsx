import { useForm } from "react-hook-form";
import { useAuth } from "../context/useAuth"
import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"
import { loginRequest } from "../api/auth";


function Login(){
  const { register, handleSubmit, 
    formState:{errors}
  } = useForm();

  const { signup } = useAuth()

  const onSubmit = handleSubmit(async data => {

    try {
      const res = await loginRequest(data)

      console.log(res.status);

      

    } catch (error) {
      console.log(error);
    }
    
  }) 

  return(
    <form 
      onSubmit={onSubmit}
      className="flex flex-col justify-center gap-20 items-center h-full"
    >
      <div className="flex flex-col gap-10">
        <Input 
          type="email" 
          id="email" 
          placeholder="Correo Electronico"
          register={register}
          required={true}
          errors={errors}
        />
        <Input 
          type="password" 
          id="password" 
          placeholder="Contraseña"
          register={register}
          required={true}
          errors={errors}
        />
      </div>

      <Enviar content="Iniciar Sesion" />
		</form>
  )
}

export default Login