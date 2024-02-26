'use client'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import axios from "axios";
import Image from 'next/image'

export default function Questionario() {
    const BASE_URL = "https://homolog-cog-diagnostic-robot-f875ef890e1c.herokuapp.com/api/v1/";
    const TOKEN = "b93335d2be7fd0c7a4032ac0aeef944d25a4861e";
    const router = useRouter()

    const [questoes, setQuestoes] = useState([])
    const [qtdQuestoes, setQtdQuestoes] = useState(0)
    const [questaoAtual, setQuestaoAtual] = useState(0)
    const [questaoSelecionada, setQuestaoSelecionada] = useState(-1)
    //fade effects
    const [fade0, setFade0] = useState(false);
    const [fade1, setFade1] = useState(false);
    const [fade2, setFade2] = useState(false);
    const [fade3, setFade3] = useState(false);
    const [fade4, setFade4] = useState(false);
    const [fade5, setFade5] = useState(false);

    useEffect(() => {
        axios.get(BASE_URL+"questions/" , {headers: {Authorization: `Token ${TOKEN}`}})
          .then( (response) => {
            //console.log("resposta axios:",response.data)
            setQuestoes(response.data.results)
            setQtdQuestoes(response.data.count)
          })
          .catch(()=>(
            console.log("catch()"))
          )
        animateFadeIn()
    }, []);

    const animateFadeIn = () =>{
        setFade0(false)
        setFade1(false)
        setFade2(false)
        setFade3(false)
        setFade4(false)
        setFade5(false)
        const timer0 = setTimeout(() => { setFade0(true) }, 200);
        const timer1 = setTimeout(() => { setFade1(true) }, 500);
        const timer2 = setTimeout(() => { setFade2(true) }, 1000);
        const timer3 = setTimeout(() => { setFade3(true) }, 1500);
        const timer4 = setTimeout(() => { setFade4(true) }, 2000);
        const timer5 = setTimeout(() => { setFade5(true) }, 2500);
        return () => {
            clearTimeout(timer0);
            clearTimeout(timer1);
            clearTimeout(timer2);
            clearTimeout(timer3);
            clearTimeout(timer4);
            clearTimeout(timer5);
        }
    }

    const handleSair = () => {
        router.push("/")
    };

    const handleVoltar = () => {
        if (questaoAtual==0){
            router.push("/diagnostico")
        }else{
            animateFadeIn()
            setQuestaoAtual(questaoAtual-1)
            setQuestaoSelecionada(-1)
        }
    };

    const handleProximo = () => {   
        //axios post resposta
        if(questaoSelecionada!=-1){
            animateFadeIn()
            if (questaoAtual +1 < qtdQuestoes){
                setQuestaoAtual(questaoAtual+1)
                setQuestaoSelecionada(-1)
            } else {
                router.push("/relatorio")
            }
        }
    };

    const handleSelectQuestao = (q:number) =>{
        console.log("q: ",q)
        setQuestaoSelecionada(q)
    };

  return (
    <>
    
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#01073F] overflow-y-auto">
    { questoes && questoes.map((q:any, index) => ( (index == questaoAtual) &&
      <div key={q.id? q.id :"id"} className="w-[1728px] h-[1068px] relative bg-[#01073F]">
        
    <div className={`w-[910px] h-[120px] left-[461.79px] top-[141px] absolute p-[10px] transition-all duration-100  ${fade0 ? "opacity-100" : "opacity-0"}`}>
        <div className="w-[910px] h-[190px] left-0 top-0 absolute bg-[#01073F] rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex bg-gradient-to-r from-[#ffffff33] via-transparent" />
        <div className="h-[4px] w-[890px] bg-neutral-200 dark:bg-neutral-600 absolute">
          <div className={`h-full bg-white absolute`} style={{ width: ((index+1)/qtdQuestoes*890)  }}></div>
        </div>
        <div className="w-[794px] left-[24px] top-[20px] absolute ">
            <span className="text-white text-[20px] font-normal font-['Roboto_Mono'] " >{q.description/*questoes[questaoAtual]? questoes[questaoAtual]?.description : ""*/}</span><br/>
        </div>
        
    </div>
    <div className="left-[366px] top-[132px] absolute text-white text-[60px] font-normal">🤖</div>
    <div className="h-[434px] left-[462px] top-[375px] absolute">
        
        <button className={`w-[905px] h-[74px] p-4 left-0 top-0 absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ${(questaoSelecionada==0) ? "bg-[#152BF5]" : "bg-[#020522]"} transition-all duration-500 ${fade1 ? "opacity-100" : "opacity-0"}`} onClick={() => handleSelectQuestao(0)}>
            <div className={`text-2xl font-bold font-['Space_Grotesk'] text-white`}>A -</div>
            <div className={`grow shrink basis-0  text-base text-left font-bold font-['Roboto_Mono'] text-white`}>{q.alternatives[0].description/*questoes[questaoAtual] ? questoes[questaoAtual]?.alternatives[0] :  ""*/}</div>
        </button>
        <button className={`w-[905px] h-[74px] p-4 left-0 top-[90px] absolute  rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ${(questaoSelecionada==1) ? "bg-[#152BF5]" : "bg-[#020522]"} transition-all duration-500 ${fade2 ? "opacity-100" : "opacity-0"}`} onClick={() => handleSelectQuestao(1)}>
            <div className={`text-2xl font-bold font-['Space_Grotesk'] text-white`}>B -</div>
            <div className={`grow shrink basis-0 text-base text-left font-bold font-['Roboto_Mono'] text-white`}>{q.alternatives[1].description/*questoes[questaoAtual] ? questoes[questaoAtual]?.alternatives[0] : ""*/}</div>
        </button>
        <button className={`w-[905px] h-[74px] p-4 left-0 top-[180px] absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ${(questaoSelecionada==2) ? "bg-[#152BF5]" : "bg-[#020522]"} transition-all duration-500 ${fade3 ? "opacity-100" : "opacity-0"}`} onClick={() => handleSelectQuestao(2)}>
            <div className={`text-2xl font-bold font-['Space_Grotesk'] text-white`}>C -</div>
            <div className={`grow shrink basis-0 text-base text-left font-bold font-['Roboto_Mono'] text-white`}>{q.alternatives[2].description/*questoes[questaoAtual] ? questoes[questaoAtual].alternatives[2] :  ""*/}</div>
        </button>
        <button className={`w-[905px] h-[74px] p-4 left-0 top-[270px] absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ${(questaoSelecionada==3) ? "bg-[#152BF5]" : "bg-[#020522]"} transition-all duration-500 ${fade4 ? "opacity-100" : "opacity-0"}`} onClick={() => handleSelectQuestao(3)}>
            <div className={`text-2xl font-bold font-['Space_Grotesk'] text-white`}>D -</div>
            <div className={`grow shrink basis-0 text-base text-left font-bold font-['Roboto_Mono']  text-white`}>{q.alternatives[3].description/*questoes[questaoAtual] ? questoes[questaoAtual].alternatives[3] : ""*/}</div>
        </button>
        <button className={`w-[905px] h-[74px] p-4 left-0 top-[360px] absolute rounded-[5px] border border-sky-100 border-opacity-30 justify-center items-center gap-2 inline-flex ${(questaoSelecionada==4) ? "bg-[#152BF5]" : "bg-[#020522]"} transition-all duration-500 ${fade5 ? "opacity-100" : "opacity-0"}`} onClick={() => handleSelectQuestao(4)}>
            <div className={`text-2xl font-bold font-['Space_Grotesk'] text-white`}>E -</div>
            <div className={`grow shrink basis-0 text-base text-left font-bold font-['Roboto_Mono']  text-white`}>{q.alternatives[4].description/*questoes[questaoAtual] ? questoes[questaoAtual].alternatives[4] : ""*/}</div>
        </button>
    </div>
    <div className="w-[1664px] h-11 left-[32px] top-[32px] absolute">
        <img className="w-[136px] h-[35px] left-0 top-[5px] absolute" src="/images/cognitivo.png" />
        <button className="w-[170px] h-11 left-[1494px] top-0 absolute border border-black justify-start items-start gap-4 inline-flex" onClick={handleSair}>
            <div className="grow shrink basis-0 self-stretch px-[30px] py-5 rounded-[900px] border border-white justify-center items-center gap-[15px] flex">
                <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Sair</div>  
            </div>
        </button>
        <div className="w-[600px] left-[540px] top-[8px] absolute text-center text-white text-[23px] font-bold font-['Space_Grotesk']">Diagnóstico de Maturidade Analítica</div>
    </div>
    <button className={`w-[394px] left-[975px] top-[841px] absolute justify-start items-start gap-4 inline-flex ${(questaoSelecionada==-1) ? "opacity-20" : ""}`} onClick={handleProximo}>
        <div className="grow shrink basis-0 h-16 px-[30px] py-5 bg-white rounded-[900px] justify-center items-center gap-[15px] flex">
            <div className="text-[#205BF1] text-base font-bold font-['Roboto_Mono'] leading-normal">Próximo &gt;&gt;&gt;</div>
        </div>
    </button>
    <button className="w-[396px] left-[460px] top-[841px] absolute border border-black justify-start items-start gap-4 inline-flex border-0" onClick={handleVoltar}>
        <div className="grow shrink basis-0 h-16 px-[30px] py-5 rounded-[900px] border border-white justify-center items-center gap-[15px] flex">
            <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">&lt;&lt;&lt; Voltar</div>
        </div>
    </button>
</div>
    ))}
    </main>
   
    </>
  )
}
