import Image from "next/image"

export default function CardProfile() {
    return (
        <>
            <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
                <Image
                    src="/profile.jpg"
                    alt="Profile Picture"
                    fill
                    className="rounded-2xl object-cover"
                    priority
                    sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                />
            </div>
        </>
    )
}