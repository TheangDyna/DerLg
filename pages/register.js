import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiOutlineUser, HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import Layout from "../layout/Auth";
import { useState } from "react";
import { useFormik } from "formik";

export default function Register() {
  const [show, setShow] = useState({
    password: false,
    cpassword: false,
  });

  // For costum register
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "", //confirm password
    },
    onSubmit,
  });

  async function onSubmit(values) {
    console.log(values);
  }

  return (
    <Layout>
      <section className="w-11/12 mx-auto flex flex-col gap-10">
        <div className="title bg-loginPage">
          <h1 className="text-gray-900 text-4xl font-bold py-4">Sign Up</h1>
          <p className="w-3/4 mx-auto text-gray-500">
            Lorem ipsum dolor sit amet .
          </p>
        </div>

        {/* form */}
        <form
          className="flex flex-col gap-5 mx-auto"
          onSubmit={formik.handleSubmit}
        >
          <div className={styles.input_group}>
            <input
              type="text"
              name="Username"
              placeholder="Username"
              className={styles.input_text}
              {...formik.getFieldProps("username")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineUser size={25}></HiOutlineUser>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
              {...formik.getFieldProps("email")}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineMail size={25}></HiOutlineMail>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type={`${show.password ? "text" : "password"}`}
              name="password"
              placeholder="Password"
              className={styles.input_text}
              {...formik.getFieldProps("password")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, password: !show.password })}
            >
              <MdPassword size={25}></MdPassword>
            </span>
          </div>

          <div className={styles.input_group}>
            <input
              type={`${show.cpassword ? "text" : "password"}`}
              name="password"
              placeholder="Confirm Password"
              className={styles.input_text}
              {...formik.getFieldProps("cpassword")}
            />
            <span
              className="icon flex items-center px-4"
              onClick={() => setShow({ ...show, cpassword: !show.cpassword })}
            >
              <MdPassword size={25}></MdPassword>
            </span>
          </div>

          {/* SignUp button */}
          <div className="input-button text-gray-500">
            <button type="submit" className={styles.button}>
              Sign up
            </button>
          </div>
        </form>
        {/* bottom */}
        <p className="text-center text-gray-500">
          Already have an account ?
          <Link href={"/login"} className="text-grey-900 font-bold">
            &nbsp;Login here
          </Link>
        </p>
      </section>
    </Layout>
  );
}
