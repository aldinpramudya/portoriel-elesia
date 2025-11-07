import Image from "next/image"

export default function CardProfile() {
    return (
        <>
            <Image
                src="/profile.jpg"
                alt="Profile Picture"
                width={300}
                height={300}
                className="rounded-2xl"
            />
        </>
    )
}