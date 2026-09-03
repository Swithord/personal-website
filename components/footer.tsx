import { FaCat } from "react-icons/fa6";
import { FiMail } from "react-icons/fi";
import { PiPlant } from "react-icons/pi";

export default function Footer() {
    return (
        <footer className="relative flex h-auto min-h-max w-full items-center justify-center bg-secondary p-2 mt-[5rem] text-foreground">
            <div className="flex flex-col gap-2 justify-between items-center container md:flex-row">
                <span className='flex items-center gap-2'>
                    <FiMail size={20} />
                    york.ng [at] mila [dot] quebec
                </span>
                <FaCat size={20} />
                <span className="flex items-center gap-2">
                    designed with love for clean code.
                </span>
            </div>
            <PiPlant size={100} className="absolute top-[-5rem] right-5 text-2xl text-secondary z-0" />
        </footer>
    );
}
