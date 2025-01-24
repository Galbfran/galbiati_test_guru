interface Props {
  text: string;
}

export default function Button({ text }: Props) {
  return (
    <button className="button">{text.toLocaleUpperCase()}</button>
  )
}