const HeroSection = ({ children }: Props) => {
  return (
    <div className="desktop:h-[708px] laptop:h-[532px] flex justify-center mt-5">
      {children}
    </div>
  );
};

export default HeroSection;
