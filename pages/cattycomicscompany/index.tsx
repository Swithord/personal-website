import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { useState } from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination"
import { Separator } from "@/components/ui/separator";
import { FaCat } from "react-icons/fa";

interface Comic {
    title: string;
    url: string;
    parts?: number;
}

const comics: Comic[] = [
    {
        title: 'Catty in Space',
        url: 'https://drive.google.com/file/d/1NRuePAaeHD6pxREwlL5L2mgqTEnBhQpF/preview',
        parts: 2
    },
    {
        title: "Catty's Christmas Adventures",
        url: 'https://drive.google.com/file/d/1nHQGTcdR1qS1sNfIniwOvc-gbeH49boh/preview',
        parts: 3
    },
    {
        title: 'Catty War',
        url: 'https://drive.google.com/file/d/10zTvBBum2EWeLxHeVln5UjAETnwBCO1p/preview',
        parts: 2
    },
    {
        title: 'Catty Kill Doggy',
        url: 'https://drive.google.com/file/d/1DfDLKPI5BkesCTOqhtuVg20FnEn5iL4L/preview',
        parts: 2
    },
    {
        title: 'Catty & the FINAL BATTLE',
        url: 'https://drive.google.com/file/d/1Hze2z0hqB1sFoeiMVRO8Bv5Qdjnscgx0/preview'
    },
    {
        title: "Catty's FAIL Lifestyle",
        url: 'https://drive.google.com/file/d/14c4Vhg2aaax2qIn_cPE166rLOamBtS7r/preview',
        parts: 3
    },
    {
        title: 'Catty and the Olympics',
        url: 'https://drive.google.com/file/d/1fbOU7sm0-rmghCbUlletat6okFTdn9rd/preview'
    },
    {
        title: 'CCCReborn™',
        url: 'https://drive.google.com/file/d/1kSsccRVV4ps8LwjsAPsPvEMLZC-D-L6X/preview',
        parts: 2
    },
    {
        title: 'Catty Newspaper',
        url: 'https://drive.google.com/file/d/1W-zi9HyYVrSo2we-cVV-RfhxAHP_ITY7/preview'
    }
]
const comicsPerPage = 5;

export default function CattyComicsCompany() {
    const [currentComic, setCurrentComic] = useState<Comic | null>(null);
    const [currentPage, setCurrentPage] = useState(0);

    const handlePrevious = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1);
        }
    }

    const handleNext = () => {
        if (currentPage < Math.ceil(comics.length / comicsPerPage) - 1) {
            setCurrentPage(currentPage + 1);
        }
    }

    return (
        <div className='flex flex-col bg-background text-foreground h-screen gap-10 items-center'>
            <Navbar />
            <div className='flex flex-col w-full gap-10 container grow'>
                <div className='flex flex-col gap-1'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary flex gap-2'><FaCat />welcome to the catty comics company!</span>
                    <div>
                        Catty Comics Company (CCC) was a group I founded sometime around fourth grade, which focused on drawing comics based on a fictional cat character named “Catty”. I'd recruited many of my classmates for this project, but by this point, I’d forgotten most of what happened in/with CCC. Regardless, I’ve uploaded the few CCC comics I still have for archival purposes.
                    </div>
                </div>
                    <div className='flex flex-row md:flex-nowrap flex-wrap gap-10'>
                        
                        <div className='flex flex-col w-full md:w-1/2'>
                            <span className='text-2xl text-primary font-bold underline underline-offset-4 decoration-secondary'>catalogue</span>
                            {comics.map((comic, index) => {
                                if (index >= currentPage * comicsPerPage && index < (currentPage + 1) * comicsPerPage) {
                                    return (
                                        <div className='flex flex-row gap-2 bg-primary text-primary-foreground my-2 p-2 rounded-lg justify-between' key={index}>
                                            <span>{comic.title}</span>
                                            <div className='flex flex-row gap-2'>
                                                {comic.parts && <span>{comic.parts} parts</span>}
                                                <Separator orientation="vertical" />
                                                <span className='cursor-pointer' onClick={() => setCurrentComic(comic)}>View</span>
                                            </div>
                                        </div>
                                    );
                                } else {
                                    return <div></div>;
                                }
                            })}
                            <Pagination>
                                <PaginationContent>
                                    <PaginationItem>
                                        <PaginationPrevious href="#" onClick={() => handlePrevious()} />
                                    </PaginationItem>
                                    
                                    {Array.from({ length: Math.ceil(comics.length / comicsPerPage) }).map((_, index) => (
                                        <PaginationItem key={index}>
                                            <PaginationLink 
                                                href="#" 
                                                onClick={() => setCurrentPage(index)}
                                                className={index === currentPage ? 'font-bold' : ''}
                                            >
                                                {index + 1}
                                            </PaginationLink>
                                        </PaginationItem>
                                    ))}
                                    <PaginationItem>
                                        <PaginationNext href="#" onClick={() => handleNext()}/>
                                    </PaginationItem>
                                </PaginationContent>
                            </Pagination>
                        </div>
                        <div className='flex flex-col gap-1 w-full md:w-1/2'>
                            <span className='text-2xl text-primary font-bold underline underline-offset-4 decoration-secondary'>preview</span>
                            {currentComic ? <iframe src={currentComic.url} className='w-full h-[50vh] border border-primary border-4 rounded-lg'></iframe> : <div>pick a comic to view!</div>}
                        </div>
                    </div>
            </div>
            <Footer />
        </div>
    );
}