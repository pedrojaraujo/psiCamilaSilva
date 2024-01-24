const Banner = ({ children, className }: Props) => {
  return <div className={`${className} leading-none flex  flex-col gap-4 bg-default-green text-default-bege w-[720px] h-[440px] rounded-3xl`}>{children}</div>;
};

export default Banner;
