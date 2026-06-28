import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { FaChessRook } from "react-icons/fa";

interface GalleryImage {
    src: string;
    caption?: string;
}

interface GalleryGroup {
    name: string;
    images: GalleryImage[];
}

const galleryGroups: GalleryGroup[] = [
    {
        name: "café",
        images: [
            { src: "/gallery/cafe/IMG_2742 Large.jpeg"},
            { src: "/gallery/cafe/IMG_1121 Large.jpeg", caption: "strawberry matcha best matcha 🥺" },
            { src: "/gallery/cafe/IMG_2662 Large.jpeg"},
            { src: "/gallery/cafe/IMG_0805 Large.jpeg", caption: "a literal ice-chilled tea" },
            { src: "/gallery/cafe/IMG_4146 Large.jpeg" },
            { src: "/gallery/cafe/IMG_4948 Large.jpeg", caption: "supposedly this art won a contest at cafe059" },
            { src: "/gallery/cafe/IMG_3935 Large.jpeg", caption: "at-home coffee shop!" },
            { src: "/gallery/cafe/IMG_5979 Large.jpeg" },
            { src: "/gallery/cafe/IMG_4749 Large.jpeg", caption: "not paid promo, but uncle ben coffee is superb. lowk up there with glitch coffee" },
            { src: "/gallery/cafe/IMG_9022 Large.jpeg", caption: '"customers" at our at-home coffee shop usually order... milk teas.' },
            { src: "/gallery/cafe/IMG_3659 Large.jpeg", caption: "got a puck leveller but not a WDT? introducing the poor man's WDT. yes, it was my idea. no, i have no regrets." },
            { src: "/gallery/cafe/IMG_6315 Large.jpeg", },

        ],
    },
    {
        name: "cooking",
        images: [
            { src: "/gallery/cooking/IMG_1167 Large.jpeg", caption: "you almost can't tell i don't have a deep-fryer" },
            { src: "/gallery/cooking/IMG_1251 2 Large.jpeg", caption: "a bucatini with homemade meatballs" },
            { src: "/gallery/cooking/IMG_1313 Large.jpeg", caption: "pastel de natas!!!" },
            { src: "/gallery/cooking/IMG_3858 Large.jpeg", caption: "vegetarian thai red curry w/ thai milk tea & thai person's seal of approval (i think)" },
            { src: "/gallery/cooking/IMG_1118 Large.jpeg", caption: "parfaits are goated 🐐" },
            { src: "/gallery/cooking/IMG_3624 Large.jpeg", caption: "tantanmen" },
            { src: "/gallery/cooking/IMG_1688 2 Large.jpeg", caption: "a shiso eggplant butadon" },
            { src: "/gallery/cooking/IMG_3871 Large.jpeg", caption: "modified eggs benedict" },
            { src: "/gallery/cooking/IMG_4039 Large.jpeg", caption: "grilled burgers!! 'murica 🦅🇺🇸" },
            { src: "/gallery/cooking/IMG_7470 Large.jpeg", caption: "a most truly exquisite tiramisu with specialty espresso and special...ly procured marsala wine" },
            { src: "/gallery/cooking/IMG_9473 Large.jpeg", caption: "gingerbread cookies" },
        ],
    },
];

export default function Gallery() {
    return (
        <div className='flex flex-col bg-background text-foreground h-screen gap-10 items-center'>
            <Navbar />
            <div className='flex flex-col w-full gap-10 container grow'>
                <div className='flex flex-col gap-1'>
                    <span className='text-3xl text-primary font-bold underline underline-offset-4 decoration-secondary'>gallery</span>
                    <div className='flex gap-2 flex-wrap text-lg items-center'>
                        <span className='italic'>"May all your bacons burn!"</span>
                        <span className='whitespace-nowrap'>- Calcifer, Howl's Moving Castle</span>
                        <FaChessRook size={25} />
                    </div>
                </div>
                {galleryGroups.map((group) => (
                    <div key={group.name} className='flex flex-col gap-2'>
                        <span className='text-2xl text-primary font-bold underline underline-offset-4 decoration-secondary'>{group.name}</span>
                        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 1100: 3 }}>
                            <Masonry gutter="1rem">
                                {group.images.map((image, index) => (
                                    <div key={index} className='flex flex-col gap-1'>
                                        <Image
                                            src={image.src}
                                            alt={image.caption}
                                            width={600}
                                            height={400}
                                            className='rounded-lg w-full h-auto'
                                        />
                                        {image.caption && <span className='text-sm text-muted-foreground italic'>{image.caption}</span>}
                                    </div>
                                ))}
                            </Masonry>
                        </ResponsiveMasonry>
                    </div>
                ))}
            </div>
            <Footer />
        </div>
    );
}
