import Head from "next/head";
import Layout from "../layout/Auth";
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
            laboriosam ducimus porro perspiciatis sit. Dolores perferendis fugit
            doloremque vitae similique, est itaque perspiciatis eius eaque
            veritatis asperiores animi non quibusdam.
          </p>
        </div>

        {/* form */}
        <form className="flex flex-col gap-5 mx-auto">
          <div className="input-group">
            <input type="email" name="email" placeholder="Email" />
          </div>
        </form>
        {/* bottom */}
      </section>
    </Layout>
  );
}
