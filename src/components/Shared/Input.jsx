"use client";
/**
 * Input Component
 *
 * This component renders a styled input field with optional label and placeholder.
 *
 * Props:
 * - `label`: A string to display as a label for the input field.
 * - `placeholder`: A string to show as placeholder text in the input field.
 * - `value`: The current value of the input field.
 * - `onChange`: A function to handle changes to the input field.
 * - `type`: The type of the input field (e.g., text, password).
 *
 * @param {Object} props - The props passed to the component.
 * @returns {JSX.Element} The rendered Input component.
 */
export default function Input({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
}) {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="input-field"
      />
    </div>
  );
}
