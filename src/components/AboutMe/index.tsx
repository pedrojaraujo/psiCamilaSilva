import "./AboutMe.css";

const AboutMe = ({ children, className }: Props) => {
  return (
    <section
      id="section__AboutMe"
      className={`${className} xl:h-[837px] lg:h-[620px] border-solid border-y-2 border-default-green mb-4`}
    >
      {children}
    </section>
  );
};

export default AboutMe;
