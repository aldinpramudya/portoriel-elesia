// Shadcn Components
import { Separator } from "@/components/ui/separator";
// Components
import TechStackCard from "@/components/TechStackCard";
// Constants
import { techStackData } from "@/constants";

export default function TechStack() {
    return (
        <>
            <div>
                <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                    tech stack
                </p>
                <Separator className="my-4" />
                <div className="space-y-3">
                    {techStackData.map((data) => (
                        <TechStackCard key={data.id}>
                            <p>
                                {data.text}
                            </p>
                        </TechStackCard>
                    ))}
                </div>
            </div>
        </>
    )
}