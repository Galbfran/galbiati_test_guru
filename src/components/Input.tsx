interface Props {
  type: string
  name: string
  id: string
  placeholder: string
  change: (e: React.ChangeEvent<HTMLInputElement>) => void
  validator?: (value: string) => boolean;
  errorMessage?: string;
}

export default function Input({ type, name, id, placeholder, change, errorMessage }: Props) {
  return (
    <div className="input-container">
      <input
        className="input"
        type={type}
        name={name}
        id={id}
        placeholder=""
        onChange={change}
        style={{ borderColor: errorMessage ? "red" : "#D9D9D9" }}
      />
      <label className="placeholder" htmlFor={id}>
        {placeholder}
      </label>
      {errorMessage && <div className="error-message">{errorMessage}</div>}
    </div>
  );
}