const Button = ({
  children,
  buttonStyle = "primary",
  actionName = "",
  type = "button",
  onClick,
}) => {
  return (
    <button
      aria-label={actionName}
      title={actionName}
      type={type}
      className={`text-white rounded-md px-5 py-2 cursor-pointer
        hover:opacity-60 active:opacity-20 transition-all duration-200
        ${buttonStyle === "primary" && "bg-blue-500"}
        ${buttonStyle === "error" && "bg-red-500"}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
