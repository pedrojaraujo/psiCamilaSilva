import { Props } from "@/types/types";
const Card = ({ children, className }: Props) => {
  return (
    <div
      className={`${className} flex flex-col align-middle text-center items-center justify-center bg-default-green text-white rounded-2xl drop-shadow-xl`}
    >
      {children}
    </div>
  );
};

export default Card;
