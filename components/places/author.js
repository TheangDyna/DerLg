import Image from "next/image";
import Link from "next/link";

export default function author() {
  return (
    <div className="author flex py-5">
      <Image
        src={"/images/profile.png"}
        width={60}
        height={60}
        className="rounded-full"
      ></Image>
      <div className="flex flex-col justify-center px-4">
        <Link href={"/"} legacyBehavior>
          <a className="text-md font-bold text-white hover:text-gray-600">
            VireakRoth
          </a>
        </Link>
        <span className="text-sm text-gray-500">Student</span>
      </div>
    </div>
  );
}
