import { Icon } from "@iconify/react";

interface ServiceCard {
    id: number
    img: string
    title: string
    subTitle: string
    checkTexts: string[]
}

interface ServiceCardProps {
    content: ServiceCard[]
}

export default function ServiceCard({ content }: ServiceCardProps) {
    return (
        <div className="flex gap-2">
            {content.map((c) => (
                <div key={c.id} className="bg-gray-100 rounded-xl p-4 w-md">
                    <div className="h-20">
                        <img src={c.img} />
                    </div>

                    <div className="flex flex-col gap-4">
                        <h1 className="text-center font-bold text-[#33363B] text-[20px]">{c.title}</h1>
                        <h2 className="px-2">{c.subTitle}</h2>

                        {c.checkTexts.map((t) => (
                            <div key={t} className="flex items-center">
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