import React from "react";

interface ButtonProps extends React.ComponentProps<"button"> {}

const Button: React.FC<ButtonProps> = ({
  onClick,
  type,
  disabled,
  children,
  ...resProps
}) => {
  return (
    <button type={type} onClick={onClick} disabled={disabled} {...resProps}>
      {children}
    </button>
  );
};

export default Button;
