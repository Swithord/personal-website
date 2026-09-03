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
import { FiGithub, FiExternalLink, FiCoffee } from "react-icons/fi";
import { IoDocumentTextOutline } from "react-icons/io5";
import { Separator } from "@/components/ui/separator";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const relevantCoursework = [
    { code: "CSC485", title: "computational linguistics" },
    { code: "CSC401", title: "natural language computing" },
    { code: "CSC420", title: "introduction to image understanding" },
    { code: "CSC320", title: "introduction to visual computing" },
    { code: "CSC413", title: "neural networks and deep learning" },
    { code: "CSC373", title: "algorithm design, analysis & complexity" },
];

const funCourses = [
    { code: "JCA302", title: "the bible and the big bang (💚 prof. hincks)" },
    { code: "AST301", title: "observational astronomy" },
    { code: "AST201", title: "stars and galaxies" },
    { code: "PHL233", title: "philosophy for scientists" },
    // { code: "CSC108", title: "intro to computer programming" },
];

export default function CV() {
    return (
        <div className='flex flex-col bg-background text-foreground h-screen gap-10 items-center'>
            <Navbar />
            <div className='flex flex-col w-full gap-10 container grow'>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>education</span>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>McGill University</span>
                            <span>MSc in Computer Science (Thesis)</span>
                        </div>
                        <div className='flex flex-col items-end'>
                            <span>2026 - 2028</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>University of Toronto</span>
                            <span>HBSc, Computer Science Specialist, Economics Minor</span>
                            <div className='flex flex-col gap-0 mt-3 sm:flex-row sm:gap-4'>
                                <Accordion type="single" collapsible className='w-full sm:w-auto'>
                                    <AccordionItem value='relevant-coursework' className='border-none'>
                                        <AccordionTrigger className='justify-start gap-2 py-0 text-md text-primary hover:underline'>relevant coursework</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='relative ml-3 pl-6'>
                                                <div className='absolute left-[0.33rem] top-2 bottom-2 w-px bg-primary' />
                                                <div className='flex flex-col gap-4'>
                                                    {relevantCoursework.map(({ code, title }) => (
                                                        <div key={code} className='relative flex items-center gap-3 text-base'>
                                                            <span className='absolute -left-[1.45rem] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background' />
                                                            <span className='font-semibold'>{code}</span>
                                                            <span className='text-muted-foreground'>{title}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                                <Accordion type="single" collapsible className='w-full sm:w-auto'>
                                    <AccordionItem value='fun-courses' className='border-none'>
                                        <AccordionTrigger className='justify-start gap-2 py-0 text-md text-primary hover:underline'>fun courses</AccordionTrigger>
                                        <AccordionContent>
                                            <div className='relative ml-3 pl-6'>
                                                <div className='absolute left-[0.33rem] top-2 bottom-2 w-px bg-primary' />
                                                <div className='flex flex-col gap-4'>
                                                    {funCourses.map(({ code, title }) => (
                                                        <div key={code} className='relative flex items-center gap-3 text-base'>
                                                            <span className='absolute -left-[1.45rem] h-2.5 w-2.5 rounded-full bg-primary ring-4 ring-background' />
                                                            <span className='font-semibold'>{code}</span>
                                                            <span className='text-muted-foreground'>{title}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </AccordionContent>
                                    </AccordionItem>
                                </Accordion>
                            </div>
                        </div>
                        <div className='flex flex-col items-end text-right'>
                            <span>2022 - 2026</span>
                            <span>cGPA 3.9/4; graduated with high distinction.</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>research experience</span>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span><span className='font-bold'>Mila - Quebec Artificial Intelligence Institute </span></span>
                            <span>Supervised by Prof. Jackie Cheung <span className='text-secondary font-bold text-xl'>|</span> LLM evaluations</span>
                        </div>
                        <div className='flex flex-col items-end text-right'>
                            <span>2026 - present</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Computational Linguistics Lab, University of Toronto </span>
                            <span>Supervised by Prof. Gerald Penn <span className='text-secondary font-bold text-xl'>|</span> Trope modelling & detection</span>
                        </div>
                        <div className='flex flex-col items-end text-right'>
                            <span>2026 - present</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Lee Language Lab, University of Toronto</span>
                            <span>Supervised by Prof. Annie Lee <span className='text-secondary font-bold text-xl'>|</span> Cross-lingual transfer; low-resource languages; typology; machine translation</span>
                        </div>
                        <div className='flex flex-col items-end text-right'>
                            <span>2025 - present</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>publications</span>
                    <span className='text-lg'>see <a href='/publications' className='underline font-bold text-primary'>research</a>.</span>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>teaching experience</span>
                    <div className='flex justify-between gap-3 text-lg'>
                        <span><span className='font-bold'>COMP 208: Computer Programming for Physical Sciences and Engineering</span>, McGill University</span>
                        <span className='text-right'>Fall 2026</span>
                    </div>
                    <div className='flex justify-between gap-3 text-lg'>
                        <span><span className='font-bold'>CSC111: Foundations of Computer Science II</span>, University of Toronto</span>
                        <span className='text-right'>Winter 2026</span>
                    </div>
                    <div className='flex justify-between gap-3 text-lg'>
                        <span><span className='font-bold'>CSC207: Software Design</span>, University of Toronto</span>
                        <span className='text-right'>Fall 2025</span>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>professional experience</span>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Cathay Pacific Airways</span>
                            <span>Vision model training; React frontend development; DevOps (AWS and Azure functions).</span>
                        </div>
                        <div className='flex flex-col items-end'>
                            <span>Jul - Aug 2025</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>dRoW</span>
                            <span>Langchain RAG agent development; Angular frontend development.</span>
                        </div>
                        <div className='flex flex-col items-end'>
                            <span>May - Jun 2023; May - Jun 2024</span>
                        </div>
                    </div>
                    <div className='flex justify-between text-lg gap-3'>
                        <div className='flex flex-col'>
                            <span className='font-bold'>Civil Aviation Department of Hong Kong</span>
                            <span>Automation of air traffic analysis. <span className='text-sm text-muted-foreground'>(this was super cool.)</span></span>
                        </div>
                        <div className='flex flex-col items-end'>
                            <span>Jul - Aug 2023</span>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-3'>
                    <Accordion type="single" collapsible>
                        <AccordionItem value='student-leadership' className='border-none'>
                            <AccordionTrigger className='justify-start gap-2 py-0 text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary hover:underline'>student organizations</AccordionTrigger>
                            <AccordionContent className='flex flex-col gap-3 pt-3'>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Vice President</span>
                                        <span>Astronomy & Space Exploration Association, University of Toronto</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>May 2025 - May 2026</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Academic Associate</span>
                                        <span>Computer Science Students Union, University of Toronto</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>Sep 2025 - May 2026</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Mentor, Undergraduate Student Research Program</span>
                                        <span>Computer Science Students Union, University of Toronto</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>Sep 2025 - May 2026</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Outreach Director</span>
                                        <span>Astronomy & Space Exploration Association, University of Toronto</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>May 2023 - May 2025</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Software Developer</span>
                                        <span>University of Toronto Aerospace Team</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>Sep 2024 - May 2025</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Platform Developer</span>
                                        <span>University of Toronto Machine Intelligence Team</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>Sep 2024 - May 2025</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Software Developer</span>
                                        <span>UofT Web Dev Club</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>Jan 2023 - May 2024</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Communications Admin</span>
                                        <span>Computer Science Students Union, University of Toronto</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>Jan 2023 - May 2024</span>
                                    </div>
                                </div>
                                <div className='flex justify-between text-lg gap-3'>
                                    <div className='flex flex-col'>
                                        <span className='font-bold'>Software Developer</span>
                                        <span>UofT Blueprint</span>
                                    </div>
                                    <div className='flex flex-col items-end'>
                                        <span>Sep 2023 - May 2024</span>
                                    </div>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                </div>
                
                <span className='flex items-center gap-2 text-lg mt-6'>
                    <FiCoffee aria-hidden='true' />
                    ask me about my barista experiences!
                </span>
            </div>
            <Footer />
        </div>
    );
}