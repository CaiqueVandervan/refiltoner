import ServiceCard from '../ServiceCard'

export default function OurServices() {

    const content = [
        {
            id: 1,
            img: "",
            title: "Venda de Equipamentos",
            subTitle: "Impressoras e plotters das principais marcas com garantia e suporte especializado",
            checkTexts: ["Card 1", "Caique1", "Teste1"]
        },
        {
            id: 2,
            img: "",
            title: "Locação de impressoras e plotters",
            subTitle: "Locação flexível e econômica, com manutenção inclusa e reposição de peças",
            checkTexts: ["Card 2", "Caique2", "Teste2"]
        },
        {
            id: 3,
            img: "",
            title: "Manutenção Especializada",
            subTitle: "Suporte técnico rápido e eficiente para garantir o máximo desempenho dos seus equipamentos",
            checkTexts: ["Card 3", "Caique3", "Teste3"]
        },
        {
            id: 4,
            img: "",
            title: "Suprimentos de qualidade",
            subTitle: "Toners, tintas e peças de reposição com qualidade garantida e o melhor  custo-benefício",
            checkTexts: ["Card 4", "Caique4", "Teste4"]
        }
    ]

    return (
        <section id="nossosservicos" className="flex flex-col items-center justify-center gap-4 p-8">
            <h1 className="text-[#33363B] font-bold text-[18px]">Serviços especializados em impressão, com qualidade, agilidade e o suporte que sua empresa precisa</h1>

            <ServiceCard content={content} />

        </section>
    )
}