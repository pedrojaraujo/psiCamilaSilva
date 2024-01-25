import Image from "next/image";
import Link from "next/link";
import Button from "../Button";
const Header = () => {
  return (
    <header
      className="
    desktop:h-[120px]
    laptop:h-[80px]
    flex 
    justify-between 
    items-center 
    align-middle 
    w-10/12 
    mx-auto 
    mt-5"
    >
      <div>
        <Image
          src="/images/logo.svg"
          width={102}
          height={102}
          alt="Logo escrito Camila Silva psicóloga."
          className="laptop:w-[80px]"
        />
      </div>
      <div className="flex items-center gap-10">
        <ul className="flex gap-6  font-semibold laptop:text-sm">
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
        <Button>Contato</Button>
      </div>
    </header>
  );
};

export default Header;
