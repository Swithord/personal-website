import { useTheme } from "next-themes"
import Link from "next/link"
import { Toggle } from "./ui/toggle"
import { MoonIcon, SunIcon } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { FaDoorClosed, FaDoorOpen } from "react-icons/fa6";
import { use, useEffect, useState } from "react"

export default function Navbar() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    console.log(isOpen);
  }
  , [isOpen]);


  return (
    <nav className="h-[3rem] w-full p-2 bg-secondary text-foreground flex justify-center items-center">
      <div className="container flex justify-between items-center">
        <div className="flex items-center">
          <Link href="/">
            <div className="font-bold">york ng</div>
          </Link>
          <Link href="/projects"> 
            <div className="ml-4">projects</div>
          </Link>
          <Link href='/publications'>
            <div className="ml-4">publications</div>
          </Link>
            <DropdownMenu onOpenChange={(open) => setIsOpen(open)}>
            <DropdownMenuTrigger className="ml-4 flex gap-2 items-center">
            
              misc
              {isOpen ? <FaDoorOpen /> : <FaDoorClosed />}
            </DropdownMenuTrigger>
            <DropdownMenuContent className='bg-background border border-primary'>
              <DropdownMenuItem asChild>
              <Link href="/cattycomicscompany">comics</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
            </DropdownMenu>
        </div>
      <Toggle className='h-[2rem]' onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}>
        {resolvedTheme === 'dark' ? <SunIcon /> : <MoonIcon />}
      </Toggle>
      </div>
    </nav>
  )
}