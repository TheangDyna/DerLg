import React, { useState } from "react";
import ButtonIcon from "./ButtonIcon";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";

const Input = ({ className = "", type, ...rest }) => {
  const [isShow, setShow] = useState(false);
  return (
    <div className="relative">
      <input
        {...rest}
        type={isShow ? "text" : type}
        className={`input input-bordered border-black bg-inherit w-full text-[#000000] ${className}`}
      />
      {type == "password" && (
        <ButtonIcon
          size="sm"
          className="absolute top-0 right-0 mt-2 mr-2 bg-inherit hover:bg-[#F2F2F2]"
          onClick={() => setShow(!isShow)}
        >
          {isShow ? (
            <EyeIcon className="h-6 w-6 text-[#A2A2A2]" />
          ) : (
            <EyeSlashIcon className="h-6 w-6 text-[#A2A2A2]" />
          )}
        </ButtonIcon>
      )}
    </div>
  );
};

export default Input;
