// Shadcn Components
import { Separator } from "@/components/ui/separator";

// Components
import ActivityCard from "@/components/ActivityCard";

// Constants
import { experienceData } from "@/constants";

export default function Experience() {
    return (
        <>
            <div>
                <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                    experiences & works related
                </p>
                <Separator className="my-4" />
                {/* Contents */}
                <div className="space-y-3 *:">
                    {experienceData.map((data) => (
                        <ActivityCard key={data.id} title={data.title} time={data.time} description={data.description}>
                            <ul className="list-disc list-inside pt-3">
                                {data.children.map((item, index) => (
                                    <li key={index} className="leading-relaxed">
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </ActivityCard>
                    ))}
                </div>
            </div>
        </>
    )
}