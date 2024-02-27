'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'


export default function LandingPage() {
  const [nome, setNome] = useState("")
  const [email, setEmail] = useState("")
  const [mensagem, setMensagem] = useState("")

  const handleEmail = () => {
    //console.log("handleEmail()")
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-[#01073F] overflow-x-hidden overflow-y-auto w-full">
      <div className="scale-90">
        <div className="w-[1728px] h-[3388px] relative bg-[#01073F] bg-[#01073F] mt-[-250px]">
          <div className="w-[363.06px] h-[140px] left-[255px] top-[848px] absolute z-50">
            {/*<img className="w-[363.06px] h-[140px] left-0 top-0 absolute rounded-[5px] border border-sky-200 blur-[1px]" src="https://via.placeholder.com/363x140" />*/}
            <div className="w-[363.06px] h-[140px] left-0 top-0 absolute rounded-[5px] border border-sky-200 absolute bg-[#01073F] rounded-[3px] border border-sky-100 border-opacity-80 justify-start items-start gap-2.5 inline-flex bg-gradient-to-r from-blue-900 to-slate-900" />
            <div className="w-[175px] h-[35px] left-[100px] top-[38px] absolute text-center text-white text-[52px] font-normal font-['Roboto_Mono'] leading-normal tracking-[4.68px]">???</div>
          </div>
          <div className="w-[347.06px] h-[140px] left-[464px] top-[996px] absolute z-50">
            {/*<img className="w-[347.06px] h-[140px] left-[347.06px] top-0 absolute origin-top-left rotate-180 rounded-[5px] border border-purple-300 blur-[1px]" src="https://via.placeholder.com/347x140" />*/}
            <div className="z-2 w-[347.06px] h-[140px] left-[347.06px] top-[160px] absolute origin-top-left rotate-180 rounded-[5px] border border-indigo-300 rounded-[3px] border border-sky-200 border-opacity-80 justify-start items-start gap-2.5 inline-flex bg-gradient-to-r from-blue-900 to-slate-900"/>
            <div className="w-[175px] h-[35px] left-[95px] top-[57px] absolute text-center text-white text-[52px] font-normal font-['Roboto_Mono'] leading-normal tracking-[4.68px]">!!!</div>
          </div>
        <div className="w-[573px] h-[138px] left-[899px] top-[836px] absolute text-white text-4xl font-bold font-['Space_Grotesk']">Uma análise de sensibilidade humana, com a assertividade da tecnologia.</div>
        <div className="w-[475px] h-[171px] left-[899px] top-[996px] absolute text-white text-xl font-normal font-['Roboto_Mono'] leading-[30px]">Combinando a IA Generativa, um estudo de caso com centenas de empresas brasileiras e dados reunidos de mais de 300 cases de analytics de sucesso, nasceu a primeira ferramenta brasileira de diagnóstico de maturidade analítica.</div>
        <div className="w-[980px] h-[850px] left-[-506px] top-[571px] absolute bg-sky-600 bg-opacity-90 rounded-full blur-[900px]" />
        <img className="w-[628px] h-[461px] left-[844px] top-[217px] absolute mix-blend-screen" src="/images/chip.png" />
        <div className="left-[261px] top-[180px] absolute flex-col justify-start items-start gap-8 inline-flex">
          <img className="w-[120px] h-[31px]" src="/images/cognitivo.png" />
          <div className="w-[600px] text-white text-[46px] font-bold font-['Space_Grotesk']">Descubra o potencial de sua maturidade analítica<br/>e impulsione seus negócios. </div>
          <div className="w-[600px] text-white text-xl font-normal font-['Roboto_Mono'] leading-[30px]">O primeiro modelo de maturidade analítica<br/>para empresas do mercado brasileiro.</div>
          <div className="justify-start items-start gap-4 inline-flex">
          <a href='/cadastro'><div className="h-16 px-[30px] py-5 bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 flex">
              <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Fazer minha análise</div>
            </div></a>
          </div>
        </div>
        <div className="w-[2333px] h-[728px] left-[-302px] top-[2609px] absolute">
            <img className="w-[1065px] h-[711px] left-[1268px] top-[17px] absolute" src="/images/lines1.png" />
            <img className="w-[1065px] h-[711px] left-[1065px] top-0 absolute origin-top-left rotate-180" src="/images/lines2.png" />
        </div>
        <div className="w-[3000px] h-[722.69px] left-[-600px] top-[1832px] absolute bg-blue-900" >
            <img className="w-[489.50px] h-[592.82px] left-[870px] top-[10.96px] absolute origin-top-left rotate-[11deg] shadow" src="/images/relatorio.png" />
            <div className="w-[497px] h-[389px] left-[1472px] top-[121px] absolute">
                <div className="w-[495px] h-[138px] left-0 top-0 absolute text-white text-4xl font-bold font-['Space_Grotesk']">Tenha a indicação dos passos que precisa para levar seu negócio ao futuro.</div>
                <div className="w-[497px] h-[118px] left-0 top-[176px] absolute text-white text-xl font-normal font-['Roboto_Mono'] leading-[30px]">Lorem ipsum dolor sit amet consectetur. Morbi varius pellentesque viverra massa feugiat. Cras consequat aliquam orci elit cras id venenatis mi quis.</div>
                <a href='/cadastro' className="w-[292px] h-16 left-0 top-[325px] absolute justify-start items-start gap-4 inline-flex">
                    <div className="h-16 px-[30px] py-5 bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 flex">
                        <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Analisar minha empresa</div>
                    </div>
                </a>
            </div>
        </div>
        <img className="w-[696px] h-[448px] left-[-268px] top-[926px] absolute blur-[5px]" src="/images/bussola.png" />
        <img className="w-[509.22px] h-[374.73px] left-[927.51px] top-[1298px] absolute origin-top-left rotate-[16.19deg] shadow blur-[0px]" src="/images/binoculo.png" />
        <img className="w-[257px] h-[285px] left-[1374px] top-[1066px] absolute blur-[7px]" src="/images/lupa.png" />
        <img className="w-[738px] h-[927px] left-[1417px] top-[2025px] absolute blur-[25px]" src="/images/esfera.png" />
        <div className="left-[255px] top-[1370px] absolute flex-col justify-start items-start gap-[41px] inline-flex">
            <div className="w-[617px] h-[222px] text-white text-[46px] font-bold font-['Space_Grotesk']">Análise por níveis de maturidade,<br/>oferecendo a melhor solução personalizada.</div>
            <div className="w-[511px] py-[20px] text-white text-xl font-normal font-['Roboto_Mono'] leading-[30px]">Lorem ipsum dolor sit amet consectetur Morbi varius pellentesque viverra massa.</div>
        </div>
        <div className="w-[600px] h-[127px] left-[564px] top-[2601px] absolute text-center text-white text-4xl font-bold font-['Space_Grotesk']">Ainda com dúvidas?<br/>Entre em contato conosco.</div>
        <button className="w-[600px] left-[564px] top-[3182px] absolute justify-start items-start gap-4 inline-flex"  onClick={handleEmail}>
            <div className="grow shrink basis-0 h-16 px-[30px] py-5 bg-gradient-to-l from-sky-600 via-blue-700 to-violet-700 rounded-[900px] shadow justify-center items-center gap-2.5 flex">
                <div className="text-white text-base font-bold font-['Roboto_Mono'] leading-normal">Enviar</div>
            </div>
        </button>
        <div className="w-[600px] p-0 left-[564px] top-[2744px] absolute bg-[#01073F] rounded-[3px] border border-sky-200 border-opacity-60 justify-start items-start gap-2.5 inline-flex">
            <input type="text" id="nome" placeholder="Nome" className="text-white text-base font-normal font-['Roboto_Mono'] p-3 leading-10 bg-[#090C38] w-full h-full" value={nome} onChange={(e)=>setNome(e.target.value)} />
        </div>
        <div className="w-[600px] p-0 left-[564px] top-[2824px] absolute bg-[#01073F] rounded-[3px] border border-sky-200 border-opacity-60 justify-start items-start gap-2.5 inline-flex">
            <input type="text" id="email" placeholder="Email" className="text-white text-base font-normal font-['Roboto_Mono'] p-3 leading-10 bg-[#090C38] w-full h-full" value={email} onChange={(e)=>setEmail(e.target.value)} />
        </div>
        <div className="w-[600px] h-[238px] p-0 left-[564px] top-[2904px] absolute bg-[#01073F] rounded-[3px] border border-sky-200 border-opacity-60 justify-start items-start gap-2.5 inline-flex align-text-top">
            <textarea id="mensagem" placeholder="Mensagem" className="text-white text-base font-normal font-['Roboto_Mono'] p-3 leading-10 bg-[#090C38] w-full h-full resize-none" value={mensagem} onChange={(e)=>setMensagem(e.target.value)}></textarea>
        </div>
        <div className="h-6 left-[540px] top-[3340px] absolute">
            <img className="w-[90px] h-[23px] left-0 top-[1px] absolute" src="/images/cognitivo.png"/>
            <div className="left-[100px] w-[200px] top-0 absolute text-white text-xs font-bold font-['Roboto_Mono'] leading-normal">2023 © All rights reserved</div>
            <div className="left-[345px] w-[300px] top-[-4px] absolute"><span className="text-white text-xs font-bold font-['Roboto_Mono'] leading-normal">Images by </span><span className="text-white text-xs font-bold font-['Roboto_Mono'] underline leading-normal">uplyak</span><span className="text-white text-xs font-bold font-['Roboto_Mono'] leading-normal"> and </span><span className="text-white text-xs font-bold font-['Roboto_Mono'] underline leading-normal">Freepik</span></div>
        </div>
      </div>
      </div>
    </main>
  )
}
