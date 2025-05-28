import Logo from "../assets/NTD 2025 Logo-09.svg";
import UnionLogo from "../assets/IMG_0527 (2).PNG";
import LTFLogo from '../assets/V logo Blue.svg';

const YEAR = new Date().getFullYear();

export default function FooterWithLogo() {
  return (
    <footer className="w-full px-1 py-5 sm:px-4 sm:py-6 text-white scale-[0.95] sm:scale-100 transition-all duration-300">
      <hr className="my-4 border-white/20" />
      <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 text-center">
        <img
          src={Logo}
          alt="NTD Logo"
          className="max-w-[60px] sm:max-w-[80px] md:max-w-[70px] h-auto object-contain"
        />
        <img
          src={UnionLogo}
          alt="Union Logo"
          className="max-w-[80px] sm:max-w-[110px] md:max-w-[130px] h-auto object-contain"
        />
        <img
          src={LTFLogo}
          alt="LTF Logo"
          className="max-w-[70px] sm:max-w-[100px] md:max-w-[70px] h-auto object-contain"
        />
      </div>
    </footer>
  );
}