"use client";

import Image from "next/image";
import Banner from "@/components/Banner";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import Button from "@/components/Button";
import Tape from "@/components/Tape";
import Title from "@/components/Title";
import Paragraph from "@/components/Paragraph";
import { BsArrowRight } from "react-icons/bs";
import Card from "@/components/Card";
import Carousel from "@/components/Carousel";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Header />
      <HeroSection className="items-center">
        <div id="img__heroSection">
          <Image
            src="/images/plant.png"
            width={2880}
            height={2832}
            alt="Logo escrito Camila Silva psicóloga."
            className="
            desktop:w-full
            desktop:h-full
            laptop:w-full 
            laptop:h-auto "
          />
        </div>
        <div id="img__heroSection">
          <Image
            src="/images/CamilaSilva1.png"
            width={2880}
            height={2832}
            alt="Logo escrito Camila Silva psicóloga."
            className="
            desktop:w-full
            desktop:h-full
            laptop:w-full
            laptop:h-auto"
          />
        </div>
        <Banner
          className="
        z-10 
        absolute 
        mr-[33%]
        py-[35px] 
        px-[54px]
        desktop:w-[720px] 
        desktop:h-[440px] 
        laptop:w-[560px] 
        laptop:h-[380px]
        "
        >
          <Paragraph>PSICOLOGA CRP 203094/908</Paragraph>
          <Title isMainHeading className="desktop:text-2xl laptop:text-xl">
            Guiando mulheres em transformações internas com{" "}
            <span className="text-default-pink">empatia</span>
          </Title>
          <Paragraph className="mt-2">
            Seja bem-vinda ao meu espaço dedicado ao acolhimento e crescimento
            pessoal. Aqui, a empatia é a bússola que guia cada passo na jornada
            da autodescoberta e do fortalecimento emocional.
          </Paragraph>

          <Button className="w-[400px] font-normal mt-[15px]">
            QUERO AGENDAR UMA CONSULTA
          </Button>
        </Banner>
      </HeroSection>
      <Tape />
      <div className="w-screen flex justify-center h-[300px]">
        <Title className="text-xl desktop:w-[929px] text-center mt-28">
          Você deveria viver uma{" "}
          <span className="font-semibold">vida gratificante</span> e não apenas
          sobreviver...
        </Title>
      </div>

      <section id="section__carousel__swiper">
        <div
          className="
        
        mb-[600px]
        "
        >
          <Image
            src="/images/ellipses.svg"
            width={180}
            height={280}
            alt="Logo escrito Camila Silva psicóloga."
          />
        </div>
        <Banner
          className="
        w-[750px] 
        h-[680px] 
        flex 
        flex-col 
        justify-center 
        items-center 
        absolute 
        -z-10"
        >
          <Title className="text-xl w-10/12">
            Eu já ajudei centenas de mulheres que estavam enfrentando problemas
            de ...
            <BsArrowRight className="text-[100px] m-auto" />
          </Title>
        </Banner>

        <Carousel />
      </section>
    </main>
  );
}
