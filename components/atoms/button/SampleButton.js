import React from "react";

const SampleButton = ({ children, variant, width, size, className = "", ...rest}) => {
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
  const _size = size == "lg" ? "btn-lg" : size == "sm" ? "btn-sm" : "";
  return (
    <button
      className={`text-white btn normal-case ${_variant} ${_width} ${_size} ${className}`}
      {...rest}>
      {children}
    </button>
  );
};

export { SampleButton };
