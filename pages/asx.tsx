import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { GiCat } from "react-icons/gi";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";

export default function Publications() {
  return (
    <div className='flex flex-col bg-background text-foreground h-screen gap-10 items-center'>
        <Navbar />
        <div className='flex flex-col w-full gap-10 container grow'>
            <div className='flex flex-col gap-3'>
                <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>hello, fellow asx exec!</span>
                <span>so you'd like to contact me. here's my most up-to-date info:</span>
                <ul className='flex flex-col gap-1'>
                    <li>
                        <span className='font-bold'>email 1</span>: <a href="mailto:example@email.com">yorkhayng@gmail.com</a>
                    </li>
                    <li>
                        <span className='font-bold'>email 2</span>: <a href="mailto:example2@email.com">york.ng@mail.mcgill.ca</a>
                    </li>
                    <li>
                        <span className='font-bold'>discord</span>: Swithord
                    </li>
                    <li>
                        <span className='text-sm text-muted-foreground'>last updated june 2, 2026</span>
                    </li>
                </ul>
                <span>hope all is well!</span>
                <div className='flex flex-col mt-1'>
                    <span>clear skies,</span>
                    <span>york</span>
                </div>
            </div>
        </div>
        <Footer />
    </div>
    );
}