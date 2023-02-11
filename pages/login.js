import Head from "next/head";
import Layout from "../layout/Auth";
import Link from "next/link";
import styles from "../styles/Form.module.css";
export default function Login() {
  return (
    <Layout>
      <Head>
        <title>Login</title>
      </Head>

      <section className="w-3/4 mx-auto flex flex-col gap-10">
        <div className="title">
          <h1 className="text-gray-900 text-4xl font-bold py-4">Login here</h1>
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
          </div>
          <div className={styles.input_group}>
            <input
              type="password"
              name="password"
              placeholder="Password"
              className={styles.input_text}
            />
          </div>
        </form>
        <form className="flex flex-col gap-5 mx-auto">
          {/* login button */}
          <div className="input-button text-gray-500">
            <button type="submit">Login</button>
          </div>
          <div className="input-button text-gray-500">
            <button type="submit">Sign In with Google</button>
          </div>
          <div className="input-button text-gray-500">
            <button type="submit">Sign In with Github</button>
          </div>
        </form>
        {/* bottom */}
        <p className="text-center text-gray-500">
          Don't have account ?{" "}
          <Link href={"/register"}>
            {" "}
            <a className="text-blue-500">Click here</a>{" "}
          </Link>
        </p>
      </section>
    </Layout>
  );
}
