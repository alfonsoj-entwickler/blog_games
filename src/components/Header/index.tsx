import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <header className="py-5">
      <div className="container mx-auto px-5 sm:px-0">
        <div className="navbar grid grid-cols-12">
          <div className="col-span-3">
            <Link href="/" className="flex items-center gap-2.5">
              <Image
                src={"/images/logo.jpeg"}
                alt="logo atorrgamer"
                width={50}
                height={50}
                className="rounded-full"
              />
              <h4 className="text-xl text-base-content font-sans">
                AtorrGamer<strong>Blog</strong>
              </h4>
            </Link>
          </div>
        </div>
        <nav className="hidden"></nav>
      </div>
    </header>
  );
}
