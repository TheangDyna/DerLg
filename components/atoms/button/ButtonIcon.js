import React from "react";

const ButtonIcon = ({
  children,
  variant,
  size = "md",
  square = false,
  className = "",
  ...rest
}) => {
  const _variant = variant == "outlined" ? "btn-outline" : "";
  const _square = square ? "btn-square" : "btn-circle";

  return (
    <button
      className={`btn ${_square} border-none ${_variant} btn-${size} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
};

export { ButtonIcon };
