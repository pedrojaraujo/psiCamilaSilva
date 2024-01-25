const Banner = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} leading-none flex flex-col gap-4 bg-default-green text-default-bege desktop:w-[720px] desktop:h-[440px] laptop:w-[560px] laptop:h-[380px]  rounded-3xl`}
    >
      {children}
    </div>
  );
};

export default Banner;
