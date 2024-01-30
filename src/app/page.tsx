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
            xl:w-full
            xl:h-full
            2xl:w-full
            2xl:h-auto"
          />
        </div>
        <div id="img__heroSection">
          <Image
            src="/images/CamilaSilva1.png"
            width={2880}
            height={2832}
            alt="Logo escrito Camila Silva psicóloga."
            className="
            xl:w-full
            xl:h-full
            2xl:w-full
            2xl:h-auto"
          />
        </div>
        <Banner
          className="
        z-10 
        absolute 
        mr-[33%]
        py-[35px] 
        px-[54px]
        lg:w-[560px] 
        lg:h-[380px]
        xl:w-[560px] 
        xl:h-[380px]
        2xl:w-[720px] 
        2xl:h-[440px] 
        "
        >
          <Paragraph>PSICOLOGA CRP 203094/908</Paragraph>
          <Title
            isMainHeading
            className="
          lg:text-xl
          xl:text-2xl
          2xl:text-2xl
          "
          >
            Guiando mulheres em transformações internas com{" "}
            <span className="text-default-pink">empatia</span>
          </Title>
          <Paragraph className="mt-2">
            Seja bem-vinda ao meu espaço dedicado ao acolhimento e crescimento
            pessoal. Aqui, a empatia é a bússola que guia cada passo na jornada
            da autodescoberta e do fortalecimento emocional.
          </Paragraph>

          <Button
            className="
          lg:text-sm
          lg:w-[300px]
          xl:w-[400px]
          xl:text-base 
          2xl:w-[400px]
          font-normal 
          mt-[15px] 
          bg-default-pink 
          "
          >
            QUERO AGENDAR UMA CONSULTA
          </Button>
        </Banner>
      </HeroSection>
      <Tape />
      <div
        className="
      w-screen 
      flex 
      justify-center
      lg:h-[200px]
      h-[300px]
      "
      >
        <Title
          className="
        lg:text-xl
        lg:w-[729px]
        xl:w-[929px] 
        2xl:text-2xl 
        text-center 
        mt-28
        "
        >
          Você deveria viver uma{" "}
          <span className="font-semibold">vida gratificante</span> e não apenas
          sobreviver...
        </Title>
      </div>
      <section id="section__carousel__swiper">
        <div
          className="
        mb-[600px]
        lg:mb-[450px]
        "
        >
          <Image
            src="/images/ellipses.svg"
            width={180}
            height={280}
            alt="Imagem vetorial com três circulos sobrepostos."
            className="lg:w-[135px]"
          />
        </div>
        <Banner
          className="
        lg:w-[510px]
        lg:h-[440px]  
        xl:w-[630px]
        xl:h-[560px]
        2xl:w-[750px] 
        2xl:h-[680px] 
        flex 
        flex-col 
        justify-center 
        items-center 
        absolute 
        -z-10"
        >
          <Title
            className="
          lg:text-2lg
          lg:w-8/12
          xl:text-xl 
          2xl:text-2xl 
          w-10/12  
          "
          >
            Eu já ajudei centenas de mulheres que estavam enfrentando problemas
            de ...
            <BsArrowRight
              className="
            m-auto            
            lg:text-[35px]  
            xl:text-[65px] 
            2xl:text-[100px] 
            
            "
            />
          </Title>
        </Banner>

        <Carousel />
      </section>
      <AboutMe className="flex justify-around items-center">
        <div className="flex flex-col w-1/3">
          <Title
            className="
          2xl:text-2xl
          lg:text-xl
          "
          >
            {" "}
            Prazer, sou a Camila Silva
          </Title>
          <Paragraph>PSICOLOGA CRP 203094/908</Paragraph>
          <Paragraph className="w-[500px] mt-5">
            Psicóloga comprometida em oferecer um espaço acolhedor para todos
            que buscam equilíbrio emocional. Com um foco especial na saúde
            emocional da mulher. Estou aqui para guiá-lo(a) em uma jornada de
            autoconhecimento, oferecendo apoio empático e ferramentas para
            transformar desafios em oportunidades de evolução.
          </Paragraph>
          <p
            className="
          font-lato 
          mt-5 
          lg:text-[20px]
          2xl:text-[26px]"
          >
            Conheça minhas expeiências e qualificações
          </p>
          <div
            className="
            flex 
            justify-start 
            items-center 
            pl-6 
            gap-5 
            border-solid 
            border-[0.5px] 
            border-default-greenLight 
            mt-4 rounded-2xl 
            py-2
            w-[80%]
            lg:w-[85%]
            lg:py-1
          text-default-green
          "
          >
            <LuBrain className="text-[50px]" />
            <Paragraph>Terapia Cognitivo-Comportamental</Paragraph>
          </div>
          <div
            className="
            flex 
            justify-start 
            items-center 
            pl-6 
            gap-5 
            border-solid 
            border-[0.5px] 
            border-default-greenLight 
            mt-4 rounded-2xl 
            py-2
            w-[80%]
            lg:w-[85%]
            lg:py-1
          text-default-green
          "
          >
            <PiFlowerLotusLight className="text-[50px]" />
            <Paragraph>Mindfulness e Espiritualidade</Paragraph>
          </div>
          <Button
            className="
          bg-default-greenLight 
          font-normal 
          xl:text-lg 
          mt-5 
          xl:w-[75%]
          lg:w-[75%]
          lg:text-sm
          lg:py-2
          "
          >
            QUERO AGENDAR UMA CONSULTA
          </Button>
        </div>
        <div>
          <Image
            src="/images/CamilaSilva2.png"
            width={526}
            height={575}
            alt="Camila Silva psicóloga."
            className="lg:w-[420px]"
          />
        </div>
      </AboutMe>
    </main>
  );
}
