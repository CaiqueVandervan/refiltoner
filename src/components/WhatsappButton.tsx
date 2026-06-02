import {Icon} from "@iconify/react"

const WhatsappButton = () => {
    return (
        <a className="flex items-center justify-center fixed right-6 bottom-6 z-50 px-5 py-4 rounded-2xl bg-green-400 shadow-sm shadow-green-300 duration-300 hover:scale-105 hover:shadow-md"
            href="https://wa.me/5543991339418?text=MensagemPré-definida">
           <Icon icon="meteor-icons:whatsapp" className="h-7 w-7 text-white"/>
        </a>
    )
}
export default WhatsappButton