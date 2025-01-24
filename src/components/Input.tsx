interface Props {
  type: string
  name: string
  id: string
  placeholder: string
  change: (e: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ type, name, id, placeholder, change }: Props) {
  return (
    <input className="input" type={type} name={name} id={id} placeholder={placeholder} onChange={change} />
  )
}