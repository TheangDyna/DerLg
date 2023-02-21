import React from "react";

const Typography = ({ children, variant = "base", className = "", ...rest }) => {
  const _variant =
    variant == "display"
      ? "text-[60px] font-bold"
      : variant == "title"
      ? "text-[24px] font-bold"
      : variant == "base"
      ? "text-[16px]"
      : "text-[16px]";
  return (
    <p className={`text-white ${_variant} ${className}`} {...rest}>
      {children}
    </p>
  );
};

export default Typography;
