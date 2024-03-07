const Button = ({ children, variant, className, onClick }) => {
  const baseStyle = "rounded-md px-4 py-2 transition-colors duration-300";
  const variantStyle =
    variant === "outline"
      ? "bg-transparent border-2 border-[#114D46] text-[#114D46] hover:bg-[#114D46] hover:text-white"
      : "bg-[#114D46] text-white hover:bg-[#0e3c35]";

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
