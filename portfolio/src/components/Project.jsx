import FadeIn from "./FadeIn"

export default function Project({ title, text, imgUrl, projectUrl }) {
    return (
        <FadeIn>
            <div className="border border-purple-400 rounded-2xl">
                <div className="w-full">
                    <img src={`/portfolio/imgs/${imgUrl}`} className="rounded-t-2xl h-70 w-full object-cover object-center" alt="Projeto" />
                </div>
                <div className="p-5">
                    <h1 className="text-purple-400 font-bold text-lg">{title}</h1>
                    <p className="text-white mb-3">{text}</p>
                    <a target="blank" href={`https://${projectUrl}`} className="text-white flex justify-end"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-6">
                        <path fillRule="evenodd" d="M19.902 4.098a3.75 3.75 0 0 0-5.304 0l-4.5 4.5a3.75 3.75 0 0 0 1.035 6.037.75.75 0 0 1-.646 1.353 5.25 5.25 0 0 1-1.449-8.45l4.5-4.5a5.25 5.25 0 1 1 7.424 7.424l-1.757 1.757a.75.75 0 1 1-1.06-1.06l1.757-1.757a3.75 3.75 0 0 0 0-5.304Zm-7.389 4.267a.75.75 0 0 1 1-.353 5.25 5.25 0 0 1 1.449 8.45l-4.5 4.5a5.25 5.25 0 1 1-7.424-7.424l1.757-1.757a.75.75 0 1 1 1.06 1.06l-1.757 1.757a3.75 3.75 0 1 0 5.304 5.304l4.5-4.5a3.75 3.75 0 0 0-1.035-6.037.75.75 0 0 1-.354-1Z" clipRule="evenodd" />
                    </svg>
                    </a>
                </div>
            </div>
        </FadeIn>
    )
}