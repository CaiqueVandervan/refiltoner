interface BrandsHoverProps {
    image: string,
    imageHover: string
    height: number,
    width: number,
    className?: string
}

export default function BrandsHover({ image, imageHover, height, width, className }: BrandsHoverProps) {
    return (
        <div className="group relative">
            <img src={image} height={height} width={width} className={`group-hover:opacity-0 opacity-100 transition-opacity duration-300 ${className}`} />
            <img src={imageHover} height={height} width={width} className="absolute inset-0 group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        </div>
    )
}