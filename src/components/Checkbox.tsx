import React from "react";

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
  checked?: boolean;
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  label?: string;
  id?: string;
  className?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked = false,
  onChange,
  label,
  id,
  className,
  ...props
}) => (
  <div className={className}>
   <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      id={id}
      {...props}
      style={{ marginRight: "8px" }}
    />
  <label
    htmlFor={id}
    
    style={{ display: "flex", alignItems: "center", cursor: "pointer" }}
  > {label && <span>{label}</span>}</label>
   
   </div>
  
);

/**
 * Checkbox component.
 *
 * Renders a customizable checkbox input element.
 *
 * @remarks
 * This component can be used as a controlled or uncontrolled checkbox.
 *
 * @example
 * ```tsx
 * <Checkbox checked={isChecked} onChange={handleChange} />
 * ```
 *
 * @component
 */
export default Checkbox;
