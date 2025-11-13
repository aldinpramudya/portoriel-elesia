import { ReactNode } from "react"

interface ActivityCardProps {
    title: string,
    time: string,
    place: string,
    description: string
    children?: ReactNode
}

export default function ActivityCard({
    title,
    time,
    place,
    description,
    children,
}: ActivityCardProps) {
    return (
        <>
            <div className="">
                <div className="flex md:flex-row flex-col md:justify-between md:items-center">
                    <div>
                        <p className="font-bold md:text-[30px] text-[17px]">
                            {title}
                        </p>
                        <p className="font-bold md:text-[20px] text-[15px] text-gray-500">
                            {place}
                        </p>
                    </div>
                    <p className="font-semibold md:text-[20px] text-[13px]">
                        {time}
                    </p>
                </div>
                <p className="text-justify md:text-[15px] text-[13px] pt-2">
                    {description}
                </p>
                <div className="md:text-[15px] text-[13px]">
                    {children}
                </div>
            </div>
        </>
    )
}