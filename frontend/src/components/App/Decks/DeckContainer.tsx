type Props = {
    name: string
}

function DeckContainer({ name }: Props) {
  return (
    <div className="rounded-xl bg-primary w-80 h-100 self-center">
        <image></image>
        <div>
            <h2 className="text-white font-primary">{name}</h2>
        </div>
    </div>
  )
}

export default DeckContainer