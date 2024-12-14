export default function Button({
  children,
  textOnly,
  className,
  cart,
  ...props
}) {
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  // cssClasses = cart ? "main-nav-list nav-cta" : cssClasses;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
