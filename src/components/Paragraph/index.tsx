import { Props } from "@/types/types";
const Paragraph = ({ children, className }: Props) => {
  return (
    <p className={`${className} font-lato text-normal laptop:text-sm`}>
      {children}
    </p>
  );
};

export default Paragraph;
