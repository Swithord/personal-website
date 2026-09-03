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
import { Separator } from "@/components/ui/separator";

export default function Publications() {
    return (
        <div className='flex flex-col bg-background text-foreground h-screen gap-10 items-center'>
            <Navbar />
            <div className='flex flex-col w-full gap-10 container grow'>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>publications</span>
                    <ul className='flex gap-6 flex-wrap text-lg items-center'>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Modality Matching Matters: Calibrating Language Distances for Cross-Lingual Transfer in URIEL+</span>
                                <span><span className='font-bold'>York Hay Ng*</span>, Aditya Khan*, James Lu*, Matteo Salloum, Michael Zhou, Fiona Hoang, A. Seza Doğruöz, En-Shiun Annie Lee</span>
                                <span className='text-muted-foreground'>EACL 2026 SRW (Oral & Poster) and SIGTYP (Oral, non-archival). Outstanding Paper.</span>
                                <div className='flex gap-2'>
                                    <Link href="https://aclanthology.org/2026.eacl-srw.8" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ACL Anthology</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Less is More: The Effectiveness of Compact Typological Language Representations</span>
                                <span><span className='font-bold'>York Hay Ng</span>, Fiona Hoang, En-Shiun Annie Lee</span>
                                <span className='text-muted-foreground'>EMNLP 2025 (Poster)</span>
                                <div className='flex gap-2'>
                                    <Link href="https://aclanthology.org/2025.emnlp-main.1310/" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ACL Anthology</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Typological Feature Prediction with Large Language Models: An In-Context Learning Approach</span>
                                <span>Qianwen Wang*, <span className='font-bold'>York Hay Ng*</span>, Aditya Khan, En-Shiun Annie Lee</span>
                                <span className='text-muted-foreground'>To appear in EMNLP 2026.</span>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Dynamic Meta-Metrics: Source-Sentence Conditioned Weighting for MT Evaluation</span>
                                <span>Luke Zhang, Justin Vasselli, Aditya Khan, <span className='font-bold'>York Hay Ng</span>, En-Shiun Annie Lee</span>
                                <span className='text-muted-foreground'>ACL 2026 SRW</span>
                                <div className='flex gap-2'>
                                    <Link href="https://aclanthology.org/2026.acl-srw.80/" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ACL Anthology</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>Simple Additions, Substantial Gains: Expanding Scripts, Languages, and Lineage Coverage in URIEL+</span>
                                <span>Mason Shipton, <span className='font-bold'>York Hay Ng</span>, Aditya Khan, Fiona Hoang, James Lu, A. Seza Doğruöz, En-Shiun Annie Lee</span>
                                <span className='text-muted-foreground'>LREC 2026</span>
                                <div className='flex gap-2'>
                                    <Link href="https://lrec.elra.info/lrec2026-main-863" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ELRA</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className='flex flex-col'>
                                <span className='font-bold'>SiniticMTError: A Machine Translation Dataset with Error Annotations for Sinitic Languages</span>
                                <span>Hannah Liu, Junghyun Min, En-Shiun Annie Lee, Ethan Yue Heng Cheung, Shou-Yi Hung, Elsie Chan, Shiyao Qian, Runtong Liang, Kimlan Huynh, Wing Yu Yip, <span className='font-bold'>York Hay Ng</span>, Tsz Fung Yau, Ka Ieng Charlotte Lo, You-Wei Wu and Richard Tzong-Han Tsai</span>
                                <span className='text-muted-foreground'>LREC 2026</span>
                                <div className='flex gap-2'>
                                    <Link href="https://lrec.elra.info/lrec2026-main-683" target="_blank">
                                        <Button variant="outline" size="sm" className='flex items-center gap-2 bg-secondary'>
                                            <IoDocumentTextOutline />
                                            <span className='text-lg'>ELRA</span>
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </li>
                    </ul>
                    <span>* denotes equal contribution.</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>preprints</span>
                    <ul className='flex flex-col gap-6 text-lg'>
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
                                <span>and more to come... 👀</span>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-1'>
                    <span>I also care deeply about the responsible use of AI.</span>
                    <div className='flex flex-col gap-1 bg-secondary p-6 w-fit'>
                        <div className='flex flex-row gap-3'>
                            <span className='text-3xl font-bold'>"</span>
                            <div className='flex flex-col gap-1 text-lg'>
                                <span>a computer can never be held accountable,</span>
                                <span>therefore a computer must never make a management decision.</span>
                            </div>
                        </div>
                        <span className='text-primary'>- IBM training manual, 1979</span>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}