const HeroSection = ({ children }: Props) => {
  return (
    <section className="desktop:h-[708px] laptop:h-[532px] flex justify-center mt-5">
      {children}
    </section>
  );
};

export default HeroSection;
