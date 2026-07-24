const Hero = () => {
    return (
        <section className="relative h-[92vh] bg-[url('/fundoHero5.png')] bg-cover bg-center">
            <div className="pt-70 pl-50 z-1 flex flex-col gap-12">
                <div className="flex flex-col gap-10">
                    <div>
                        <h1 className="text-[#33363B] text-5xl font-bold">Soluções completas em impressão</h1>

                        <h2 className="text-[#8B1E23] text-4xl font-bold">Eficiência que mantém sua empresa em movimento.</h2>
                    </div>
                </div>

                <div className=" flex flex-col gap-3 items-start">
                    <h2 className="text-lg text-[#33363B] font-bold">Venda, locação e manutenção de impressoras, plotter e suprimentos</h2>

                    <a className="bg-[#8B1E23] p-3 text-white font-semibold rounded-lg hover:scale-105 transition cursor-pointer shadow-md hover:shadow-xl">Conheças nossas Soluções</a>
                </div>

                <div>
                    <h2 className="text-lg text-[#33363B] font-bold">Trabalhamos com as principais marcas do mercado</h2>
                    <div className="flex items-center gap-16 pt-4">
                        {/* canon, brother, hp, lexmark, kyocera, pantum, xerox */}

                        <img src="/brother.svg" height={100} width={100} />
                        <img src="/canon.svg" height={100} width={100} />
                        <img src="/kyocera.svg" height={100} width={100} />
                        <img src="/pantum.svg" height={100} width={100} />
                        <img src="/hp.svg" height={50} width={50} />
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Hero