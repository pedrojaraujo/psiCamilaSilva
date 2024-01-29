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
import { LuBrain } from "react-icons/lu";
import { PiFlowerLotusLight } from "react-icons/pi";
import Carousel from "@/components/Carousel";
import AboutMe from "@/components/AboutMe";

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

          <Button className="w-[400px] font-normal mt-[15px] bg-default-pink desktop:text-base laptop:text-sm">
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
      <AboutMe className="flex justify-around items-center">
        <div className="flex flex-col desktop:w-1/3">
          <Title className="text-xl"> Prazer, sou a Camila Silva</Title>
          <Paragraph>PSICOLOGA CRP 203094/908</Paragraph>
          <Paragraph className="w-[500px] mt-5">
            Psicóloga comprometida em oferecer um espaço acolhedor para todos
            que buscam equilíbrio emocional. Com um foco especial na saúde
            emocional da mulher. Estou aqui para guiá-lo(a) em uma jornada de
            autoconhecimento, oferecendo apoio empático e ferramentas para
            transformar desafios em oportunidades de evolução.
          </Paragraph>
          <p className="font-lato mt-5 text-[26px]">
            Conheça minhas expeiências e qualificações
          </p>
          <div
            className="flex justify-start items-center pl-6 gap-5 border-solid border-[0.5px] border-default-greenLight mt-4 rounded-2xl py-2
          w-[60%]
          text-default-green
          "
          >
            <LuBrain className="text-[50px]" />
            <Paragraph>Terapia Cognitivo-Comportamental</Paragraph>
          </div>
          <div
            className="flex justify-start pl-6 items-center gap-5 border-solid border-[0.5px] border-default-greenLight mt-4 rounded-2xl py-2
            w-[60%]
           text-default-green
          "
          >
            <PiFlowerLotusLight className="text-[50px]" />
            <Paragraph>Mindfulness e Espiritualidade</Paragraph>
          </div>
          <Button className="bg-default-greenLight font-normal text-lg mt-5 w-[50%] text-sm">
            QUERO AGENDAR UMA CONSULTA
          </Button>
        </div>
        <div>
          <Image
            src="/images/CamilaSilva2.png"
            width={526}
            height={575}
            alt="Camila Silva psicóloga."
          />
        </div>
      </AboutMe>
    </main>
  );
}
