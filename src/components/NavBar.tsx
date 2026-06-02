const NavBar = () => {

    interface NavLinks {
        label: string
        href: string
    }

    const navLinks: NavLinks[] = [
        { label: "Quem somos", href: "#quemsomos" },
        { label: "Como trabalhamos", href: "#comotrabalhamos" },
        { label: "Quem atendemos", href: "#quematendemos" },
        { label: "Marcas", href: "#marcas" },
        { label: "Contato", href: "#contato" }
    ]

    return (
        <nav>
            <header className="bg-white shadow-lg z-50 flex justify-between items-center px-20 py-4">
                <a>
                    <img src="/logo.svg" />
                </a>

                <div className="flex gap-7">
                    {navLinks.map(link => (
                        <a key={link.label} href={link.href} >
                            {link.label}
                        </a>
                    ))}
                </div>
            </header>
        </nav>
    )
}

export default NavBar