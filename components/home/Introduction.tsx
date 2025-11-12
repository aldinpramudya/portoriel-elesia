// Shadcn Components
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"

// Icons
import { MdConnectWithoutContact } from "react-icons/md";

export default function Introduction() {
    return (
        <>
            <div className="w-1/2">
                <div>
                    <h1 className="font-bold text-5xl">
                        hi, I&apos;m Aldin A<span className="text-(--main-color)">riel</span> Pramudya
                    </h1>
                </div>
                {/* Tags */}
                <Separator className="my-4" />
                <div className="flex h-5 items-center space-x-4 text-sm">
                    <p className="font-bold">Full Stack Web Developer</p>
                    <Separator orientation="vertical" />
                    <p className="font-bold">Front End Developer</p>
                </div>
                {/* Description */}
                <p className="pt-3 text-justify">
                    I specialize in creating full-stack web solutions that combine powerful functionality with eye-catching design.
                    Whether it&apos;s a sleek landing page or dynamic web application I ensure every project is built to impress and perform.
                    In the same time, while technology evolves, I&apos;m constantly expanding my skill set where every project is an opportunity to push boundaries and refine my craft.
                </p>
                <div className="pt-3 flex flex-row gap-3">
                    <Button variant="outline" className="rounded-xl hover:bg-gray-900 hover:text-white transition-colors"><MdConnectWithoutContact />Contact Me</Button>
                </div>
            </div>
        </>
    )
}