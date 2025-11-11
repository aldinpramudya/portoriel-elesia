import { ReactNode } from "react"

interface ActivityCardProps {
    title: string,
    time: string,
    description: string
    children?: ReactNode
}

export default function ActivityCard({
    title,
    time,
    description,
    children,
}: ActivityCardProps) {
    return (
        <>
            <div className="">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-bold text-[30px]">
                        {title}
                    </p>
                    <p className="font-semibold">
                        {time}
                    </p>
                </div>
                <p className="text-justify">
                    {description}
                </p>
                <div className="">
                    {children}
                </div>
            </div>
        </>
    )
}