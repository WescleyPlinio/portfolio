import { useEffect, useState } from "react"

export default function Hero({element}) {
    const [animate, setAnimate] = useState(false);

    useEffect(()=>{
        setAnimate(true)
    }, []);

    return (
        <div className={`h-screen w-screen max-w-full border-b-2 border-gray-900/50 ${animate ? 'fade-in-up':'opacity-0' }`}>
            {element}
            <div className="p-7 h-full max-w-full flex">
                    <p className={`text-purple-400 text-center text-6xl m-auto`}>
                        Seja Bem vindo ao meu portfólio!
                    </p>
            </div>
        </div>
    )
}
