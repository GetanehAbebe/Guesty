import React from "react";

interface InputProps extends React.ComponentProps<"input"> {}

const Input: React.FC<InputProps> = ({
  onChange,
  name,
  placeholder,
  value = "",
  ...restProps
}) => {
  return (
    <input
      onChange={onChange}
      name={name}
      placeholder={placeholder}
      value={value}
      {...restProps}
    />
  );
};

export default Input;
