import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Tape from "@/components/Tape";
import Title from "@/components/Title";

export default function Home() {
  return (
    <main className="font-lato">
      <Header />
      <HeroSection>
        <Image
          src="/images/plant.png"
          width={720}
          height={708}
          alt="Logo escrito Camila Silva psicóloga."
        />
        <Image
          src="/images/CamilaSilva1.png"
          width={720}
          height={708}
          alt="Logo escrito Camila Silva psicóloga."
        />
        <Banner className="z-10 absolute mt-[162px] mr-[600px] py-[35px] px-[54px]">
          <p>PSICOLOGA CRP 203094/908</p>
          <Title isMainHeading>
            Guiando mulheres em transformações internas com{" "}
            <span className="text-default-pink">empatia</span>
          </Title>
          <p className="mt-2">
            Seja bem-vinda ao meu espaço dedicado ao acolhimento e crescimento
            pessoal. Aqui, a empatia é a bússola que guia cada passo na jornada
            da autodescoberta e do fortalecimento emocional.
          </p>
          <Button className="w-[350px] font-normal mt-[15px]">
            QUERO AGENDAR UMA CONSULTA
          </Button>
        </Banner>
      </HeroSection>
      <Tape />
    </main>
  );
}
