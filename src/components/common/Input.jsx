import PropTypes from 'prop-types';
import { useState } from 'react';
import eye from "../../assets/eye/eye.svg";
import eyeSlash from "../../assets/eye/eye-slash.svg";

function Input({
  type = 'text',
  id,
  placeholder,
  register,
  errors,
  required = false,
  minLength = 0,
  ...props
}, ref) {


  const [viewPassword, setViewPassword] = useState(true);

  const handledView = () => setViewPassword(!viewPassword);

  let styles = "text-Mydark bg-Mywhite w-96 text-xl tracking-wide pl-2 py-3 rounded-md border-Mylightorange border-4 focus:outline-none dark:text-Mywhite dark:bg-Mydark";

  if (type === "password") {
    styles += " pr-11";
    !viewPassword && (styles += " text-Myorange");

    return (
      <div className='flex flex-col gap-2'>
        <div className="relative">
          <input
            ref={ref}
            type={viewPassword ? "password" : "text"}
            id={id}
            name={id}
            placeholder={placeholder}
            className={styles}
            {...register(id, {
              required: {
                value: required,
                message: `${placeholder} es requerido.`
              },
              minLength: {
                value: minLength,
                message: `Debe tener al menos ${minLength} caracteres.`
              }
            })}
            {...props}
          />
          <img
            onClick={handledView}
            src={viewPassword ? eye : eyeSlash}
            alt={viewPassword ? 'Mostrar contraseña' : 'Ocultar contraseña'}
            className="absolute right-2 top-3 stroke-blue-400 cursor-pointer"
          />
        </div>
        {errors[id] && <span className='ml-2 text-Myorange tracking-wide'>{errors[id].message}</span>}
      </div>
    )
  } else {
    styles += " pr-2 focus:text-Myorange";

    return (
      <div className='flex flex-col gap-2'>
        <input
          ref={ref}
          type={type}
          id={id}
          name={id}
          placeholder={placeholder}
          className={styles}
          {...register(id, {
            required: {
              value: required,
              message: `${placeholder} es requerido.`
            },
            minLength: {
              value: minLength,
              message: `Debe tener al menos ${minLength} caracteres.`
            }
          })}
          {...props}
        />
        {errors[id] && <span className='ml-2 text-Myorange tracking-wide'>{errors[id].message}</span>}
      </div>
    );
  }
}

Input.displayName = 'Input';

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']),
  id: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  register: PropTypes.func.isRequired,
  errors: PropTypes.object,
  required: PropTypes.bool,
  minLength: PropTypes.number,
};



export default Input;
