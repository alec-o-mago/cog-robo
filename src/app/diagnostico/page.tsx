'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'


export default function Diagnostico() {
    const router = useRouter()

    const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(false);
    const [fade3, setFade3] = useState(false);

    useEffect(()=>{
        const timer1 = setTimeout(() => {
            setFade1(true)
        }, 200);
        const timer2 = setTimeout(() => {
            setFade2(true)
        }, 1400);
        const timer3 = setTimeout(() => {
            setFade3(true)
        }, 2600);
        return () => {
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
        }
        
    },[]);

    const handleVoltar = () => {
        router.push("/cadastro")
    };

    const handleSair = () => {
        router.push("/")
    };

    const handleProximo = () => {   
        router.push("/questionario")
    };


  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#01073F] overflow-y-auto">
      <div className="w-[1728px] h-[1068px] relative bg-[#01073F]">
    <div className={`w-[892px] h-[154px] left-[477px] top-[141px] absolute transition-all duration-100 ${fade1 ? "opacity-100" : "opacity-0"} bg-gradient-to-r from-[#ffffff33] via-transparent`}>
        <div className="w-[892px] h-[154px] left-0 top-0 absolute rounded-[5px] border border-sky-200 blur-[1px]" />
        <div className="w-[794px] h-[89px] left-[64.29px] top-[44px] absolute text-white text-[22px] font-normal font-['Roboto_Mono'] ">Olá! Sou o Robô Cognitivo e vamos falar sobre a maturidade analítica da sua empresa. :]</div>
    </div>
    <div className={`w-[892px] h-[177px] left-[477px] top-[325px] absolute transition-all duration-900 ${fade2 ? "opacity-100" : "opacity-0"} bg-gradient-to-r from-[#ffffff33] via-transparent`}>
        <div className="w-[892px] h-[177px] left-0 top-0 absolute rounded-[5px] border border-sky-200 blur-[1px]"/>
        <div className="w-[794px] h-[111px] left-[49px] top-[40px] absolute text-white text-[22px] font-normal font-['Roboto_Mono']">Para esta entrevista vamos passar por diversos temas, como por exemplo: Cultura, tomada de decisão, papéis e responsabilidades e liderança.</div>
    </div>
    <div className={`w-[892px] h-[135px] left-[477px] top-[532px] absolute transition-all duration-900 ${fade3 ? "opacity-100" : "opacity-0"} bg-gradient-to-r from-[#ffffff33] via-transparent`}>
        <div className="w-[892px] h-[135px] left-0 top-0 absolute rounded-[5px] border border-sky-200 blur-[1px]"/>
        <div className="w-[794px] h-[85px] left-[49px] top-[25px] absolute text-white text-[22px] font-normal font-['Roboto_Mono']">Vamos começar com uma primeira pergunta para entender um pouco mais sobre você! </div>
    </div>
    <div className="left-[366px] top-[132px] absolute text-white text-[60px] font-normal">🤖</div>
    <button className="w-[394px] left-[975px] top-[707px] absolute justify-start items-start gap-4 inline-flex" onClick={handleProximo}>
        <div className="grow shrink basis-0 h-16 px-[30px] py-5 bg-white rounded-[900px] justify-center items-center gap-[15px] flex">
            <div className="text-blue-600 text-base font-bold font-['Roboto_Mono'] leading-normal">Próximo &gt;&gt;&gt;</div>
        </div>
    </button>
    <button className="w-[396px] left-[460px] top-[707px] absolute border border-black justify-start items-start gap-4 inline-flex border-0" onClick={handleVoltar}>
        <div className="grow shrink basis-0 h-16 px-[30px] py-5 rounded-[900px] border border-white border-opacity-50 justify-center items-center gap-[15px] flex">
            <div className="text-white text-opacity-50 text-base font-bold font-['Roboto_Mono'] leading-normal">&lt;&lt;&lt; Voltar</div>
        </div>
    </button>
    <div className="w-[1664px] h-11 left-[32px] top-[32px] absolute">
        <img className="w-[136px] h-[35px] left-0 top-[5px] absolute" src="/images/cognitivo.png" />
        <button className="w-[170px] h-11 left-[1494px] top-0 absolute border border-black justify-start items-start gap-4 inline-flex" onClick={handleSair}>
            <a href='/' className="grow shrink basis-0 self-stretch px-[30px] py-5 rounded-[900px] border border-white justify-center items-center gap-[15px] flex">
                <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Sair</div>
            </a>
        </button>
        <div className="w-[600px] left-[540px] top-[8px] absolute text-center text-white text-[23px] font-bold font-['Space_Grotesk']">Diagnóstico de Maturidade Analítica</div>
    </div>
</div>
    </main>
    
  )
}
