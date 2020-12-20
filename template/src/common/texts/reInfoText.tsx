interface Props {
  text: string
  className?: string
}

export default function ReInfoText(props: Props) {
  const { text, className } = props
  return <div className={`text-info f-16 ${className}`}>{text}</div>
}
