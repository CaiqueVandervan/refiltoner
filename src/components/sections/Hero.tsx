import BrandsHover from "@/components/BrandsHover"
import { Icon } from '@iconify/react'
import HeroBackground from "../HeroBackground"

export default function Hero() {

    return (
        <section className="relative h-[92vh] bg-[url('/fundoHero.png')] bg-cover bg-center">

            <div className="pt-60 pl-20 z-1 flex flex-col gap-16 w-2/4 items-center">
                <div className="flex flex-col">
                    <h1 className="text-[#33363B] text-[44px] font-bold">Soluções completas em impressão</h1>

                    <h2 className="text-[#8B1E23] text-[22px] font-bold text-center">Eficiência que mantém sua empresa em movimento</h2>
                </div>

                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-[24px] text-[#33363B] font-bold">Venda, locação e manutenção de impressoras, plotter e suprimentos</h2>
                    <div className="flex gap-10">
                        <a className="bg-[#8B1E23] p-4 text-white font-semibold rounded-xl hover:scale-105 duration-300 transition cursor-pointer shadow-md hover:shadow-xl flex items-center gap-2 group"
                            href="#nossosservicos">
                            Conheças nossos Serviços <Icon icon="grommet-icons:services" className="group-hover:rotate-180 transition duration-400" /></a>

                        <a href="https://google.com" target="_blank" className="underline flex items-center gap-1">Entre em Contato <Icon icon="mdi:message-arrow-right" /></a>
                    </div>
                </div>

                <div className="flex flex-col gap-4 " >
                    <h2 className="text-[24px] text-[#33363B] font-bold text-center">Trabalhamos com as principais marcas do mercado</h2>
                    <div className="flex items-center gap-10">
                        <BrandsHover image="/brotherBlack.svg" imageHover="/brother.svg" height={200} width={200} />
                        <BrandsHover image="/canonBlack.svg" imageHover="/canon.svg" height={180} width={180} />
                        <BrandsHover image="/hpBlack.svg" imageHover="/hp.svg" height={80} width={80} />
                        <BrandsHover image="/kyoceraBlack.svg" imageHover="/kyocera.svg" height={210} width={210} />
                        <BrandsHover image="/pantumBlack.svg" imageHover="/pantum.svg" height={160} width={160} />
                        <BrandsHover image="/xerox-lexmarkBlack.svg" imageHover="/xerox-lexmark.svg" height={260} width={260} className="pb-2" />
                    </div>
                </div>
            </div>

            <HeroBackground />



        </section>
    )
}