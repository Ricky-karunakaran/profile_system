interface Props {
  text: string;
  className: string;
  onClicked?: () => void;
}

function Button({ text, className, onClicked }: Props) {
  return (
    <button
      type="button"
      className={`btn btn-${className}`}
      onClick={onClicked}
    >
      {text}
    </button>
  );
}

export default Button;
