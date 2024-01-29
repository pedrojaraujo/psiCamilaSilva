import "./AboutMe.css";

const AboutMe = ({ children, className }: Props) => {
  return (
    <section
      id="section__AboutMe"
      className={`${className} desktop:h-[837px] border-solid border-y-2 border-default-green mb-4`}
    >
      {children}
    </section>
  );
};

export default AboutMe;
