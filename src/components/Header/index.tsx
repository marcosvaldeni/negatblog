import logo from '../../assets/logo.svg';
import left from '../../assets/left.svg';
import right from '../../assets/right.svg';

export function Header() {
  return (
    <header className="-z-10 relative px-3 w-full h-72 bg-[url('/background.svg')] bg-center bg-no-repeat flex items-start justify-center" >
      <img src={logo} alt="" className="relative z-1 mt-16" />
      <img src={left} alt="" className="absolute top-7 right-0" />
      <img src={right} alt="" className="absolute top-5 left-0" />
    </header>
  );
}