import PropTypes from 'prop-types';
import logo from "../assets/logo.svg";

function Logo({ size }) {

  return (
    
    <div className="absolute top-24 right-1/2 translate-x-1/2">
      <img
        src={logo}
        alt="Logo"
        style={{ width: size, height: size }}
      />
    </div>
    
  );
}

Logo.propTypes = {
  size: PropTypes.string.isRequired,
};

export default Logo;
