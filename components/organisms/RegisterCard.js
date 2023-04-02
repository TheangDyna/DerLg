import React, { useState } from "react";
import { Button, Input, Typography, SocialButton } from "../../components";
import cloud from "../../public/cloud.png";
import facebook from "../../public/facebook.png";
import google from "../../public/google.png";
import mail from "../../public/mail.png";

const RegisterCard = ({ login }) => {
  const [isMial, setMail] = useState(false);
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
            <Typography variant="topic" className="text-[#000000]">
              Register
            </Typography>
            <Typography className="text-[#000000]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididu.
            </Typography>
          </div>
          <div className="flex flex-col items-end space-y-4">
            {isMial ? (
              <div className="w-full flex flex-col space-y-2">
                <div className="form-control w-full">
                  <label className="label" htmlFor="email">
                    <span className="label-text text-[#000000]">Email</span>
                  </label>
                  <Input
                    placeholder="Your email here..."
                    type="email"
                    name="email"
                  />
                </div>
                <div className="form-control w-full">
                  <label className="label" htmlFor="email">
                    <span className="label-text text-[#000000]">Password</span>
                  </label>
                  <Input
                    placeholder="Your password here..."
                    type="password"
                    name="email"
                  />
                </div>
              </div>
            ) : (
              <div className="w-full flex flex-col space-y-4">
                <SocialButton
                  image={facebook.src}
                  title="Register with Facebook"
                />
                <SocialButton image={google.src} title="Register with Google" />
                <SocialButton
                  image={mail.src}
                  title="Register with Email"
                  onClick={() => setMail(true)}
                />
              </div>
            )}

            <div className="text-right">
              <Typography className="text-[#000000]">
                Already have an account?{" "}
                <Button
                  className="text-[#000000] font-normal px-0"
                  variant="link"
                  onClick={login}
                >
                  <Typography className="text-[#000000]">Login</Typography>
                </Button>
              </Typography>

              {isMial && (
                <Typography className="text-[#000000]">
                  Register with Facebook or Google?{" "}
                  <Button
                    className="text-[#000000] font-normal px-0"
                    variant="link"
                    onClick={() => setMail(false)}
                  >
                    <Typography className="text-[#000000]">back</Typography>
                  </Button>
                </Typography>
              )}
            </div>
            {isMial && (
              <Button className="bg-[#000000] bg-opacity-80 hover:bg-[#000000] hover:bg-opacity-100">
                Register
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterCard;
