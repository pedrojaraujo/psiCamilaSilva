import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
const Header = () => {
  return (
    <header
      className="
    lg:h-[90px]
    xl:h-[125px]
    2xl:h-[135px]
    flex 
    justify-between 
    items-center 
    align-middle 
    w-10/12 
    mx-auto 
    mt-5
    overflow-hidden
    "
    >
      <div>
        <Image
          src="/images/logo.svg"
          width={202}
          height={202}
          alt="Logo escrito Camila Silva psicóloga."
          className="
          lg:w-[85px]
          xl:w-[110px] 
          2xl:w-[130px] 
          "
        />
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-6 font-semibold desktop:text-base laptop:text-sm">
          <li>
            <Link href="#">Quem sou</Link>
          </li>
          <li>
            <Link href="#">Especialidades</Link>
          </li>
          <li>
            <Link href="#">Contatos</Link>
          </li>
          <li>
            <Link href="#">Especialização</Link>
          </li>
        </ul>
        <Button className="bg-default-pink desktop:text-base laptop:text-sm">
          Contato
        </Button>
      </div>
    </header>
  );
};

export default Header;
