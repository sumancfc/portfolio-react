import React from "react";
import { Link } from "react-scroll";

const Button = (props) => (
  <div className='button'>
    <Link
      className='button__link'
      to={props.target}
      spy={true}
      smooth={true}
      offset={-70}
      duration={500}
    >
      {props.label}
    </Link>
  </div>
);

export default Button;
