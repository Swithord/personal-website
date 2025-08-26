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
                <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>publications</span>
                <div className='flex gap-2 flex-wrap text-lg items-center'>
                    <ul>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Less is More: The Effectiveness of Compact Language Typological Representations</span>
                                <span><span className='font-bold'>York Hay Ng</span>, Fiona Hoang, En-Shiun Annie Lee</span>
                                <span className='text-muted-foreground'>In 2025 Conference on  Empirical Methods in Natural Language Processing (EMNLP) (Main Conference, Short Paper)</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>manuscripts under review</span>
                    <div className='flex gap-2 flex-wrap text-lg items-center'>
                        <ul>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Transfer Learning from Mandarin for Sinitic Natural Language Understanding</span>
                                    <span>Junghyun Min, <span className='font-bold'>York Hay Ng</span>, En-Shiun Annie Lee</span>
                                    <span className='text-muted-foreground'>Extended abstract, under review.</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
        <Footer />
    </div>
    );
}