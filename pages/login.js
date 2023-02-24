import Head from "next/head";
import Layout from "../layout/Auth";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import { useState } from "react";
import { signIn, signOut } from "next-auth/react";
import { useFormik } from "formik";

export default function Login() {
  const [show, setShow] = useState();
  // Cotum Login
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  // For Google
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" }); // redirect autorized user to home page
  }

  // For Github
  async function handleGithubSignin() {
    signIn("github", { callbackUrl: "http://localhost:3000" });
  }

  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>
      <section className="w-3/4 mx-auto flex flex-col gap-10 ">
        <div className="title bg-loginPage">
          <h1 className="text-gray-900 text-4xl font-bold py-4">Login</h1>
          <p className="w-3/4 mx-auto text-gray-500">
            Lorem ipsum dolor sit amet.
          </p>
        </div>

        {/* form */}
        <form
          className="flex flex-col gap-5 mx-auto"
          onSubmit={formik.handleSubmit} // for costum login when click submit
        >
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")} // for costum login
            />
            <span className="icon flex items-center px-4">
              <HiOutlineMail size={25}></HiOutlineMail>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")} // for costum login
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow(!show)}
            >
              <MdPassword size={25}></MdPassword>
            </span>
          </div>

          {/* login button */}
          <div className="input-button text-gray-500">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button text-gray-500">
            <button
              type="button"
              onClick={handleGoogleSignin}
              className={styles.button_costum}
            >
              <Image src={"/asset/google.svg"} width={20} height={20}></Image>{" "}
              Sign In with Google
            </button>
          </div>
          <div className="input-button text-gray-500">
            <button
              type="button"
              onClick={handleGithubSignin}
              className={styles.button_costum}
            >
              <Image src={"/asset/github.svg"} width={25} height={25}></Image>{" "}
              Sign In with Github
            </button>
          </div>
        </form>
        {/* bottom */}
        <p className="text-center text-gray-500">
          Don't have account ?
          <Link href={"/register"} className="text-grey-700 font-bold">
            &nbsp;Click here
          </Link>
        </p>
      </section>
    </Layout>
  );
}
