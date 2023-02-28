import Image from "next/image";
import Link from "next/link";

export default function section1() {
  const bg = {
    background: "url('/images/world.png') no-repeat",
    backgroundPosition: "right",
  };
  return (
    <section className="py-16" style={bg}>
      <div className="container mx-auto md:px-20 mt-20">
        {/* <h1 className="font-bold text-3xl pb-12 text-center">Trending</h1> */}
        {Slide()}
      </div>
    </section>
  );
}
function Slide() {
  return (
    <div className="grid md:grid-cols-2">
      <div className="image">
        <Link href="/">
          {" "}
          <Image
            src={"/images/phsa_nat.jpg"}
            width={600}
            height={800}
            className="rounded-l-3xl"
          ></Image>
        </Link>
      </div>
      <div className="info md:ml-6 justify-center flex-column">
        <div className="cat">
          <Link href={"/"} className="text-white">
            Historical
          </Link>
          <Link href={"/"} className="text-blue-200">
            - 2-28-2022
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} className="text-6xl md:text-6xl font-bold">
            BATTAMBANG
          </Link>
        </div>
        <div className="title">
          <Link href={"/"} className="text-lg text-white w-2/4">
            Lorem Ipsum is simply dummy text of the industry.
          </Link>
        </div>
        <p className="text-gray-400 text-sm py-3 w-2/4">
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s
        </p>
      </div>
    </div>
  );
}
