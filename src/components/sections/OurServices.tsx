import ServiceCard from '../ServiceCard'

export default function OurServices() {

    const content = [
        {
            id: 1,
            img: "/fundoHero.png",
            icon: "material-symbols:sell",
            title: "Venda de Equipamentos",
            subTitle: "Impressoras e plotters das principais marcas com garantia e suporte especializado",
            checkTexts: ["Lorem ipsum dol sit amet.1", "Lorem ipsum dolorit amet.1", "Lorem ipsum dolor s amet.1"]
        },
        {
            id: 2,
            img: "/fundoHero.png",
            icon: "solar:calendar-bold",
            title: "Locação de impressoras e plotters",
            subTitle: "Locação flexível e econômica, com manutenção inclusa e reposição de peças",
            checkTexts: ["Lorem ips dolor sit amet. 2", "Loripsum dolor sit amet.2", "Lorem ipum dolor it amet.2"]
        },
        {
            id: 3,
            img: "/fundoHero.png",
            icon: "wpf:maintenance",
            title: "Manutenção Especializada",
            subTitle: "Suporte técnico rápido e eficiente para garantir o máximo desempenho dos seus equipamentos",
            checkTexts: ["Lorem ipsm dolor st am. 3", "Lorem ipsum olo sit amet.3", "Lorem ips dolor st amet.3"]
        },
        {
            id: 4,
            img: "/fundoHero.png",
            icon: "f7:drop-fill",
            title: "Suprimentos de qualidade",
            subTitle: "Toners, tintas e peças de reposição com qualidade garantida e o melhor  custo-benefício",
            checkTexts: ["Loripum dolor sit amet. 4", "Lorpsum dolor sit amet.4", "Lorem ipsum dolor it e.4"]
        }
    ]

    return (
        <section id="nossosservicos" className="relative flex flex-col items-center justify-center gap-4 p-8 bg-[#5F0D11]">
            <h1 className="text-white font-bold text-[20px]">Serviços especializados em impressão, com qualidade, agilidade e o suporte que sua empresa precisa</h1>
            {/* bg-[linear-gradient(90deg,#C9D0D9_0%,#E5E8ED_25%,#FFFFFF_50%,#E5E8ED_75%,#C9D0D9_100%)] */}
            <ServiceCard content={content} />

            {/* <div className="absolute h-full w-full bg-[#8B1E23]/[0.099] rounded-full blur-2xl z-1" /> */}

        </section>
    )
}