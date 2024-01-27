import React from "react";

const Button = ({ children, className }: Props) => {
  return (
    <button
      className={`${className} desktop:text-base laptop:text-sm desktop:py-3 laptop:py-2 bg-default-pink text-white font-bold px-10 rounded-full`}
    >
      {children}
    </button>
  );
};

export default Button;
