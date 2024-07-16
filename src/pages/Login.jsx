
import { useForm } from "react-hook-form";

import Enviar from "../components/common/Enviar"
import Input from "../components/common/Input"



function Login(){
  const { register, handleSubmit, 
    formState:{errors}
  } = useForm();

  const onSubmit = handleSubmit(data => {
    console.log("Datos del formulario:", data);
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