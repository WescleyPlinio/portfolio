import { useEffect, useState } from "react"

export default function Hero({ text, imgUrl }) {
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        setAnimate(true)
    }, []);

    return (
        <div className={`relative h-screen w-screen max-w-full border-gray-900/50`}>
            <div className="px-10 h-full max-w-full flex">
                <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                    
                    {/* Coluna Esquerda: Texto */}
                    <div className="my-auto">
                        <p className={`text-blue-300 shadow-blue-300 font-special-gothic text-2xl sm:text-9xl ${animate ? 'fade-in-up' : 'opacity-0'}`}>
                            {text}
                        </p>
                    </div>

                    {/* Coluna Direita: Imagem (Escondida no mobile) */}
                    {/* Adicionei 'hidden md:flex' aqui */}
                    <div className="my-auto hidden md:flex justify-end">
                        <img 
                            src={`/portfolio/imgs/${imgUrl}`} 
                            alt="Ilustração de um computador" 
                            className={`w-full max-w-md lg:max-w-lg object-contain ${animate ? 'fade-in-up' : 'opacity-0'}`}
                        />
                    </div>
                    
                </div>
            </div>
        </div>
    )
}