interface Props {
  type: string;
  id?: string;
  placeholder: string;
  className?: string;
}
function Input({ type = 'text', id, className, placeholder = 'input' }: Props) {
  return (
    <input
      type={type}
      className={'form-control ' + className}
      id={id}
      placeholder={placeholder}
    />
  );
}

export default Input;
