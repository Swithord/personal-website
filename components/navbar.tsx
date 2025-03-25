import { useTheme } from "next-themes"
import Link from "next/link"
import { Toggle } from "./ui/toggle"
import { MoonIcon, SunIcon } from "lucide-react"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  return (
    <nav className="h-[3rem] w-full p-2 bg-secondary text-foreground flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="font-bold">York Ng</div>
          </Link>
          <Link href="/projects"> 
            <div className="ml-4">Projects</div>
          </Link>
        </div>
      <Toggle className='h-[2rem]' onClick={() => setTheme(theme => theme === 'dark' ? 'light' : 'dark')}>
        {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Toggle>
      </div>
    </nav>
  )
}