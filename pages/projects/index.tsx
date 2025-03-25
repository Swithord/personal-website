import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function Projects() {
  return (
    <div className='flex flex-col bg-background text-foreground h-screen gap-10 items-center'>
        <Navbar />
        <div className='flex flex-col w-full gap-10 container'>
            did i mention this website is still under construction? 🚧
        </div>
        <Footer />
    </div>
    );
}