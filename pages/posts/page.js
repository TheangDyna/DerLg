import PlaceFormat from "../../layout/placeFormat";
import Author from "./../../components/places/author";
import Image from "next/image";
export default function Page() {
  return (
    <PlaceFormat>
      <section className="container mx-auto md:px-2 py-16 w-1/2">
        <div className="flex justify-center">
          <Author></Author>
        </div>
        <div className="post py-10">
          <h1 className="font-bold text-4xl pb-5 text-center">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ut{" "}
          </h1>
          <p className="text-gray-500 text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste at
            velit, molestiae natus consectetur adipisicing elit. Iste
            atconsectetur adipisicing elit. Iste at{" "}
          </p>
        </div>

        <div className="py-10">
          <Image
            src={"/images/battambang-monty.jpg"}
            width={1200}
            height={900}
          ></Image>
        </div>

        <div className="content text-gray-400 text-lg flex flex-col gap-4">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            libero cupiditate quo ex porro beatae veritatis dolorum
            perspiciatis. Cum modi eius neque eum voluptas tenetur unde quae
            quam veniam doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            libero cupiditate quo ex porro beatae veritatis dolorum
            perspiciatis. Cum modi eius neque eum voluptas tenetur unde quae
            quam veniam doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            libero cupiditate quo ex porro beatae veritatis dolorum
            perspiciatis. Cum modi eius neque eum voluptas tenetur unde quae
            quam veniam doloremque.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
            libero cupiditate quo ex porro beatae veritatis dolorum
            perspiciatis. Cum modi eius neque eum voluptas tenetur unde quae
            quam veniam doloremque.
          </p>
        </div>
      </section>
    </PlaceFormat>
  );
}
