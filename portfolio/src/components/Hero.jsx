export default function Hero({element}) {
    return (
        <div className="h-screen w-screen max-w-full">
            {element}
            <div className="p-7 h-full max-w-full flex">
                    <p className="text-purple-400 text-center text-5xl m-auto">
                        Seja Bem vindo ao meu portfólio!
                    </p>
            </div>
        </div>
    )
}
