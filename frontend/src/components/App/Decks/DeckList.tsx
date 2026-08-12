import Button from '../../Button.tsx';
import DeckContainer from './DeckContainer.tsx';

function DeckList() {
  return (
    <div className="">
      <header className='bg-secondary h-20 flex items-center gap-5 px-5'>
        <Button text='+ Deck' style='dark' />
        <Button text='+ Word' style='dark' />
      </header>
      <main className='grid grid-cols-7 gap-5 bg-secondary w-full border border-white'>
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
        <DeckContainer name='New Deck' />
      </main>
    </div>
  )
}

export default DeckList