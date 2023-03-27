import React from "react";
import { Button, Input, Typography } from "../../components";
import cloud from "../../public/cloud.png";

const LoginCard = ({register}) => {
  return (
    <div
      style={{
        background:
          "linear-gradient(360deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0.15) 100%)",
      }}
      className="bg-center bg-cover rounded-[15px] w-[500px] overflow-hidden pt-[20px]"
    >
      <div
        style={{
          backgroundImage: `url(${cloud.src})`,
        }}
        className="bg-top bg-cover w-full h-full flex pt-[160px] px-[20px] pb-[40px]"
      >
        <div className="flex flex-col p-4 mt-auto space-y-4">
          <div>
            <Typography variant="topic" className="text-black">
              Login
            </Typography>
            <Typography className="text-black">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididu.
            </Typography>
          </div>
          <div className="flex flex-col items-end space-y-4">
            <div className="w-full flex flex-col space-y-2">
              <div className="form-control w-full">
                <label className="label" htmlFor="email">
                  <span className="label-text text-black">Email</span>
                </label>
                <Input
                  placeholder="Your email here..."
                  type="email"
                  name="email"
                />
              </div>
              <div className="form-control w-full">
                <label className="label" htmlFor="email">
                  <span className="label-text text-black">Password</span>
                </label>
                <Input
                  placeholder="Your password here..."
                  type="password"
                  name="email"
                />
              </div>
            </div>
            <div className="text-right">
              <Typography className="text-black">
                Forget password?{" "}
                <Button className="text-black font-normal px-0" variant="link">
                  <Typography className="text-black">Reset Password</Typography>
                </Button>
              </Typography>
              <Typography className="text-black">
                Don't have an account?{" "}
                <Button className="text-black font-normal px-0" variant="link" onClick={register}>
                  <Typography className="text-black">Register</Typography>
                </Button>
              </Typography>
            </div>
            <Button className="bg-black opacity-75 hover:bg-black hover:opacity-100">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCard;
