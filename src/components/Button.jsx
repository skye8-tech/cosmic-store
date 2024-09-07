function Button(props) {
  const { variant, text, width, icon, href, funct } = props;

  const buttonClasses = `
 ${
   variant === "primary"
     ? "bg-secondary2 font-normal text-white h-fit py-3 px-4 flex flex-row justify-center items-center gap-1 rounded-lg hover:bg-black hover:text-secondary2"
     : "bg-none font-normal h-fit py-3 text-secondary2 border border-secondary2 py-2 px-4 flex flex-row justify-center items-center gap-4 rounded-lg hover:bg-secondary2 hover:text-white"
 }
 ${width}
`;
  return (
    <>
      <button className={buttonClasses} onClick={funct} href={href}>
        {icon}
        <p>{text}</p>
      </button>
    </>
  );
}

export default Button;
