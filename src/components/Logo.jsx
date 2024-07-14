import PropTypes from 'prop-types';

import logo from "../assets/logo.svg"

function Logo({size}) {

  return (
    <div className="flex items-center">
      <img
        src={logo}
        alt="Logo"
        className={`w-${size} absolute left-1/2 top-16 -translate-x-1/2`}
      />
      
    </div>
  );
}

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};


export default Logo;
