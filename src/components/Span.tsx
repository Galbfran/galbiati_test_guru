interface Props {
  text: string
}

export default function Span({ text }: Props) {
  return (
    <span className="span">{text}</span>
  )
}