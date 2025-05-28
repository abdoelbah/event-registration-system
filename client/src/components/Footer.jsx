import { Typography } from "@material-tailwind/react";
import Logo from "../assets/NTD 2025 Logo-02.svg";
import LTFLogo from "../assets/IMG_0527 (2).PNG";

const YEAR = new Date().getFullYear();

export default function FooterWithLogo() {
  return (
    <footer className="w-full px-1 py-5 sm:px-4 sm:py-6 text-white scale-[0.95] sm:scale-100 transition-all duration-300">
        <hr className="my-4 border-white/20" />
      <div className="flex flex-row items-center justify-between gap-4 sm:gap-6 text-center">
        <img
          src={Logo}
          alt="NTD Logo"
          className="w-24 sm:w-40 md:w-48 lg:w-52 transition-all duration-300"
        />
        <img
          src={LTFLogo}
          alt="LTF Logo"
          className="w-14 sm:w-36 md:w-44 lg:w-32 transition-all duration-300"
        />
      </div>

    </footer>
  );
}
