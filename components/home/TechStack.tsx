// Shadcn Components
import { Separator } from "@/components/ui/separator";
// Components
import TechStackCard from "@/components/TechStackCard";

export default function TechStack() {
    return (
        <>
            <div>
                <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                    tech stack
                </p>
                <Separator className="my-4" />
                <TechStackCard>
                    tes
                </TechStackCard>
            </div>
        </>
    )
}