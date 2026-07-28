import BrandsHover from "@/components/BrandsHover"
import { Icon } from '@iconify/react'
import HeroBackground from "../HeroBackground"

export default function Hero() {

    return (
        <section className="relative h-[92vh] bg-[url('/fundoHero5.png')] bg-cover bg-center">

            <div className="pt-55 pl-20 z-1 flex flex-col gap-22 w-fit items-center">
                <div className="flex flex-col gap-10 w-fit">
                    <div>
                        <h1 className="text-[#33363B] text-[52px] font-bold">Soluções completas em impressão</h1>

                        <h2 className="text-[#8B1E23] text-[32px] font-bold text-center">Eficiência que mantém sua empresa em movimento</h2>
                    </div>
                </div>

                <div className=" flex flex-col gap-4 items-center w-fit">
                    <h2 className="text-[22px] text-[#33363B] font-bold">Venda, locação e manutenção de impressoras, plotter e suprimentos</h2>
                    <div className="flex gap-10">
                        <a className="bg-[#8B1E23] p-4 text-white font-semibold rounded-xl hover:scale-105 duration-300 transition cursor-pointer shadow-md hover:shadow-xl flex items-center gap-2">Conheças nossos Serviços <Icon icon="grommet-icons:services" /></a>

                        <a href="https://google.com" target="_blank" className="underline flex items-center gap-1">Entre em Contato <Icon icon="mdi:message-arrow-right" /></a>
                    </div>
                </div>
            </div>

            <HeroBackground />

            <div className="pt-20 pl-10 flex flex-col gap-5 w-fit items-center" >
                <h2 className="text-[22px] text-[#33363B] font-bold text-center">Trabalhamos com as principais marcas do mercado</h2>
                <div className="flex items-center gap-10">
                    <BrandsHover image="/brotherBlack.svg" imageHover="/brother.svg" height={120} width={120} />
                    <BrandsHover image="/canonBlack.svg" imageHover="/canon.svg" height={120} width={120} />
                    <BrandsHover image="/hpBlack.svg" imageHover="/hp.svg" height={50} width={50} />
                    <BrandsHover image="/kyoceraBlack.svg" imageHover="/kyocera.svg" height={130} width={130} />
                    <BrandsHover image="/pantumBlack.svg" imageHover="/pantum.svg" height={110} width={110} />
                    <BrandsHover image="/xerox-lexmarkBlack.svg" imageHover="/xerox-lexmark.svg" height={210} width={210} className="pb-2" />
                </div>
            </div>

        </section>
    )
}