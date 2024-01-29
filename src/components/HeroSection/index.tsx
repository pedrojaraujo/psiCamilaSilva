const HeroSection = ({ children, className }: Props) => {
  return (
    <section
      className={`${className} desktop:h-[790px] laptop:h-[532px] flex justify-center mt-5 overflow-hidden`}
    >
      {children}
    </section>
  );
};

export default HeroSection;
