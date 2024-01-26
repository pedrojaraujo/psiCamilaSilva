const Banner = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} leading-none flex flex-col gap-4 bg-default-green text-default-bege   rounded-3xl`}
    >
      {children}
    </div>
  );
};

export default Banner;
