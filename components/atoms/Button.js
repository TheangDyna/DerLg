import React from "react";

const Button = ({
  children,
  variant,
  width,
  size = "md",
  className = "",
  ...rest
}) => {
  const _variant =
    variant == "link"
      ? "btn-link"
      : variant == "text"
      ? "btn-ghost"
      : variant == "outlined"
      ? "btn-outline"
      : "";
  const _width =
    width == "full" ? "btn-block" : width == "wide" ? "btn-wide" : "";
  return (
    <button
      className={`text-white btn normal-case ${_variant} ${_width} btn-${size} ${className}`}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
