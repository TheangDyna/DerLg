import React from "react";

const ButtonIcon = ({
  children,
  variant,
  size = "md",
  shape = "circle",
  className = "",
  ...rest
}) => {
  const _variant = variant == "outlined" ? "btn-outline" : "";

  return (
    <button
      className={`btn btn-${shape} border-none ${_variant} btn-${size} ${className}`}
      {...rest}>
      {children}
    </button>
  );
};

export { ButtonIcon };
