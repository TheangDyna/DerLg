import react from "react";

import logo from "../../public/logo.png";
const Logo = ({ src = logo, size = "sm", className = "" }) => {
  const _size =
    size == "sm"
      ? "h-[32px]"
      : size == "md"
      ? "h-[48px]"
      : size == "lg"
      ? "h-[72px]"
      : "h-[32px]";
  return (
    <img
      src={src.src}
      className={`object-cover object-center ${_size} ${className}`}
    />
  );
};

export default Logo;
