import Link from "next/link";
import Image from "next/image";

export default function section2() {
  return (
    <section className="container mx-auto md:px-20 py-10">
      <h1 className="text-3xl py-12 text-center">Most Visit Places</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-col-3 gap-14">
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
        {Post()}
      </div>
    </section>
  );
}

function Post() {
  return (
    <div className="item">
      <div className="images">
        <Link href={"/"}>
          <Image
            src={"/images/phnom_proek.jpeg"}
            className="rounded"
            width={500}
            height={350}
          />
        </Link>
      </div>
      <div className="info flex justify-center flex-col py-4">
        <div className="cat">
          <a className="hover:text-orange-800">Lanscape, Mountain</a>
          <a className="text-white hover:text-gray-600 text-xs">
            - July 3, 2022
          </a>
        </div>
        <div className="title">
          <a className="text-xl font-bold text-white hover:text-gray-400">
            Thommacheat Phnom Prek
          </a>
        </div>
        <p className="text-gray-500 py-3">
          Thommacheat Phnom Prek or it's often called Phnom Prek Restaurant or
          Coffee Thommacheat Phnom Prek.
        </p>
        {/* <Author></Author> */}
      </div>
    </div>
  );
}
