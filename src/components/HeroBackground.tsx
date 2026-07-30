export default function HeroBackground() {
    return (
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute inset-y-0 left-0 w-full overflow-hidden">

                {/*Linhas verticais suaves */}
                <div>
                    <div className="absolute left-[15%] h-[160%] w-px bg-[#33363B]/4" />
                    <div className="absolute left-[28%] h-[160%] w-px bg-[#33363B]/[0.035]" />
                    <div className="absolute left-[48%] h-[160%] w-px bg-[#33363B]/5" />
                    <div className="absolute left-[57%] h-[160%] w-px bg-[#33363B]/[0.035]" />
                </div>

                {/* Faixas diagonais largas e finas */}
                <div className="absolute left-[-15%] top-[60%] h-[150%] w-px rotate-45 bg-[#33363B]/4.5" />
                <div className="absolute left-[10%] top-[-30%] h-[180%] w-0.5 rotate-135 bg-[#33363B]/4.5" />
                <div className="absolute left-[10%] top-[60%] h-[150%] w-px rotate-45 bg-[#33363B]/4.5" />
                <div className="absolute left-[30%] top-[-30%] h-[180%] w-px rotate-135 bg-[#33363B]/[0.035]" />
                <div className="absolute left-[30%] top-[60%] h-[150%] w-px rotate-45 bg-[#33363B]/4.5" />
                <div className="absolute left-[45%] top-[-30%] h-[180%] w-20 rotate-135 bg-[#33363B]/1.5" />
                <div className="absolute left-[50%] top-[-30%] h-full w-0.5 rotate-135 bg-[#33363B]/4.5" />
                <div className="absolute left-[80%] top-[-30%] h-[180%] w-20 rotate-135 bg-[#33363B]/1.5" />

            </div>
        </div>
    )
}