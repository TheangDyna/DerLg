import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiOutlineUser, HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";
import Layout from "../layout/Auth";
import { useState } from "react";
import { useFormik } from "formik";
import { registerValidate } from "../lib/validate";
import { useRouter } from "next/router";

export default function Register() {
  const [show, setShow] = useState({
    password: false,
    cpassword: false,
  });
  const router = useRouter();
  // For costum register
  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
      cpassword: "", //confirm password
    },
    validate: registerValidate,
    onSubmit,
  });

  // When we submit the register create a new account
  async function onSubmit(values) {
    // Fetch to database
    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values),
    };

    await fetch("http://localhost:3000/api/auth/signup", options)
      .then((res) => res.json())
      .then((data) => {
        if (data) router.push("http://localhost:3000/");
      });
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
          {/* print error if not satisfy the validator */}
          {formik.errors.username && formik.touched.username ? (
            <span className="text-xs">{formik.errors.username}</span>
          ) : (
            <></>
          )}
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
          {/* print error if not satisfy the validator */}
          {formik.errors.email && formik.touched.email ? (
            <span className="text-xs">{formik.errors.email}</span>
          ) : (
            <></>
          )}
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
          {/* print error if not satisfy the validator */}
          {formik.errors.password && formik.touched.password ? (
            <span className="text-xs">{formik.errors.password}</span>
          ) : (
            <></>
          )}

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
          {/* print error if not satisfy the validator */}
          {formik.errors.cpassword && formik.touched.cpassword ? (
            <span className="text-xs">{formik.errors.cpassword}</span>
          ) : (
            <></>
          )}

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
