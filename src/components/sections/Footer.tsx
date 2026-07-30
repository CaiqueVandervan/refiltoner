import { Icon } from "@iconify/react";

export default function Footer() {
    return (
        <section className="flex items-center justify-center p-8 bg-[#5F0D11]">
            <div className="w-1/2 grid justify-center text-gray-400">
                <h2 className="text-white font-medium">CONTATO</h2>
                <p className="flex items-center gap-1"><Icon icon="ic:baseline-place" color="white" />Endereço</p>
                <p className="flex items-center gap-1"><Icon icon="mingcute:time-line" color="white" />Dias e horários</p>
                <p className="flex items-center gap-1"><Icon icon="ic:round-phone" color="white" />Telefone</p>
            </div>

            <div className="w-1/2 grid justify-center text-gray-400">
                <h2 className="text-white font-medium">REDES SOCIAIS</h2>
                <p className="flex items-center gap-1"><Icon icon="mdi:instagram" color="white" />Instagram</p>
                <p className="flex items-center gap-1"><Icon icon="mdi:linkedin" color="white" />Linkedin</p>
                <p className="flex items-center gap-1"><Icon icon="ic:baseline-facebook" color="white" />Facebook</p>
            </div>
        </section>
    )
}

