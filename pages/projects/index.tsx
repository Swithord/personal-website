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

export default function Projects() {
  return (
    <div className='flex flex-col bg-background text-foreground h-screen gap-10 items-center'>
        <Navbar />
        <div className='flex flex-col w-full gap-10 container grow'>
            <div className='flex flex-col gap-1'>
                <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>featured projects</span>
                <div className='flex gap-2 flex-wrap text-lg items-center'>
                    <span className='italic'>"We each need to find our own inspiration, Kiki. Sometimes it’s not easy."</span>
                    <span className='whitespace-nowrap'>- Ursula, Kiki's Delivery Service</span>
                    <GiCat size={25} />
                </div>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-2xl text-primary font-bold underline underline-offset-4 decoration-secondary'>web development</span>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                    <Masonry gutter="1rem">
                        <Card className='border border-secondary'>
                            <CardHeader>
                                <CardTitle className='text-xl'>Scriptorium</CardTitle>
                                <CardDescription className='text-md'>A code-sharing platform with remote code execution, and community features. Much like replit.com! <span className='italic'>Course project for CSC309.</span></CardDescription>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <ul className="list-disc pl-5">
                                    <li>CRUD API: Type-safe management of users, code files and blog post entities with Prisma ORM</li>
                                    <li>Remote code execution: Docker containerization of environment, supporting 12 major languages</li>
                                    <li>Frontend: code editor with syntax highlighting, paginated search results, responsive design</li>
                                </ul>
                                <div className="flex gap-2">
                                    <Link href='http://scriptorium.henrytchen.com' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View deployment
                                        <FiExternalLink />
                                    </Link>
                                    <Link href='https://github.com/LatinScribe/CSC309-Scriptorium' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View on GitHub
                                        <FiGithub />
                                    </Link>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span><span className='font-bold'>Stack:</span> Next.js, Prisma, Docker, Node.js, React, shadcn, TailwindCSS, Typescript</span>
                            </CardFooter>
                        </Card>
                        <Card className='border border-secondary'>
                            <CardHeader>
                                <CardTitle className='text-xl'>TTCTracker</CardTitle>
                                <CardDescription className='text-md'>Predicts public transit vehicle arrival times. <span className='italic'>Course project for CSC207.</span></CardDescription>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <ul className="list-disc pl-5">
                                    <li>Prediction algorithm: self-designed; combines live vehicle locations, route geographical data and historical information to predict arrival times</li>
                                    <li>Backend: based on clean architecture with adherance to SOLID, providing a RESTful API</li>
                                </ul>
                                <div className="flex gap-2">
                                    <Link href='https://github.com/nsaroiu/TTC-Tracker' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View on GitHub
                                        <FiGithub />
                                    </Link>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span><span className='font-bold'>Stack:</span> Java, Spring Boot, React</span>
                            </CardFooter>
                        </Card>
                        <Card className='border border-secondary'>
                            <CardHeader>
                                <CardTitle className='text-xl'>ASX</CardTitle>
                                <CardDescription className='text-md'>Website for UofT's astronomy club for events postings.</CardDescription>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <ul className="list-disc pl-5">
                                    <li>Work in progress</li>
                                </ul>
                                <div className="flex gap-2">
                                    <Link href='https://www.utasx.ca' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View deployment
                                        <FiExternalLink />
                                    </Link>
                                    <Link href='https://github.com/Swithord/asx' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View on GitHub
                                        <FiGithub />
                                    </Link>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span><span className='font-bold'>Stack:</span> Next.js, React, TailwindCSS, Typescript</span>
                            </CardFooter>
                        </Card>
                        <Card className='border border-secondary'>
                            <CardHeader>
                                <CardTitle className='text-xl'>NOVA Ground Station</CardTitle>
                                <CardDescription className='text-md'>Data visualisation for University of Toronto Aerospace Team's rockets' sensors.</CardDescription>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <ul className="list-disc pl-5">
                                    <li>Dashboard: real-time, animated, scrollable, customisable plots, sampling sensor values from an API on a Raspberry Pi</li>
                                </ul>
                                <div className="flex gap-2">
                                    <Link href='https://github.com/UTATRocketry/novaOPS-front' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View on GitHub
                                        <FiGithub />
                                    </Link>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span><span className='font-bold'>Stack:</span> React, ChakraUI, react-chartjs-2</span>
                            </CardFooter>
                        </Card>
                    </Masonry>
                </ResponsiveMasonry>
            </div>
            <div className='flex flex-col gap-2'>
                <span className='text-2xl text-primary font-bold underline underline-offset-4 decoration-secondary'>machine learning</span>
                <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2 }}>
                    <Masonry gutter="1rem">
                        <Card className='border border-secondary'>
                            <CardHeader>
                                <CardTitle className='text-xl'>UofT Reddit Sentiment Analysis</CardTitle>
                                <CardDescription className='text-md'>Finding the best (and worst) courses, departments and colleges at UofT. </CardDescription>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <ul className="list-disc pl-5">
                                    <li>Model: BERT-based multi-class text classifier model for sentiment analysis</li>
                                    <li>Dataset: 1.4 million Reddit posts & comments from UofT students</li>
                                </ul>
                                <div className="flex gap-2">
                                    <Link href='https://www.reddit.com/r/UofT/comments/15a7mpa/i_analysed_14_million_ruoft_posts_to_find_the/' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View published report
                                        <FiExternalLink />
                                    </Link>
                                    <Link href='https://github.com/Swithord/uoft-subreddit-sentiment-analysis' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View on GitHub
                                        <FiGithub />
                                    </Link>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span><span className='font-bold'>Stack:</span> Pandas, Huggingface, Tableau</span>
                            </CardFooter>
                        </Card>
                        <Card className='border border-secondary'>
                            <CardHeader>
                                <CardTitle className='text-xl'>CargoVision</CardTitle>
                                <CardDescription className='text-md'>Detects Dangerous Goods shipping labels on incoming cargo shipments. <span className='italic'>Internship project for Cathay Pacific Airways.</span></CardDescription>
                            </CardHeader>
                            <CardContent className='flex flex-col gap-2'>
                                <ul className="list-disc pl-5">
                                    <li>Model: YOLOv8, finetuned </li>
                                    <li>Dataset: custom dataset compiled from online sources & from Cathay Cargo Terminal; 760+ images, 16 object classes, 2900+ labels </li>
                                </ul>
                                <div className="flex gap-2">
                                    <Link href='https://github.com/Swithord/cathaycargo' target='_blank' className='flex gap-2 items-center w-fit bg-primary px-3 py-1 rounded-lg text-background'>
                                        View on GitHub
                                        <FiGithub />
                                    </Link>
                                </div>
                            </CardContent>
                            <CardFooter>
                                <span><span className='font-bold'>Stack:</span> OpenCV, Roboflow, YOLOv8 </span>
                            </CardFooter>
                        </Card>
                    </Masonry>
                </ResponsiveMasonry>
            </div>
        </div>
        <Footer />
    </div>
    );
}