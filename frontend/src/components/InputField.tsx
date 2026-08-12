type Props = {
    label: string,
    type: string,
    stateVar: string,
    stateFunc: (text: string) => void
}

function InputField({ label, type, stateVar, stateFunc }: Props) {
  return (
    <>
    <label>{label}</label>
    <input type={type} value={stateVar} onChange={(e) => stateFunc(e.target.value)} />
    </>
  )
}

export default InputField