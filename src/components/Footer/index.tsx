import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-slate-100 font-sans">
      <div className="container mx-auto px-5 md:px-0">
        <div className="grid grid-cols-12 gap-5 py-16">
          <div className="col-span-12 lg:col-span-3">
            <h5 className="text-lg font-semibold text-base-content font-sans">
              About
            </h5>
            <p className="mt-3 text-base text-base-content/70 mb-6 font-sans">
              At AtorrGamer, we believe in the power of silent storytelling. Our
              passion lies in capturing the sheer beauty and excitement of
              gaming through meticulously curated, no-commentary gameplay
              videos. As purveyors of visual storytelling, we let the games
              speak for themselves, allowing their captivating narratives,
              stunning visuals, and evocative soundscapes to take center stage.
            </p>
            <div>
              <a
                href="mailto:info@atorrgamer.com"
                className="font-semibold text-base-content font-sans"
              >
                Email:{" "}
                <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition font-sans">
                  info@atorrgamer.com
                </span>
              </a>
            </div>
            <div className="mt-1">
              <a
                href="tel:0000000000000"
                className="font-semibold text-base-content font-sans"
              >
                Phone :{" "}
                <span className="text-base-content/70 font-normal hover:text-primary hover:duration-300 transition font-sans">
                  xxx xxx xxx xxx
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center justify-between py-8 bg-base-200 border-t border-base-content/10">
          <div className="flex items-center gap-2.5">
            <Link href="/">
              <Image
                src={"/images/logo.jpeg"}
                alt="logo atorrgamer"
                width={50}
                height={50}
                className="rounded-full"
              />
            </Link>
            <div>
              <h4 className="text-xl text-base-content font-sans">
                AtorrGamer<strong>Blog</strong>
              </h4>
              <p className="mt-0.5 text-base-content/70 text-base font-sans">
                © AtorrGamer
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 text-base-content/70">
            <a
              className="text-base border-r border-base-content/10 pr-4 hover:text-slate-500 transition hover:duration-300 font-sans"
              href="/"
            >
              Link 1
            </a>
            <a
              className="text-base border-r border-base-content/10 pr-4  hover:text-slate-500 transition hover:duration-300 font-sans"
              href="/"
            >
              Link 2
            </a>
            <a
              className="text-base hover:text-slate-500 transition hover:duration-300 font-sans"
              href="/"
            >
              Link 3
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
