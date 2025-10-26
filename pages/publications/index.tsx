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
                <ul className='flex gap-5 flex-wrap text-lg items-center'>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Less is More: The Effectiveness of Compact Typological Language Representations</span>
                                <span><span className='font-bold'>York Hay Ng</span>, Fiona Hoang, En-Shiun Annie Lee</span>
                                <span className='text-muted-foreground'>In 2025 Conference on  Empirical Methods in Natural Language Processing (EMNLP) (Main Conference)</span>
                                <div className='flex gap-2'>
                                    <Link href="https://arxiv.org/abs/2509.20129" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ArXiv</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
            </div>
            <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>manuscripts under review</span>
                    <ul className='flex gap-5 flex-wrap text-lg items-center'>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Modality Matching Matters: Calibrating Language Distances for Cross-Lingual Transfer in URIEL+</span>
                                    <span><span className='font-bold'>York Hay Ng*</span>, Aditya Khan*, James Lu*, Matteo Salloum, Michael Zhou, Fiona Hoang, A. Seza Doğruöz, En-Shiun Annie Lee</span>
                                    <div className='flex gap-2'>
                                    <Link href="https://arxiv.org/abs/2510.19217" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ArXiv</span>
                                        </Button>
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>CantoNLU: A benchmark for Cantonese natural language understanding</span>
                                    <span>Junghyun Min, <span className='font-bold'>York Hay Ng</span>, Sophia Chan, Helena Zhao, En-Shiun Annie Lee</span>
                                    <div className='flex gap-2'>
                                    <Link href="https://arxiv.org/abs/2510.20670" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ArXiv</span>
                                        </Button>
                                    </Link>
                                </div>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>Simple Additions, Substantial Gains: Expanding Scripts, Languages, and Lineage Coverage in URIEL+</span>
                                    <span>Mason Shipton, <span className='font-bold'>York Hay Ng</span>, Aditya Khan, Fiona Hoang, James Lu, A. Seza Doğruöz, En-Shiun Annie Lee</span>
                                </div>
                            </li>
                            <li>
                                <div className='flex flex-col'>
                                    <span className='font-bold'>SiniticMTError: A Machine Translation Dataset with Error Annotations for Sinitic Languages</span>
                                    <span>Hannah Liu, Junghyun Min, En-Shiun Annie Lee, Ethan Yue Heng Cheung, Shou-Yi Hung, Elsie Chan, Shiyao Qian, Runtong Liang, Kimlan Huynh, Wing Yu Yip, <span className='font-bold'>York Hay Ng</span>, Tsz Fung Yau, Ka Ieng Charlotte Lo, You-Wei Wu and Richard Tzong-Han Tsai</span>
                                </div>
                            </li>
                    </ul>
                </div>
        </div>
        <Footer />
    </div>
    );
}