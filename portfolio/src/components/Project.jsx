export default function Project ({title, text, url}) {
    return (
        <div className="border border-purple-400 rounded-2xl">
            <div className="w-full">
                <img src={`/portfolio/imgs/${url}`} className="rounded rounded-t-2xl" alt="Projeto" />
            </div>
            <div className="p-5">
                <h1 className="text-purple-400">{title}</h1>
                <p className="text-white">{text}</p>
            </div>
        </div>
    )
}