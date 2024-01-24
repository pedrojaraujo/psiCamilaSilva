const HeroSection = ({children}: Props) => {
  return (
    <div className="h-[708px] flex justify-center mt-5">
      {children}
    </div>
  );
};

export default HeroSection;
