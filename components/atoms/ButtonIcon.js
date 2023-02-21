import React from "react";

const ButtonIcon = ({
  children,
  variant,
  size,
  square,
  className = "",
  ...rest
}) => {
  const _variant = variant == "outlined" ? "btn-outline" : "";
  const _square = square ? "btn-square" : "btn-circle";
  const _size = size == "sm" ? "btn-sm" : "";

  return (
    <button
      className={`btn ${_square} border-none ${_variant} ${_size} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export default ButtonIcon;
