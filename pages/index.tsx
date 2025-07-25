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

export default function Home() {
  return (
    <div className='flex flex-col bg-background text-foreground h-screen'>
      <Navbar />
      <div className='flex flex-col w-full gap-10 items-center grow'>
        <div className='w-full h-[25vh] sm:h-[33vh] md:h-[50vh] overflow-hidden relative object-center'>
          <div className='absolute bottom-5 left-1/2 transform -translate-x-1/2 z-20 container'>
            <div className='flex flex-col text-white max-w-[100%] md:max-w-[50%] lg:max-w-[33%]'>
              <span className='text-3xl font-bold'>hey there! i'm york.</span>
              <span className='text-lg'>welcome to my corner of the internet.</span>
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
                src="/profile.png"
                alt="Profile picture"
                width={150}
                height={150}
                className="rounded-full border-4 border-secondary shadow-lg object-cover float-right ml-4 mb-2"
                priority
              />
              <div className='flex gap-1 flex-wrap md:flex-nowrap text-lg'>
                <span className='font-bold whitespace-nowrap'>what i do:</span>
                <span>
                  i'm a third-year computer science student <span className='text-sm'>(minoring in economics)</span> at the university of toronto, and an undergraduate researcher at the
                  <HoverCard>
                    <HoverCardTrigger>
                      <span> <span className='bg-secondary p-1 rounded'>lee language lab</span></span>
                    </HoverCardTrigger>
                    <HoverCardContent className='bg-secondary border border-primary'>
                      <span>we focus on multilingual nlp with a focus on lesser-resourced languages. supervised by Dr. Annie Lee.</span>
                    </HoverCardContent>
                  </HoverCard>
                  .
                </span>
              </div>
              <div className='flex gap-1 flex-wrap md:flex-nowrap text-lg'>
                <span className='font-bold whitespace-nowrap'>my interests:</span>
                <span>natural language processing, software development, machine learning, building cool things that matter.</span>
              </div>
              <div className='flex gap-1 flex-wrap md:flex-nowrap text-lg'>
                <span className='font-bold whitespace-nowrap'>outside of school:</span>
                <span>
                  i'm the vice president at <Link href='https://instagram.com/asx_uoft' className='bg-secondary p-1 rounded'>uoft's astronomy club</Link>, and i <span className='text-sm'>used to be, because it's the summer,</span> a barista at cafe 059. i like playing flight simulators and listening to
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
                <span>maybe some of my <Link href='/projects' className='bg-secondary p-1 rounded'>projects</Link> will interest you?</span>
              </div>
            </div>
          </div>
          <div className='flex flex-col gap-1'>
            <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>get in touch</span>
            <div className='flex flex-col gap-1 text-lg'>
              <span>i'd love to hear from you! feel free to reach out to me through any of the following platforms:</span>
              <div className='flex gap-5'>
                <Link href='https://www.linkedin.com/in/york-hay-ng' className='underline flex items-center gap-1' target='_blank' rel='noopener noreferrer'>
                  <FiLinkedin size={20} />
                  LinkedIn
                </Link>
                <Link href='https://github.com/swithord' className='underline flex items-center gap-1' target='_blank' rel='noopener noreferrer'>
                  <FiGithub size={20} />
                  GitHub
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
