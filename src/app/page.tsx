import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Tape from "@/components/Tape";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection>
        <Image
          src="/images/plant.png"
          width={720}
          height={708}
          alt="Logo escrito Camila Silva psicóloga."
          className="laptop:w-auto laptop:h-[532px] desktop:w-[720px] desktop:h-[708px]"
        />
        <Image
          src="/images/CamilaSilva1.png"
          width={720}
          height={708}
          alt="Logo escrito Camila Silva psicóloga."
          className="laptop:w-auto laptop:h-[532px] desktop:w-[720px] desktop:h-[708px]"
        />
        <Banner
          className="
        z-10 
        absolute 
        desktop:mt-[162px] 
        desktop:mr-[600px] 
        laptop:mt-[80px] 
        laptop:mr-[400px]
        py-[35px] 
        px-[54px]"
        >
          <Paragraph>PSICOLOGA CRP 203094/908</Paragraph>
          <Title isMainHeading>
            Guiando mulheres em transformações internas com{" "}
            <span className="text-default-pink">empatia</span>
          </Title>
          <Paragraph className="mt-2">
            Seja bem-vinda ao meu espaço dedicado ao acolhimento e crescimento
            pessoal. Aqui, a empatia é a bússola que guia cada passo na jornada
            da autodescoberta e do fortalecimento emocional.
          </Paragraph>

          <Button className="w-[350px] font-normal mt-[15px]">
            QUERO AGENDAR UMA CONSULTA
          </Button>
        </Banner>
      </HeroSection>
      <Tape />
    </main>
  );
}
