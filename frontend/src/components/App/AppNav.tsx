import {NavLink} from 'react-router'


function AppNav() {

  return (
    <aside className='flex flex-col justify-between h-screen w-50 text-primary-text p-2 bg-primary'>
      <ul className='flex flex-col justify-center items-left mx-5 gap-5'>
        <li>Logo</li>
        <li><NavLink to='/' className={({isActive}) => isActive ? 'active': ''}>Dashboard</NavLink></li>
        <li><NavLink to='/decks' className={({isActive}) => isActive ? 'active': ''}>Decks</NavLink></li>
        <li><NavLink to='/comprehension' className={({isActive}) => isActive ? 'active': ''}>Comprehension</NavLink></li>
        <li><NavLink to='/conversation' className={({isActive}) => isActive ? 'active': ''}>Conversations</NavLink></li>
        <li><NavLink to='/writing' className={({isActive}) => isActive ? 'active': ''}>Writing</NavLink></li>
        <li><NavLink to='/wordlist' className={({isActive}) => isActive ? 'active': ''}>Wordlist</NavLink></li>
      </ul>
      <ul className='flex flex-col justify-center items-left mx-5 gap-3 text-secondary-text'>
        <li>Profile</li>
        <li>Settings</li>
      </ul>
    </aside>
  )
}

export default AppNav