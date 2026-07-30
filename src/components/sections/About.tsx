import Contact from "./Contact";

export default function About() {
    return (
        <section id="sobre" className="relative bg-[url('/fundoAbout4.png')] bg-cover bg-center px-22 p-8">

            <h1 className="text-[#33363B] font-bold text-[20px] text-center">Sobre nossa empresa</h1>

            <div className="flex gap-10 pt-8 px-12">
                <div className="w-1/2">
                    <img src="fundoHero5.png" className="rounded-xl" />
                </div>

                <div className="w-1/2 flex flex-col gap-3 pr-50 font-medium">
                    <p>
                        Há anos, ajudamos empresas a manterem seus negócios em movimento.
                        A [Nome da Empresa] nasceu com o propósito de oferecer soluções completas em impressão, unindo qualidade, agilidade e atendimento próximo. Atuamos com venda, locação e manutenção de impressoras e plotters, além de uma linha completa de suprimentos e acessórios para atender às diferentes necessidades de cada cliente.
                    </p>
                    <p>
                        Ao longo da nossa trajetória, construímos nossa experiência com base em um compromisso simples: entender as necessidades de cada empresa e oferecer a solução mais adequada para garantir produtividade e tranquilidade no dia a dia.
                    </p>
                    <p>
                        Mais do que fornecer equipamentos, buscamos construir relações de confiança e parcerias duradouras, oferecendo suporte especializado e soluções que acompanham o crescimento de nossos clientes.
                    </p>
                </div>

            </div>

            <Contact />
        </section>
    )
}

