export default function NavBar() {

    interface NavLinks {
        label: string
        href: string
    }

    const navLinks: NavLinks[] = [
        { label: "Nossos Serviços", href: "#nossosservicos" },
        { label: "Sobre", href: "#sobre" },
        { label: "Contato", href: "#contato" }
    ]

    return (
        <nav>
            <header className="fixed inset-x-0 bg-white shadow-lg z-20 flex justify-between items-center px-20 py-4">
                <div className="absolute bg-[url(/fundoNav.png)] inset-0 z-0 bg-cover bg-center" />

                <div className="z-10 pl-42 pb-2">
                    <a href="#">
                        <img src="/logo.svg" height={240} width={240} />
                    </a>
                </div>


                <div className="flex gap-14 z-10 pr-92 text-[18px]">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="relative group font-semibold hover:scale-104 duration-200 hover:text-[#8B1E23]">

                            <span className="opacity-60 ">{link.label}</span>

                            <span className="absolute h-1 bg-[#8B1E23] w-full left-0 top-full mt-2 scale-x-0 group-hover:scale-x-100 transition duration-300 origin-left rounded-xl" />
                        </a>
                    ))}
                </div>
            </header>
        </nav>
    )
}