import React from "react";
import {twMerge} from "tailwind-merge";

const Button = ({className}) => {
  return <button className={`bg-green-500 ${className}`}></button>;
};

export default Button;
