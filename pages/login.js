import Head from "next/head";
import Layout from "../layout/Auth";
import Link from "next/link";
import styles from "../styles/Form.module.css";
import Image from "next/image";
import { HiOutlineMail } from "react-icons/hi";
import { MdPassword } from "react-icons/md";

export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10 ">
        <div className="title">
          <h1 className="text-gray-900 text-4xl font-bold py-4">Login</h1>
          <p className="w-3/4 mx-auto text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5 mx-auto">
          <div className={styles.input_group}>
            <input
              type="email"
              name="email"
              placeholder="Email"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <HiOutlineMail size={25}></HiOutlineMail>
            </span>
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
            <span className="icon flex items-center px-4">
              <MdPassword size={25}></MdPassword>
            </span>
          </div>
        </form>
        <form className="flex flex-col gap-5 mx-auto">
          {/* login button */}
          <div className="input-button text-gray-500">
            <button type="submit" className={styles.button}>
              Login
            </button>
          </div>
          <div className="input-button text-gray-500">
            <button type="button" className={styles.button_costum}>
              <Image src={"/asset/google.svg"} width={20} height={20}></Image>{" "}
              Sign In with Google
            </button>
          </div>
          <div className="input-button text-gray-500">
            <button type="button" className={styles.button_costum}>
              <Image src={"/asset/github.svg"} width={25} height={25}></Image>{" "}
              Sign In with Github
            </button>
          </div>
        </form>
        {/* bottom */}
        <p className="text-center text-gray-500">
          Don't have account ?
          <Link href={"/register"} className="text-blue-500">
            {/* <a className="text-blue-500">Click here</a> */}
            Click here
          </Link>
        </p>
      </section>
    </Layout>
  );
}
