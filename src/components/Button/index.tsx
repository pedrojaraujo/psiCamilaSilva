import React from "react";

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`${className} laptop:text-sm laptop:py-2 bg-default-pink text-white font-bold py-3 px-10 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
