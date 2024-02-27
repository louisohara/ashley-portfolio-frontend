import "./Input.scss";

interface InputProps {
  label: string;
  name?: string;
  type?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  accept?: string;
  alt?: string;
  placeholder?: string;
}
function Input({
  label,
  name,
  type,
  onChange,
  value,
  accept,
  alt,
  placeholder,
}: InputProps) {
  return (
    <div className={`field field--${alt}`}>
      <label htmlFor={name} className={`field__label field__label--${alt}`}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={`field__input field__input--${alt}`}
        value={value}
        onChange={onChange}
        accept={accept}
        placeholder={placeholder}
      />
    </div>
  );
}

export default Input;
