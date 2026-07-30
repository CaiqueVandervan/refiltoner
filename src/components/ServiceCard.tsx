import { Icon } from "@iconify/react";

interface ServiceCard {
    id: number
    img: string
    icon: string
    title: string
    subTitle: string
    checkTexts: string[]
}

interface ServiceCardProps {
    content: ServiceCard[]
}

export default function ServiceCard({ content }: ServiceCardProps) {
    return (
        <div className="flex gap-4 z-2">
            {content.map((c) => (
                <div key={c.id} className="relative bg-gray-100 rounded-xl w-md shadow-xl hover:scale-103 duration-300">
                    <div >
                        <img src={c.img} className="rounded-t-xl" />
                    </div>

                    <div className="absolute top-[43%] left-[45%] bg-[#8A8F96] rounded-full p-5">
                        <Icon icon={c.icon} color="white" fontSize={25} />
                    </div>

                    <div className="flex flex-col items-center gap-4 p-4 pt-10">
                        <h1 className="font-bold text-[#33363B] text-[20px]">{c.title}</h1>
                        <span className="h-0.5 bg-[#8B1E23] flex items-center justify-center w-[50%] rounded-md" />
                        <h2 className="px-2">{c.subTitle}</h2>
                    </div>

                    <div className="px-6 pb-4">
                        {c.checkTexts.map((t) => (
                            <div key={t} className="flex items-center gap-1">
                                <Icon icon="lets-icons:check-fill" color="#8B1E23" />
                                {t}
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </div>


    )
}