"use client";
import { motion } from "framer-motion";
/**
 * Button Component
 *
 * A reusable button component with customizable styles and click event handling.
 *
 * @param {Object} props - The component's props.
 * @param {string} [props.style='primary'] - The style of the button.
 * @param {string} [props.className=''] - Additional CSS classes for the button.
 * @param {ReactNode} [props.children=''] - The content to be displayed inside the button.
 * @param {function} [props.onClick=''] - The onClick event handler for the button.
 *
 * @returns {ReactNode} The rendered button component.
 */

const styles = {
  primary: "  ",
  secondary: "",
  small: "",
  outline: "",
};

const Button = ({
  style = "primary", // Default style to 'primary'
  className = "",
  type = "button",
  children = "",
  onClick,
  disabled = false,
}) => {
  return (
    <motion.button
      initial={{ x: 40, opacity: 0 }}
      animate={{ x: 20, opacity: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
      className={`${styles[style]} relative bg-gradient-to-r from-blue to-[#5db8f5] text-white px-3 py-2 font-lg rounded-md text-bold group ${className}`}
      onClick={onClick}
      type={type}
      disabled={disabled}
    >
      <div className="absolute top-0 bottom-0 left-0 right-0 opacity-0 transition-all duration-700 ease-in-out bg-gradient-to-l from-blue to-[#5db8f5] group-hover:opacity-100 rounded-md"></div>
      <div className="relative z-[5]">{children}</div>
    </motion.button>
  );
};

export default Button;
