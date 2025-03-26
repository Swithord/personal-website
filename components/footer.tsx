import { PiPlant } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="relative h-[3rem] w-full p-2 mt-5 bg-secondary text-foreground flex justify-center items-center">
            <span>
                designed with 💚, next.js w/ shadcn & tailwind, and love for clean code.
            </span>
            <PiPlant size={100} className="absolute top-[-5rem] right-5 text-2xl text-secondary z-0" />
        </footer>
    );
}
