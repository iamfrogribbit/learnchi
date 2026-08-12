import Button from '../Button.tsx';

function Nav() {
  return (
    <nav className="flex p-7 bg-black w-100% h-15 justify-between items-center sticky top-0">
        <ul className="text-white flex gap-10">
            <li className="mx-25 hover:cursor-pointer">Logo</li>
            <li className="text-sm hover:cursor-pointer hover:underline font-primary font-light">About</li>
            <li className="text-sm hover:cursor-pointer hover:underline font-primary font-light">How it works</li>
            <li className="text-sm hover:cursor-pointer hover:underline font-primary font-light">Pricing</li>
            <li className="text-sm hover:cursor-pointer hover:underline font-primary font-light">Download</li>
        </ul>
        <ul className="text-white flex gap-10 mx-25">
          <Button text="Log in" style="light" />
          <Button text="Sign up" style="dark" />
        </ul>
    </nav>
  )
}

export default Nav