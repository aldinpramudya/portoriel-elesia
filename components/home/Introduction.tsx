import Link from "next/link";

// Shadcn Components
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

// Icons
import { MdConnectWithoutContact } from "react-icons/md";


export default function Introduction() {
    return (
        <>
            <div className="w-full md:w-1/2 px-4 sm:px-6 md:px-0 md:pt-0 pt-3">
                <div>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight">
                        hi, I&apos;m Aldin A<span className="text-[#FF4F04]">riel</span> Pramudya
                    </h1>
                </div>

                {/* Tags */}
                <Separator className="my-3 sm:my-4" />

                <div className="flex flex-col sm:flex-row sm:h-5 sm:items-center gap-2 sm:gap-0 sm:space-x-4 text-xs sm:text-sm">
                    <p className="font-bold">Full Stack Web Developer</p>
                    <Separator orientation="vertical" className="hidden sm:block" />
                    <p className="font-bold">Front End Developer</p>
                </div>

                {/* Description */}
                <p className="pt-3 sm:pt-4 text-sm sm:text-base text-justify leading-relaxed">
                    I specialize in creating full-stack web solutions that combine powerful functionality with eye-catching design.
                    Whether it&apos;s a sleek landing page or dynamic web application I ensure every project is built to impress and perform.
                    In the same time, while technology evolves, I&apos;m constantly expanding my skill set where every project is an opportunity to push boundaries and refine my craft.
                </p>

                <div className="pt-4 sm:pt-5 flex flex-row gap-3">
                    <Link href="/contacts">
                        <Button
                            variant="outline"
                            className="rounded-xl hover:bg-gray-900 hover:text-white transition-colors text-sm sm:text-base px-4 py-2 sm:px-6 sm:py-3"
                        >
                            <MdConnectWithoutContact className="mr-2" />
                            Contact Me
                        </Button>
                    </Link>
                </div>
            </div>
        </>
    )
}