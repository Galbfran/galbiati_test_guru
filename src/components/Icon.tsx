interface Props {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export default function Icon({ src, alt, width, height }: Props) {
  return (
    <i className="icon">
      <img src={src} alt={alt} width={width} height={height} />
    </i>
  )
}