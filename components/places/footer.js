import Link from "next/link";
import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";

export default function footer() {
  return (
    <footer className="bg-gray-50">
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <ImFacebook color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImTwitter color="#888888" />
            </Link>
            <Link href={"/"}>
              <ImYoutube color="#888888" />
            </Link>
          </div>
          <p className="pt-6">
            DerLg <span>&copy; 2022</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
