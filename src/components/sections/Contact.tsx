"use client"

import { Icon } from "@iconify/react"
import axios from "axios"

export default function Contact() {

    const handleSubmitEmail = async (event: React.SyntheticEvent<HTMLFormElement, SubmitEvent>) => {
        event.preventDefault()
        try {
            const response = await axios.post("/api/sendEmail")
            return response

        } catch (error) {
            return console.warn(error)
        }
    }

    const inputSelectClasses = "bg-white border-2 border-[#8B1E23] w-100 rounded-md px-3 py-2 outline-none transition placeholder:text-zinc-400 focus:ring-2 focus:ring-[#8B1E23]/20"

    return (
        <section id="contato" className="flex flex-col items-center justify-center p-6 mt-10 bg-gray-200 w-fit mx-auto rounded-xl shadow-xl">

            <div className="flex flex-col gap-4 items-center">
                <h1 className="text-[#33363B] font-bold text-[20px] text-center">Contato</h1>

                <h2 className="font-medium">Está precisando de alguma solução em impressões?</h2>

                <p className="font-medium">Entre em contato conosco e descubra a melhor solução para as necessidades da sua empresa. Estamos prontos para ajudar no que precisar.</p>
            </div>

            <form onSubmit={handleSubmitEmail} className="flex flex-col gap-8 pt-8">
                <div className="grid grid-cols-2 gap-6">
                    <input type="text" placeholder="Digite seu nome completo" required className={inputSelectClasses} />
                    <input type="text" placeholder="Digite o nome da sua empresa" required className={inputSelectClasses} />
                    <input type="text" placeholder="Seu telefone" required className={inputSelectClasses} />
                    <select required className={inputSelectClasses}>
                        <option value="" selected disabled>Como podemos ajudar?</option>
                        <option value="">Venda</option>
                        <option value="">Locação</option>
                        <option value="">Manutenção</option>
                        <option value="">Suprimentos</option>
                        <option value="">Outro</option>
                    </select>
                </div>

                <textarea placeholder="Conte brevemente do que precisa..." rows={3} required className="bg-white border-2 border-[#8B1E23] rounded-md px-3 py-2 outline-none transition placeholder:text-zinc-400 focus:ring-2 focus:ring-[#8B1E23]/20 w-100 self-center resize-none" />

                <div className="flex gap-4 justify-between">

                    <div className="flex flex-col gap-4">
                        <label htmlFor="termos" className="flex items-center gap-2">
                            <input type="checkbox" id="termos" required className="h-4 w-4 accent-[#8B1E23] rounded-xl cursor-pointer" />
                            <span className="text-[15px] text-zinc-700">
                                Concordo com os {""}
                                <a href="/termosDeUso" className="text-[#8B1E23] hover:underline font-medium">Termos de uso</a>
                            </span>
                        </label>

                        <label htmlFor="politica" className="flex items-center gap-2">
                            <input type="checkbox" id="politica" required className="h-4 w-4 accent-[#8B1E23] rounded-xl cursor-pointer" />
                            <span className="text-[15px] text-zinc-700">
                                Concordo com a {""}
                                <a href="/politica" className="text-[#8B1E23] hover:underline font-medium">Política de privacidade</a>
                            </span>
                        </label>

                    </div>

                    <div>
                        <button type="submit" className="self-end bg-[#8B1E23] text-white p-4 font-semibold hover:scale-105 duration-300 transition cursor-pointer shadow-md hover:shadow-xl flex items-center gap-2 rounded-xl">Enviar <Icon icon="iconamoon:send-fill" color="white" /></button>
                    </div>

                </div>

            </form>

        </section>
    )
}

