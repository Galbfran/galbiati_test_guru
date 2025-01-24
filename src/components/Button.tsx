interface Props {
  text: string;
  onClick: VoidFunction
}

export default function Button({ text, onClick }: Props) {
  return (
    <button className="button" onClick={onClick} >{text.toLocaleUpperCase()}</button>
  )
}