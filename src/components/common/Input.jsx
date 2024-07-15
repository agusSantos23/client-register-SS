import PropTypes from 'prop-types';
import { useState } from 'react';



import eye from "../../assets/eye/eye.svg"
import eyeSlash from "../../assets/eye/eye-slash.svg"
function Input({ type, id, placeHolder }) {
  const [viewPassword, setViewPassword] = useState(true);

  const handledView = () => setViewPassword(!viewPassword);

  let styles = "text-Mydark bg-Mywhite w-96 text-xl tracking-wide pl-2 py-3 rounded-md border-Mylightorange border-4 focus:outline-none dark:text-Mywhite dark:bg-Mydark";

  if (type === "password") {
    styles += " pr-11";
    !viewPassword && (styles += " text-Myorange");

    return (
      <div className="relative">
        <input
          type={viewPassword ? "password" : "text"}
          id={id}
          name={id}
          placeholder={placeHolder}
          className={styles}
        />
        <img
          onClick={handledView}
          src={viewPassword ? eye : eyeSlash}
          alt="viewPassword"
          className="absolute right-2 top-3 stroke-blue-400 cursor-pointer"
        />
      </div>
    )
  } else {
    styles += " pr-2 focus:text-Myorange";

    return (
      <input
        type={type}
        id={id}
        name={id}
        placeholder={placeHolder}
        className={styles}
      />
    )
  }
}

Input.propTypes = {
  type: PropTypes.oneOf(['text', 'password', 'email']).isRequired,
  id: PropTypes.string.isRequired,
  placeHolder: PropTypes.string.isRequired,
};


export default Input