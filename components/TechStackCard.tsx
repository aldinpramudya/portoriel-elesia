import { ReactNode } from "react"

interface TechCardProps {
    children?: ReactNode
}

export default function TechStackCard({
    children = "",
}: TechCardProps) {
    return (
        <>
            <div className="rounded-md border-2 border-dashed p-4">
                {children}
            </div>
        </>
    )
}