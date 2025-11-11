// Shadcn Components
import { Separator } from "@/components/ui/separator";

// Components
import ActivityCard from "@/components/ActivityCard";

export default function Education() {
    return (
        <>
            <div>
                <p className="font-bold text-5xl capitalize text-[#FF4F04]">
                    education
                </p>
                <Separator className="my-4" />
                <ActivityCard title="Testing" time="Mar 2020 - April 2021" description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed viverra lorem in neque porta pharetra. Suspendisse ante lacus, ullamcorper sit amet efficitur finibus, malesuada id lectus. Maecenas vel euismod nulla. Morbi posuere facilisis bibendum. Integer eu maximus leo. Nulla venenatis leo ut iaculis luctus. Phasellus tellus lectus, lacinia ac ligula sit amet, placerat feugiat turpis. Quisque nec pulvinar arcu. Ut suscipit euismod odio, sit amet auctor nisl. Duis laoreet facilisis turpis, vitae semper odio pharetra ut. Proin nunc velit, accumsan eu mi non, feugiat feugiat sapien. Phasellus metus tellus, hendrerit sed varius sed, porta vitae mauris. Vivamus sit amet erat et sem lobortis rhoncus eget at diam.">
                    <ul className="list-disc">
                        <li>lotem ipsum</li>
                        <li>lotem ipsum</li>
                        <li>lotem ipsum</li>
                    </ul>
                </ActivityCard>
            </div>
        </>
    )
}