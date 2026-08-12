import { useState } from 'react'
import InputField from '../../InputField.tsx';

function CreateDeckWindow() {

    const [autoGenerate, setAutoGenerate] = useState<boolean>(false);
    const [autoGeneratePrompt, setAutoGeneratePrompt] = useState<string>('');
    const [deckName, setDeckName] = useState<string>('New deck');
    const [character, setCharacter] = useState<string>('');
    const [pinyin, setPinyin] = useState<string>('');
    const [meaning, setMeaning] = useState<string>('');

  return (
    <div>
        <form>
            <InputField label='Deck Name' type='text' stateVar={deckName} stateFunc={setDeckName} />
            autoGenerate ? 
            <InputField label='Character' type='text' stateVar={character} stateFunc={setCharacter} />
            <InputField label='Pinyin' type='text' stateVar={pinyin} stateFunc={setPinyin} />
            <InputField label='Meaning' type='text' stateVar={meaning} stateFunc={setMeaning} />

            <input onChange={(e) => setAutoGeneratePrompt(e.target.value)} value={autoGeneratePrompt} />
        </form>
        <button onClick={() => setAutoGenerate(!autoGenerate)}>Auto-generate</button>
    </div>
  )
}

export default CreateDeckWindow