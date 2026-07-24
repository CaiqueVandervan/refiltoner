const NavBar = () => {

    interface NavLinks {
        label: string
        href: string
    }

    const navLinks: NavLinks[] = [
        { label: "Como trabalhamos", href: "#comotrabalhamos" },
        { label: "Quem atendemos", href: "#quematendemos" },
        { label: "Marcas", href: "#marcas" },
        { label: "Contato", href: "#contato" }
    ]

    return (
        <nav>
            <header className="fixed inset-x-0 bg-white shadow-lg z-20 flex justify-between items-center px-20 py-4">
                <div className="absolute bg-[url(/fundoNav4.png)] inset-0 z-0 bg-cover bg-center" />

                <div className="z-10 pl-42 pb-2">
                    <a href="#">
                        <img src="/logo.svg" height={240} width={240} />
                    </a>
                </div>


                <div className="flex gap-7 z-10 pr-88 text-[17px]">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} className="hover:scale-105  hover:text-[#8B1E23] text-[16px] text-gray-800 font-semibold opacity-70 transition">
                            {link.label}
                        </a>
                    ))}
                </div>
            </header>
        </nav>
    )
}

export default NavBar