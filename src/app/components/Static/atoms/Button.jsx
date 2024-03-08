import { useRouter } from "next/navigation";

const Button = ({ children, variant, className, onClick, href }) => {
  const baseStyle = "rounded-md px-4 py-2 transition-colors duration-300";
  const variantStyle =
    variant === "outline"
      ? "bg-transparent border-2 border-[#114D46] text-[#114D46] hover:bg-[#114D46] hover:text-white"
      : "bg-[#114D46] text-white hover:bg-[#0e3c35]";

  const router = useRouter();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }

    if (href && !e.defaultPrevented) {
      router.push(href);
    }
  };

  return (
    <button
      className={`${baseStyle} ${variantStyle} ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export default Button;
