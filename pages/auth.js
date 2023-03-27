import react, { useState } from "react";
import { LoginCard, RegisterCard } from "../components";
import bgLogin from "../public/bgLogin.webp";
import cloubgRegisterd from "../public/bgRegister.jpg";

const Auth = () => {
  const [auth, setAuth] = useState("login");
  return (
    <div
      style={{
        backgroundImage: `url(${
          auth == "login" ? bgLogin.src : cloubgRegisterd.src
        })`,
      }}
      className="h-screen w-full bg-center bg-cover flex justify-end items-center pr-[80px]"
    >
      {auth == "login" ? (
        <LoginCard register={() => setAuth("register")} />
      ) : (
        <RegisterCard login={() => setAuth("login")} />
      )}
    </div>
  );
};

export default Auth;
