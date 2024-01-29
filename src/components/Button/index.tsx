import React from "react";

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`${className}  desktop:py-3 laptop:py-2  text-white font-bold px-10 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
