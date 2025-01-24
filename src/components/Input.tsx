interface Props {
  type: string
  name: string
  id: string
  placeholder: string
}

export default function Input({ type, name, id, placeholder }: Props) {
  return (
    <input className="input" type={type} name={name} id={id} placeholder={placeholder} />
  )
}