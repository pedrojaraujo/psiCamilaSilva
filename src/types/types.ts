export interface Props {
  children?: React.ReactNode;
  className?: string;
  isMainHeading?: boolean;
}

export interface CardData {
  id?: number;
  imageSrc?: string;
  altText?: string;
  width?: number;
  height?: number;
}
