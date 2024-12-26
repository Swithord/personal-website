import { Moon, MoonIcon, Sun } from "lucide-react"
import { useTheme } from "next-themes"
import { Toggle } from "@/components/ui/toggle"


export default function Home() {
  const { setTheme } = useTheme()
  return (
    <div className='flex bg-background text-foreground h-screen'>
      Hello world
      <Toggle onClick={() => setTheme(theme => theme === 'dark' ? 'light' : 'dark')}>
        <MoonIcon />
      </Toggle>
    </div>
  );
}
