import { useTheme } from "next-themes"
import Navbar from '@/components/navbar';
import Image from 'next/image'
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import Link from "next/link";
import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import Footer from "@/components/footer";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Printer, TrophyIcon } from "lucide-react";
import { Trophy } from "lucide-react";

type NewsItem = {
  date: string;
  content: React.ReactNode;
};

const news: NewsItem[] = [
  {
    date: "apr 2026",
    content: (
      <>
      I will be starting my masters in computer science at McGill University this fall! I'm excited to be joining Prof. Jackie Cheung's lab at the Mila Institute and to be working on LLM evaluation.
      </>
    )
  },
  {
    date: "mar 2026",
    content: (
      <>
        I presented our latest paper on language distances,{" "}
        <Link href="https://aclanthology.org/2026.eacl-srw.8" target="_blank" className='underline font-bold text-primary'>
          "Modality Matching Matters: Calibrating Language Distances for Cross-Lingual Transfer in URIEL+"
        </Link>
        , at EACL SRW 2026 (oral & poster) and SIGTYP (oral)!
      </>
    )
  },
  {
    date: "feb 2026",
    content: (
      <>
        our paper,{" "}
        <Link href="https://arxiv.org/pdf/2510.27183" target="_blank" className='underline font-bold text-primary'>
          "Simple Additions, Substantial Gains"
        </Link>
        , has been accepted to LREC 2026!
      </>
    )
  },
  {
    date: "nov 2025",
    content: (
      <>
        I presented my first paper,{" "}
        <Link href="https://aclanthology.org/2025.emnlp-main.1310" target="_blank" className='underline font-bold text-primary'>
          "Less is More: The Effectiveness of Compact Typological Language Representations"
        </Link>
        , at the EMNLP 2025 Main Conference!
      </>
    ),
  },
];

export default function Home() {
  return (
    <div className='flex flex-col bg-background text-foreground h-screen'>
      <Navbar />
      <div className='flex flex-col w-full gap-10 items-center grow'>
        <div className='w-full h-[25vh] sm:h-[33vh] md:h-[50vh] overflow-hidden relative object-center'>
          <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 container'>
            <div className='flex flex-col text-white max-w-[100%] md:max-w-[100%] lg:max-w-[75%]'>
              <span className='text-3xl font-bold'>hey there! I'm york.</span>
              <span className='text-lg'>welcome to my corner of the internet.</span>
            </div>
          </div>
          <div className='absolute bottom-0 md:bottom-5 right-5 z-20'>
            <div className='flex flex-col text-white items-end'>
              <span className='text-lg'>chilliwack, bc</span>
            </div>
          </div>
          <div className='absolute inset-0 bg-black opacity-60 z-10'></div>
          <Image
            src='/herobanner.jpg'
            alt='Hero Banner'
            fill={true}
            style={{ objectFit: 'cover', objectPosition: 'center center' }}
          />
        </div>
        <div className='container flex flex-col gap-10'>
          <div className='flex flex-col gap-1 relative'>
            <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>about me</span>
            <div className='relative'>
              <Image
              src="/profile.JPG"
              alt="Profile picture"
              width={150}
              height={150}
              className="rounded-full border-4 border-secondary shadow-lg object-cover float-right ml-4 mb-2 w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px] dark:hidden"
              priority
              />
              <Image
              src="/profile-dark.png"
              alt="Profile picture"
              width={150}
              height={150}
              className="rounded-full border-4 border-secondary shadow-lg object-cover float-right ml-4 mb-2 w-24 h-24 sm:w-32 sm:h-32 md:w-[150px] md:h-[150px] hidden dark:block"
              priority
              />
              <div className='flex flex-col gap-3'>
              <div className='flex gap-1 flex-wrap md:flex-nowrap text-lg'>
                <span className='font-bold whitespace-nowrap'>what I do:</span>
                <span>
                I'm a fourth-year computer science student <span className='text-sm'>(minoring in economics)</span> at the University of Toronto, as well as an undergraduate researcher at the
                <HoverCard>
                  <HoverCardTrigger>
                  <span> <span className='bg-secondary p-1 rounded'>lee language lab</span></span>
                  </HoverCardTrigger>
                  <HoverCardContent className='bg-secondary border border-primary'>
                  <span>we focus on multilingual nlp & cross-lingual transfer with a focus on lesser-resourced languages.</span>
                  </HoverCardContent>
                </HoverCard>
                <span> </span>(supervised by Prof. Annie Lee) and the social reading technology group (supervised by Prof. Gerald Penn). I'm also a teaching assistant for CSC111.
                </span>
              </div>
              <div className='flex gap-1 flex-wrap md:flex-nowrap text-lg'>
                <span className='font-bold whitespace-nowrap'>my research interests:</span>
                <span>multilinguality in natural language processing, LLM biases, human-AI interaction.</span>
              </div>
              <div className='flex gap-1 flex-wrap md:flex-nowrap text-lg'>
                <span className='font-bold whitespace-nowrap'>outside of school:</span>
                <span>
                I'm the vice president at <Link href='https://www.utasx.ca' className='underline font-bold text-primary'>uoft's astronomy club</Link>. I help out with the computer science student union & I mentor at its research mentorship program. I like cooking/baking, <HoverCard>
                  <HoverCardTrigger>
                  <span> </span><span className='bg-secondary p-1 rounded'>specialty coffee</span>
                  </HoverCardTrigger>
                  <HoverCardContent className='bg-secondary border border-primary'>
                  <span>i'm a volunteer barista at cafe059 - the architecture building cafe!</span>
                  </HoverCardContent>
                </HoverCard>, board games and
                <HoverCard>
                  <HoverCardTrigger>
                  <span> </span><span className='bg-secondary p-1 rounded'>classical music.</span>
                  </HoverCardTrigger>
                  <HoverCardContent className='bg-secondary border border-primary'>
                  <span>chopin is the 🐐.</span>
                  </HoverCardContent>
                </HoverCard>
                </span>
              </div>
              <div className='flex gap-1 flex-wrap md:flex-nowrap text-lg'>
                <span>- maybe some of my <Link href='/projects' className='underline font-bold text-primary'>projects</Link> will interest you?</span>
              </div>
              </div>

            </div>
          </div>
          <div className='flex flex-col gap-5'>
            <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>latest</span>
            <ul className='flex flex-col gap-5'>
              {news.map((item, i) => (
                <li key={i} className='flex gap-5 rounded-lg items-center'>
                  <span className="font-bold text-lg whitespace-nowrap">{item.date}:</span>
                  <div className='text-lg'>{item.content}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>get in touch</span>
            <div className='flex flex-col gap-1 text-lg'>
              <span>I'd love to hear from you! feel free to reach out to me through any of the following platforms:</span>
              <div className='flex gap-5'>
                <Link href='https://www.linkedin.com/in/york-hay-ng' className='underline flex items-center gap-1' target='_blank' rel='noopener noreferrer'>
                  <FiLinkedin size={20} />
                  LinkedIn
                </Link>
                <Link href='mailto:york.ng@mail.utoronto.ca' className='underline flex items-center gap-1' target='_blank' rel='noopener noreferrer'>
                  <FiMail size={20} />
                  Email
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
