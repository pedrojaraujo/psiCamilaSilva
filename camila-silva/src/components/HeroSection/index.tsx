import Image from "next/image";
const HeroSection = () => {
  return (
    <div className="h-[708px] flex justify-center bg-slate-600">
      <div>
        
        <Image
          src="/images/plant.png"
          
          width={720}
          height={708}
          alt="Logo escrito Camila Silva psicóloga."
        />
      </div>
      <div>
      
        <Image
          src="/images/CamilaSilva1.png"
          width={720}
          height={708}
          alt="Logo escrito Camila Silva psicóloga."
        />
      </div>
    </div>
  );
};

export default HeroSection;
