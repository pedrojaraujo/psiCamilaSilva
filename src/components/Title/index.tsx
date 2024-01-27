const Title = ({ children, className, isMainHeading }: Props) => {
  const Tag = isMainHeading ? "h1" : "h2";

  return (
    <Tag className={`${className} font-cormorantGaramond `}>{children}</Tag>
  );
};

export default Title;
